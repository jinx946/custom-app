package com.custom.aspect;

import com.custom.entity.ApiRequestLog;
import com.custom.service.ApiRequestLogService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

/**
 * API请求日志切面
 * 拦截所有Controller层的请求，记录请求和响应信息
 */
@Aspect
@Component
public class ApiRequestLogAspect {

    private static final Logger logger = LoggerFactory.getLogger(ApiRequestLogAspect.class);

    @Autowired
    private ApiRequestLogService apiRequestLogService;

    @Autowired
    private ObjectMapper objectMapper;

    /**
     * 环绕通知：拦截所有Controller层的方法
     */
    @Around("execution(* com.custom.controller.*.*(..))")
    public Object logApiRequest(ProceedingJoinPoint joinPoint) throws Throwable {
        logger.info("========== AOP切面被触发 ==========");
        logger.info("目标方法: {}.{}",
                joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName());

        // 获取请求信息
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes == null) {
            logger.warn("无法获取请求上下文，跳过日志记录");
            return joinPoint.proceed();
        }

        HttpServletRequest request = attributes.getRequest();

        // 创建日志对象
        ApiRequestLog log = new ApiRequestLog();
        String requestId = UUID.randomUUID().toString().replace("-", "");
        log.setRequestId(requestId);
        log.setMethod(request.getMethod());
        log.setUrl(request.getRequestURI());
        log.setIpAddress(getClientIp(request));
        log.setUserAgent(request.getHeader("User-Agent"));

        // 记录请求参数
        try {
            Object[] args = joinPoint.getArgs();
            if (args != null && args.length > 0) {
                log.setRequestParams(objectMapper.writeValueAsString(args));
            }
        } catch (Exception e) {
            log.setRequestParams("解析请求参数失败: " + e.getMessage());
        }

        // 记录开始时间
        long startTime = System.currentTimeMillis();

        Object result = null;
        Exception exception = null;

        try {
            // 执行目标方法
            result = joinPoint.proceed();
            return result;
        } catch (Exception e) {
            exception = e;
            throw e;
        } finally {
            // 计算耗时
            long costTime = System.currentTimeMillis() - startTime;
            log.setCostTime(costTime);

            // 记录响应信息
            if (exception != null) {
                log.setSuccess(false);
                log.setErrorMessage(exception.getMessage());
                log.setResponseStatus(500);
            } else {
                log.setSuccess(true);
                try {
                    log.setResponseData(objectMapper.writeValueAsString(result));
                    // 从ResponseEntity中提取状态码
                    if (result instanceof org.springframework.http.ResponseEntity) {
                        org.springframework.http.ResponseEntity<?> responseEntity = (org.springframework.http.ResponseEntity<?>) result;
                        log.setResponseStatus(responseEntity.getStatusCodeValue());
                    } else {
                        log.setResponseStatus(200);
                    }
                } catch (Exception e) {
                    log.setResponseData("解析响应数据失败: " + e.getMessage());
                    log.setResponseStatus(200);
                }
            }

            // 同步保存日志（确保日志被保存）
            // saveLog(log);
            // 异步保存日志（避免影响主流程性能）
            saveLogAsync(log);
        }
    }

    /**
     * 异步保存日志
     */
    private void saveLogAsync(ApiRequestLog log) {
        try {
            apiRequestLogService.saveLog(log);
            logger.debug("API请求日志保存成功 - RequestId: {}, URL: {}, CostTime: {}ms",
                    log.getRequestId(), log.getUrl(), log.getCostTime());
        } catch (Exception e) {
            logger.error("API请求日志保存失败 - RequestId: {}, Error: {}",
                    log.getRequestId(), e.getMessage(), e);
        }
    }

    /**
     * 获取客户端真实IP
     */
    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        // 对于通过多个代理的情况，第一个IP为客户端真实IP
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip;
    }
}

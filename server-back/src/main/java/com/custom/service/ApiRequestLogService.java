package com.custom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.custom.entity.ApiRequestLog;
import com.custom.repository.ApiRequestLogRepository;

/**
 * API请求日志服务类
 */
@Service
public class ApiRequestLogService {

    private static final Logger logger = LoggerFactory.getLogger(ApiRequestLogService.class);

    @Autowired
    private ApiRequestLogRepository apiRequestLogRepository;

    /**
     * 保存API请求日志
     */
    @Transactional
    public ApiRequestLog saveLog(ApiRequestLog log) {
        logger.debug("正在保存API请求日志到数据库 - URL: {}, Method: {}", log.getUrl(), log.getMethod());
        try {
            ApiRequestLog savedLog = apiRequestLogRepository.save(log);
            logger.debug("数据库保存成功 - ID: {}", savedLog.getId());
            return savedLog;
        } catch (Exception e) {
            logger.error("数据库保存失败 - URL: {}, Error: {}", log.getUrl(), e.getMessage(), e);
            throw e;
        }
    }
}
-- 创建数据库
CREATE DATABASE IF NOT EXISTS custom_app DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE custom_app;

-- 创建 user 表
CREATE TABLE IF NOT EXISTS `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '用户ID',
    `username` VARCHAR(50) NOT NULL UNIQUE COMMENT '用户名',
    `password` VARCHAR(100) NOT NULL COMMENT '密码',
    `email` VARCHAR(50) COMMENT '邮箱',
    `phone` VARCHAR(20) COMMENT '手机号',
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    INDEX `idx_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';

-- 创建 api_request_log 表（API请求日志表）
CREATE TABLE IF NOT EXISTS `api_request_log` (
    `id` BIGINT NOT NULL AUTO_INCREMENT COMMENT '日志ID',
    `request_id` VARCHAR(64) NOT NULL COMMENT '请求唯一标识',
    `method` VARCHAR(10) NOT NULL COMMENT 'HTTP方法(GET/POST/PUT/DELETE等)',
    `url` VARCHAR(500) NOT NULL COMMENT '请求URL',
    `ip_address` VARCHAR(50) COMMENT '客户端IP地址',
    `request_params` TEXT COMMENT '请求参数(JSON格式)',
    `response_status` INT COMMENT '响应状态码',
    `response_data` TEXT COMMENT '响应数据(JSON格式)',
    `success` TINYINT(1) DEFAULT 0 COMMENT '是否成功(0-失败, 1-成功)',
    `error_message` TEXT COMMENT '错误信息',
    `cost_time` BIGINT COMMENT '耗时(毫秒)',
    `user_agent` VARCHAR(500) COMMENT '用户代理',
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (`id`),
    INDEX `idx_request_id` (`request_id`),
    INDEX `idx_create_time` (`create_time`),
    INDEX `idx_method` (`method`),
    INDEX `idx_success` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='API请求日志表';

-- 插入测试数据
INSERT INTO `user` (`username`, `password`, `email`, `phone`) VALUES
('admin', 'admin123', 'admin@example.com', '13800138000'),
('test', 'test123', 'test@example.com', '13800138001');

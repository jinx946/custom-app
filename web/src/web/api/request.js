import config from './config';

/**
 * 处理响应数据
 * @param {Response} response - fetch 响应对象
 * @returns {Promise} 解析后的数据
 */
async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  
  // 检查响应是否为 JSON
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  
  return response.text();
}

/**
 * 构建完整的 URL
 * @param {string} url - 请求路径
 * @param {Object} params - 查询参数
 * @returns {string} 完整的 URL
 */
function buildURL(url, params) {
  const fullURL = url.startsWith('http') ? url : `${config.baseURL}${url}`;
  
  if (!params || Object.keys(params).length === 0) {
    return fullURL;
  }
  
  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  
  return queryString ? `${fullURL}?${queryString}` : fullURL;
}

/**
 * 通用请求方法
 * @param {string} url - 请求 URL
 * @param {Object} options - 请求选项
 * @returns {Promise} 请求结果
 */
async function request(url, options = {}) {
  const {
    method = 'GET',
    params = {},
    data = null,
    headers = {},
    timeout = config.timeout,
  } = options;

  // 构建完整 URL
  const fullURL = method === 'GET' ? buildURL(url, params) : url;

  // 合并请求头
  const requestHeaders = {
    ...config.headers,
    ...headers,
  };

  // 如果有 token，添加到请求头
  const token = localStorage.getItem('token');
  if (token) {
    requestHeaders['Authorization'] = `Bearer ${token}`;
  }

  // 构建请求配置
  const requestOptions = {
    method,
    headers: requestHeaders,
    credentials: 'include', // 允许携带 cookie
  };

  // 如果是 POST/PUT/PATCH，添加请求体
  if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
    requestOptions.body = typeof data === 'string' ? data : JSON.stringify(data);
  }

  // 创建 AbortController 用于超时控制
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(fullURL, {
      ...requestOptions,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return await handleResponse(response);
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error('请求超时');
    }
    
    console.error('Request error:', error);
    throw error;
  }
}

/**
 * GET 请求
 * @param {string} url - 请求 URL
 * @param {Object} params - 查询参数
 * @param {Object} options - 其他选项
 * @returns {Promise} 请求结果
 */
export function get(url, params = {}, options = {}) {
  return request(url, {
    method: 'GET',
    params,
    ...options,
  });
}

/**
 * POST 请求
 * @param {string} url - 请求 URL
 * @param {Object} data - 请求数据
 * @param {Object} options - 其他选项
 * @returns {Promise} 请求结果
 */
export function post(url, data = {}, options = {}) {
  return request(url, {
    method: 'POST',
    data,
    ...options,
  });
}

/**
 * PUT 请求
 * @param {string} url - 请求 URL
 * @param {Object} data - 请求数据
 * @param {Object} options - 其他选项
 * @returns {Promise} 请求结果
 */
export function put(url, data = {}, options = {}) {
  return request(url, {
    method: 'PUT',
    data,
    ...options,
  });
}

/**
 * DELETE 请求
 * @param {string} url - 请求 URL
 * @param {Object} params - 查询参数
 * @param {Object} options - 其他选项
 * @returns {Promise} 请求结果
 */
export function del(url, params = {}, options = {}) {
  return request(url, {
    method: 'DELETE',
    params,
    ...options,
  });
}

/**
 * PATCH 请求
 * @param {string} url - 请求 URL
 * @param {Object} data - 请求数据
 * @param {Object} options - 其他选项
 * @returns {Promise} 请求结果
 */
export function patch(url, data = {}, options = {}) {
  return request(url, {
    method: 'PATCH',
    data,
    ...options,
  });
}

// 导出通用 request 方法
export default request;

const nodeEnv = import.meta.env.VITE_NODE_ENV

const axiosConfig = {
  baseURL: nodeEnv === 'production' ? '' : 'http://127.0.0.1',
  timeout: 10000
}

export default axiosConfig

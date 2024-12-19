// lib/localRedis.ts
import Redis from 'ioredis';

export const cacheKey = "myApiData";


// Initialize Redis using local URL
const redis = new Redis('redis://127.0.0.1:6379');

export default redis;


// sudo service redis-server start

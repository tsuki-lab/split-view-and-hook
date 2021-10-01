import aspida from '@aspida/axios'
import api from './api/$api'
import axios from 'axios'

export const microcmsClient = api(
  aspida(axios, {
    baseURL: process.env.NEXT_PUBLIC_MICROCMS_BASE_URL,
    headers: {
      'X-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_API_KEY || ''
    }
  })
)

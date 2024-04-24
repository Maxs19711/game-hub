import axios from "axios";


export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7f31bba8dab04934835e0f478652b736'
  }
})
import axios from "axios";

const apiKey = 'NT95Olk0aVgOcflKrhlhabpwZAxoCav6';
const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/topstories/v2'
});

export {apiKey, api}

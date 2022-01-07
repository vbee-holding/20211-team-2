import axois from 'axios';

const url = 'http://localhost:5000/topic';

export const fetchTopic = () => axois.get(url)
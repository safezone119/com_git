import axios from 'axios';

// 1. HTTP Request & Respones 와 관련된 기본 설정
const config  = {
    baseUrl : 'https://api.hnpwa.com/v0/'
};

//2. 공통 API 함수 정리
function fetchNewsList(){
    return axios.get(config.baseUrl + 'news/1.json')
    // return axios.get(`${config.baseUrl} news/1.json`); //ES6 문법
}

function fetchJobList(){
    return axios.get(config.baseUrl + 'jobs/1.json')
}

function fetchAskList(){
    return axios.get(config.baseUrl + 'ask/1.json')
}

//꺼내줌
export {
    fetchNewsList,
    fetchJobList,
    fetchAskList
}
import axios from "axios";

// axios.create : 사용자 정의 파라미터를 포함해서 새로운 axios 인스턴스를 생성해주는 함수
function create(baseURL, options) {
  const instance = axios.create({
    baseURL: baseURL,
    ...options,
  });

  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);

// 예시
// development : http://localhost:5000/post/
// production : http://localhost:5001/post/
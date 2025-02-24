export const COMMON_API_URL =
  "http://ec2-43-200-237-253.ap-northeast-2.compute.amazonaws.com:8080/api";

export const API_URL = {
  nickname: `${COMMON_API_URL}/user/username`,
  categories: `${COMMON_API_URL}/categories`,
  choices: `${COMMON_API_URL}/choices`,
  games: `${COMMON_API_URL}/categories/{categoryId}/questions`
};

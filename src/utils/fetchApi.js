export const fetchApi = async (url, options) => {
  try{
  const response = await fetch(url, options);
  console.log("📢 fetch 응답 상태 코드:", response.status);

  return response.json();
} catch (error) {
  console.error("🚨 fetchApi 에러:", error);
  throw error;
}
}

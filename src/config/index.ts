export const config = {
  apiUrl: `${process.env.API_URL ?? "http://localhost:5000/api/v1"}`,
  cookiesExpireTime: 1000 * 60 * 60 * 24 * 7,
};

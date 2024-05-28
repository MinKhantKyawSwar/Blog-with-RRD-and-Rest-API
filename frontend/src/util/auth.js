export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  } else {
    return token;
  }
};

export const tokenLoader = () => {
  return getToken();
};

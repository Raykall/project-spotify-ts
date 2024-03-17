export const validateEmail = (email: string) => {
  const regExp = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return regExp.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const regExpPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
  return regExpPassword.test(String(password).toLowerCase());
};

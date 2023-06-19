export const waitUtil = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

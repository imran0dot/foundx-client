const delay = async (ms = 2000) => {
  return await new Promise<void>((resolve) => setTimeout(resolve, ms));
};

export default delay;

import envConfig from "@/src/config/envConfig";
const getRecentPost = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=3`
  );

  return res.json();
};

export default getRecentPost;

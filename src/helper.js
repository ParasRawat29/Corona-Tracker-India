const baseUrl = "https://data.covid19india.org/v4/min/data.min.json";

export const getApi = async () => {
  const res = await fetch(baseUrl).then((result) => result.json());

  return res;
};

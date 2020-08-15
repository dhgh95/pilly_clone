export const IPADRESS_SJ = "http://10.58.7.19:8000";
export const IPADRESS_TS = "http://10.58.2.180:8000";

export const useFetch = (url, option = { method: "GET" }) => {
  const get = () => {
    return option.token
      ? fetch(url, {
          headers: {
            Authorization: option.token,
          },
        })
      : fetch(url);
  };

  const post = () => {
    return option.token
      ? fetch(url, {
          method: "POST",
          headers: {
            Authorization: option.token,
          },
          body: JSON.stringify(option.body),
        })
      : fetch(url, {
          method: "POST",
          body: JSON.stringify(option.body),
        });
  };

  return option.method === "POST" ? post() : get();
};

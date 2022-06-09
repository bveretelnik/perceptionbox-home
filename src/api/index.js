import axios from "axios";

export const getCharacters = () => {
  const url = `character`;
  return axios
    .get(url)
    .then((res) => {
      return res?.data?.results;
    })
    .catch((e) => console.log(e));
};

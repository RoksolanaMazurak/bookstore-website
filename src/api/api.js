import axios from "axios";

export const getAllItems = async () => {
  return (await axios.get("http://localhost:5050/api/items")).data;
};

export const getFilteredItems = async (filters) => {
  return (
    await axios.get(`http://localhost:5050/api/items/filters/`, {
      params: filters,
    })
  ).data;
};

export const getItemById = async (id) => {
  return (await axios.get(`http://localhost:5050/api/items/${id}`)).data;
};

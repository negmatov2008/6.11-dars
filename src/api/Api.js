import { useParams, useSearchParams } from "react-router-dom";
import * as React from "react";

const baseUrl = "https://api.escuelajs.co/api/v1";

export const getApi = async () => {
  const res = await fetch(baseUrl + "/products");
  return res.json();
};

export const getCategore = async () => {
  const res = await fetch(baseUrl + "/categories");
  return res.json();
};

export const getSingleCategore = async (id) => {
  const res = await fetch(baseUrl + "/categories/" + id + "/products");
  return res.json();
};

export const getSingleProduct = async () => {
  const { id } = useParams();
  console.log(id);
  const res = await fetch(baseUrl + "/products/" + id);
  return res.json();
};

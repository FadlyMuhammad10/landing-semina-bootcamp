import axios from "axios";

import { config } from "../config";

export async function postData(url, payload, formData) {
  try {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    return await axios.post(`${config.api_host_dev}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });
  } catch (err) {
    console.log(err);
    // return handleError(err);
  }
}

export async function getData(url) {
  try {
    return await axios
      .get(`${config.api_host_dev}${url}`)
      .then((res) => res.data);
  } catch (err) {
    console.log(err);
    // return handleError(err);
  }
}

export async function putData(url, payload, token) {
  return await axios.put(`${config.api_host_dev}${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

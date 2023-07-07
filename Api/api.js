import axios from "axios";
// import { useState } from "react";

const axiosInstance = axios.create({
  // baseURL: `http://nestobackend-env.eba-fk3zufmz.ap-south-1.elasticbeanstalk.com/api`,
  baseURL: `http://ec2-54-166-52-219.compute-1.amazonaws.com/api`,
  // baseURL: `http://localhost:3001/api`,

  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${localStorage.getItem("token")}`,
    // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
  },
});
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.Authorization;
  }
};

export { axiosInstance, setAuthToken };
// export { axiosInstance, LoadingSpinner };

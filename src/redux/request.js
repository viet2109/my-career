import axios from "axios";
import {
    logOutFailed,
    logOutStart,
    logOutSuccess,
    loginFailed,
    loginStart,
    loginSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
} from "./authSlice";
import { resultCal } from "./quizHollandSlice";

export const quizCal = (formData, dispatch, navigate) => {
  dispatch(resultCal(formData));
  navigate("/trac-nghiem-ban-than/ket-qua");
};

const ax = axios.create({
  baseURL: "https://be-zb3u.onrender.com/api/",
});

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await ax.post("auth/login", user);

    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const  registerNewUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await ax.post("auth/register", user);
    dispatch(registerSuccess(res.data));
    navigate("/");
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfXsghyFMoWgDF-yZ1_h-Al1YH7aRnqMr0-9Shloczzn7alfg/formResponse"
    const formData = new FormData();
    formData.append("entry.193002949", user.name);
    formData.append("entry.969596244", user.email);
    formData.append("entry.1385062621", user.phoneNumber);
    await fetch(formUrl, {
      method: "POST",
      mode: 'no-cors',
      body: formData,
    });
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const logOutUser = async (token, dispatch, navigate) => {
  dispatch(logOutStart());

  try {
    await ax.post("auth/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(logOutSuccess());
    navigate("/");
  } catch (error) {
    dispatch(logOutFailed());
  }
};

export const getAllQuestion = async (token) => {
  try {
    const res = await ax.get("questions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {}
};

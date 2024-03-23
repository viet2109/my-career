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
  baseURL: process.env.REACT_APP_API_URL,
});

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await ax.post("auth/login", user);

    dispatch(loginSuccess(res.data));
    navigate("/class");
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const registerNewUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await ax.post("auth/register", user);
    dispatch(registerSuccess(res.data));
    navigate("/class");
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
    navigate("/login/student");
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

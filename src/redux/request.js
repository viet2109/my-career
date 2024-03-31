import axios from "axios";
import config from "~/config";
import {fetchStart, fetchEnded } from "./apiGeneralSlice";
import {
  getCurrentUserSucess,
  logOutFailed,
  logOutSuccess,
  loginFailed,
  loginSuccess,
  registerFailed,
  registerSuccess,
  updateUserSuccess,
} from "./authSlice";
import { resultCal, sendResultSuccess } from "./quizHollandSlice";
import routes from "~/config/routes";

export const quizCal = (formData, dispatch, navigate) => {
  dispatch(resultCal(formData));
  navigate("/trac-nghiem-ban-than/ket-qua");
};

const ax = axios.create({
  baseURL: "http://localhost:9999/api/",
});

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(fetchStart());
  try {
    const res = await ax.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    await getCurrentUser(res.data.token, dispatch);
    navigate(config.routes.home);
  } catch (error) {
    dispatch(loginFailed());
  }
  dispatch(fetchEnded());
};

export const registerNewUser = async (user, dispatch, navigate) => {
  dispatch(fetchStart());
  try {
    const res = await ax.post("auth/register", user);
    dispatch(registerSuccess(res.data));
    navigate(config.routes.home);
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfXsghyFMoWgDF-yZ1_h-Al1YH7aRnqMr0-9Shloczzn7alfg/formResponse";
    const formData = new FormData();
    formData.append("entry.193002949", user.name);
    formData.append("entry.969596244", user.email);
    formData.append("entry.1385062621", user.phoneNumber);
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
  } catch (error) {
    dispatch(registerFailed());
  }
  dispatch(fetchEnded());
};

export const logOutUser = async (token, dispatch, navigate) => {
  dispatch(fetchStart());
  try {
    await ax.post("auth/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(logOutSuccess());
    navigate(config.routes.signin);
  } catch (error) {
    dispatch(logOutFailed());

  }
  dispatch(fetchEnded());
};

export const sendHollandResult = async (user, data, dispatch, navigate) => {
  dispatch(fetchStart());
  try {
    await ax.post("holland", data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch(sendResultSuccess());
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfZJGyvZ6-U85g0ujQFiNcqZ95eZtdNspd1YBP5UwNfiDayjQ/formResponse";
    const formData = new FormData();
    formData.append("entry.553266993", user.name);
    formData.append("entry.1383757729", user.phoneNumber);
    formData.append("entry.463976797", data[0].value);
    formData.append("entry.1428557086", data[1].value);
    formData.append("entry.777566989", data[2].value);
    formData.append("entry.1301575222", data[3].value);
    formData.append("entry.1053946586", data[4].value);
    formData.append("entry.1834707536", data[5].value);
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    await getCurrentUser(user.token, dispatch);
    navigate(routes.result);
  } catch (error) {

  }
  dispatch(fetchEnded());
};

export const getCurrentUser = async (token, dispatch) => {
  dispatch(fetchStart());

  try {
    const result = await ax.get("auth/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   
    dispatch(getCurrentUserSucess(result.data));
  } catch (error) {
  }
  dispatch(fetchEnded());
};

export const updateCurrentUser = async (token, user, dispatch, navigate) => {
  dispatch(fetchStart());

  try {
    await ax.put("auth/current", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(updateUserSuccess(user));
    navigate(routes.profile);
  } catch (error) {
  }
  dispatch(fetchEnded());
};

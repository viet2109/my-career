import axios from "axios";
import config from "~/config";
import routes from "~/config/routes";
import { fetchFailed, fetchStart, fetchSuccess } from "./apiGeneralSlice";
import {
  getCurrentUserSucess,
  logOutSuccess,
  loginSuccess,
  registerSuccess,
  resetPasswordSuccess,
  sendOTPSuccess,
  updateUserSuccess,
} from "./authSlice";
import { resultCal, sendResultSuccess } from "./quizHollandSlice";

export const quizCal = (formData, dispatch, navigate) => {
  dispatch(resultCal(formData));
  navigate("/trac-nghiem-ban-than/ket-qua", { scrollOptions: { top: 0 } });
};

const ax = axios.create({
  baseURL: "https://be-oy7w.onrender.com/api/",
});

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(fetchStart());
  try {
    const res = await ax.post("auth/login", user);
    dispatch(fetchSuccess());
    dispatch(loginSuccess(res.data));
    await getCurrentUser(res.data.token, dispatch);
    navigate(config.routes.home, { scrollOptions: { top: 0 } });
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const registerNewUser = async (user, dispatch, navigate) => {
  dispatch(fetchStart());
  try {
    const res = await ax.post("auth/register", user);
    dispatch(fetchSuccess());
    dispatch(registerSuccess(res.data));
    navigate(config.routes.home, { scrollOptions: { top: 0 } });
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfXsghyFMoWgDF-yZ1_h-Al1YH7aRnqMr0-9Shloczzn7alfg/formResponse";
    const formData = new FormData();
    formData.append("entry.193002949", user.name);
    formData.append("entry.1385062621", user.phoneNumber);
    formData.append("entry.728956514", user.futureSchool);

    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const logOutUser = async (token, dispatch, navigate) => {
  dispatch(fetchStart());
dispatch(logOutSuccess());
  try {
    await ax.post("auth/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchSuccess());
    
    navigate("/", { scrollOptions: { top: 0 } });
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const sendHollandResult = async (user, data, dispatch, navigate) => {
  dispatch(fetchStart());
  try {
    await ax.post("holland", data, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch(fetchSuccess());
    dispatch(sendResultSuccess());
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfZJGyvZ6-U85g0ujQFiNcqZ95eZtdNspd1YBP5UwNfiDayjQ/formResponse";
    const formData = new FormData();
    formData.append("entry.553266993", user.name);
    formData.append("entry.1383757729", user.phoneNumber);
    formData.append("entry.93762182", user.futureSchool);
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
    navigate(routes.result, { scrollOptions: { top: 0 } });
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const getCurrentUser = async (token, dispatch) => {
  dispatch(fetchStart());

  try {
    const result = await ax.get("auth/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(fetchSuccess());
    dispatch(getCurrentUserSucess(result.data));
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const updateCurrentUser = async (token, user, dispatch, navigate) => {
  dispatch(fetchStart());

  try {
    const response = await ax.put("auth/current", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    user = { ...user, token: response.data.token };

    dispatch(fetchSuccess());
    dispatch(updateUserSuccess(user));

    navigate(routes.profile, { scrollOptions: { top: 0 } });
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const sendOTP = async (user, dispatch, navigate) => {
  dispatch(fetchStart());

  try {
    await ax.get("auth/user/password", {
      params: {
        phoneNumber: user.phoneNumber
      }
    });
   
    dispatch(fetchSuccess());
    dispatch(sendOTPSuccess());

    navigate(routes["reset-password"], {
      scrollOptions: { top: 0 },
      state: { phoneNumber: user.phoneNumber },
    });
  } catch (error) {
    dispatch(fetchFailed());
  }
};

export const resetPassword = async (user, dispatch, navigate) => {
  dispatch(fetchStart());

  try {
    await ax.put("auth/current/pass", user);
    dispatch(fetchSuccess());
    dispatch(resetPasswordSuccess());

    navigate(routes.signin, { scrollOptions: { top: 0 } });
  } catch (error) {
    dispatch(fetchFailed());
  }
};

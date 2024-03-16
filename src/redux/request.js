import { resultCal } from "./quizHollandSlice";

export const quizCal = (formData, dispatch, navigate) => {
    dispatch(resultCal(formData));
    navigate('/trac-nghiem-ban-than/ket-qua')
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetBlackList } from "~/redux/apiGeneralSlice";

function usePageViews() {
  const location = useLocation();

  const isSignUp = useSelector((state) => state.auth.isSignUp);
  const dispatch = useDispatch();

  useEffect(() => {
    // Gửi action để reset blacklist mỗi khi path thay đổi
    dispatch(resetBlackList());
  }, [location.pathname]);
}

export default usePageViews;

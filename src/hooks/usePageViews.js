import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { resetBlackList } from "~/redux/apiGeneralSlice";

function usePageViews() {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    // Gửi action để reset blacklist mỗi khi path thay đổi
    dispatch(resetBlackList());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
}

export default usePageViews;

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate} from 'react-router-dom';

function usePageViews() {
  let location = useLocation();
  const navigate = useNavigate();
  const isSignUp = useSelector((state) => state.auth.isSignUp);

  useEffect(() => {
    if (location.pathname === '/') {
        
    }else {
        if (!isSignUp) {
            alert("Vui lòng đăng ký tài khoản để tiếp tục!");
            if (location.pathname !== '/') {
                navigate('/');
            }
        }
    }
  }, [location]);
}

export default usePageViews;
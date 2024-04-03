import classNames from "classnames/bind";
import Button from "~/components/Button";
import routes from "~/config/routes";
import styles from "./SignUpRole.module.scss";

SignUpRole.propTypes = {};

const cx = classNames.bind(styles);

function SignUpRole(props) {


  return (
    <div className={cx("body-wrapper")}>
    <h1 className={cx("title")}>
      Đăng kí tài khoản mới
      <p className={cx("des")}>Chọn vai trò để tiếp tục</p>
    </h1>
    <div className={cx("select-role-wrapper")}>
      <div className={cx("select-role")}>
        <img
          className={cx("image-select")}
          src={
            "https://shub.edu.vn/images/illustrations/student-illustration.svg"
          }
          alt="student-select"
        />
      
          <Button to={routes.signup} className={cx("select-role-btn", "student")} >Tôi là học sinh</Button>
       
      </div>
      <div className={cx("select-role")}>
        <img
          className={cx("image-select")}
          src={
            "https://shub.edu.vn/images/illustrations/teacher-illustration.svg"
          }
          alt="teacher-select"
        />
      
          <Button href={'https://careerviet.vn/careertrip-getnamecard'} className={cx("select-role-btn", "teacher")} >
            Tôi là sinh viên
          </Button>
       
      </div>
    </div>
  </div>
  );
}

export default SignUpRole;

import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthForm from "~/components/AuthForm";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import config from "~/config";
import { loginUser } from "~/redux/request";
import styles from "./SignIn.module.scss";

SignIn.propTypes = {};

const cx = classNames.bind(styles);

const LoginSchema = yup.object().shape({
  tel: yup.string().required("Bạn cần nhập số điện thoại"),
  password: yup.string().required("Bạn cần nhập mật khẩu"),
});
function SignIn(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.apiGeneral.error)

  return (
    <>
      <AuthForm>
        <Formik
          initialValues={{
            tel: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            const userInfo = {
              phoneNumber: values.tel,
              password: values.password,
            };
            loginUser(userInfo, dispatch, navigate);
          }}
        >
          {({ errors, touched }) => (
            <Form className={cx("form-login", classNames)}>
              <h1 className={cx("title")}>Đăng nhập</h1>
              <div className={cx("input-field")}>
                <FastField
                  error={errors.tel && touched.tel}
                  name="tel"
              
                  label="Số điện thoại"
                  component={InputField}
                >
                  {errors.tel && touched.tel ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.tel}
                    </div>
                  ) : null}
                </FastField>
              </div>

              <div className={cx("input-field")}>
                <FastField
                  error={errors.password && touched.password}
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  component={InputField}
                >
                  {errors.password && touched.password ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.password}
                    </div>
                  ) : null}
                </FastField>
              </div>

              <div className={cx("forgot-pass")}>
                <Link className={cx("link")} to={"/"}>
                  {" "}
                  Quên mật khẩu ?
                </Link>
              </div>
              {error ? (
                <p className={cx("notice")}>
                  Số điện thoại hoặc mật khẩu không đúng
                </p>
              ) : (
                <Fragment></Fragment>
              )}

              <Button
                type={"submit"}
                className={cx("login-button")}
                primary
                noneOutline
              >
                Đăng nhập
              </Button>
              <p className={cx("title-select-login")}>Hoặc</p>

              <p className={cx("signup-link")}>
                Bạn chưa có tài khoản?{" "}
                <Link className={cx("link")} to={config.routes["signup-role"]}>
                  Đăng kí ngay
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </AuthForm>
    </>
  );
}

export default SignIn;

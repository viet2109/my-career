import classNames from "classnames/bind";
import * as yup from "yup";
import AuthForm from "~/components/AuthForm";
import styles from "./SignIn.module.scss";
import { Link } from "react-router-dom";
import { Form, Formik, FastField } from "formik";
import InputField from "~/components/InputField";
import Button from "~/components/Button";
import { Fragment } from "react";
import { useSelector } from "react-redux";

SignIn.propTypes = {};

const cx = classNames.bind(styles);

const LoginSchema = yup.object().shape({
  email: yup.string().required("Bạn cần nhập email"),
  password: yup.string().required("Bạn cần nhập mật khẩu"),
});
function SignIn(props) {
  const error = useSelector((state) => state.auth.error)
  const isFetching = useSelector(state => state.auth.isFetching)
  return (
    <>
      <AuthForm>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(user) => {}}
        >
          {({ errors, touched }) => (
            <Form className={cx("form-login", classNames)}>
              <h1 className={cx("title")}>Đăng nhập</h1>
              <div className={cx("input-field")}>
                <FastField
                  error={errors.email && touched.email}
                  name="email"
                  label="Email"
                  component={InputField}
                >
                  {errors.email && touched.email ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.email}
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
                  Địa chỉ email hoặc mật khẩu không đúng
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
                <Link className={cx("link")} to={"/dang-ki"}>
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

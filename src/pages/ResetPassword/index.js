import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthForm from "~/components/AuthForm";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import { resetPassword } from "~/redux/request";
import styles from "./ResetPassword.module.scss";
import { Fragment } from "react";

ResetPassword.propTypes = {};

const cx = classNames.bind(styles);

const ResetPasswordSchema = yup.object().shape({
  otp: yup.string().required("Bạn cần nhập mã OTP"),
  password: yup
    .string()
    .required("Bạn cần nhập mật khẩu")
    .min(6, "Mật khẩu cần ít nhất 6 kí tự"),
});
function ResetPassword(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const error = useSelector((state) => state.apiGeneral.error);

  return (
    <>
      <AuthForm>
        <Formik
          initialValues={{
            password: "",
            otp: "",
            phoneNumber: location.state.phoneNumber,
          }}
          validationSchema={ResetPasswordSchema}
          onSubmit={(values) => {
            const userInfo = {
              phoneNumber: values.phoneNumber,
              otp: values.otp,
              password: values.password,
            };
            resetPassword(userInfo, dispatch, navigate);
          }}
        >
          {({ errors, touched }) => (
            <Form className={cx("form-login", classNames)}>
              <h1 className={cx("title")}>Tạo mật khẩu mới</h1>
              <p className={cx("des")}>
                Vui lòng điền mã OTP vừa được gửi đến số điện thoại và mật khẩu
                mới vào ô dưới đây
              </p>
              <div className={cx("input-field")}>
                <FastField
                  error={errors.otp && touched.otp}
                  name="otp"
                  label="Mã OTP"
                  component={InputField}
                >
                  {errors.otp && touched.otp ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.otp}
                    </div>
                  ) : null}
                </FastField>
              </div>
              <div className={cx("input-field")}>
                <FastField
                  error={errors.password && touched.password}
                  name="password"
                  label="Mật khẩu mới"
                  component={InputField}
                >
                  {errors.password && touched.password ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.password}
                    </div>
                  ) : null}
                </FastField>
              </div>
              {error ? (
                <p className={cx("notice")}>
                  Mã OTP không hợp lệ hoặc đã hết hạn
                </p>
              ) : (
                <Fragment></Fragment>
              )}

              <Button type={"submit"} className={cx("login-button")}>
                Gửi
              </Button>
            </Form>
          )}
        </Formik>
      </AuthForm>
    </>
  );
}

export default ResetPassword;

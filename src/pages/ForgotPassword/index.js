import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthForm from "~/components/AuthForm";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import { sendOTP } from "~/redux/request";
import styles from "./ForgotPassword.module.scss";

ForgotPassword.propTypes = {};

const cx = classNames.bind(styles);

const ForgotPasswordSchema = yup.object().shape({
  tel: yup
    .string()
    .required("Bạn cần nhập số điện thoại")
    .matches(/^(?:\+84)?\d{10,15}$/, "Số điện thoại không đúng"),
});
function ForgotPassword(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.apiGeneral.error);

  return (
    <>
      <AuthForm>
        <Formik
          initialValues={{
            tel: "",
          }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values) => {
            const userInfo = {
              phoneNumber: values.tel,
            };
            sendOTP(userInfo, dispatch, navigate);
          }}
        >
          {({ errors, touched }) => (
            <Form className={cx("form-login", classNames)}>
              <h1 className={cx("title")}>Khôi phục mật khẩu</h1>
              <p className={cx("des")}>
                Nhập số điện thoại đã đăng ký của bạn vào bên dưới để nhận mã
                OTP để đặt lại mật khẩu
              </p>
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
              {error ? (
                <p className={cx("notice")}>
                  Số điện thoại chưa được đăng kí
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

export default ForgotPassword;

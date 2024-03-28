import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import images from "~/assets/images";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import { registerNewUser } from "~/redux/request";
import styles from "./Profile.module.scss";
import routes from "~/config/routes";
Profile.propTypes = {};

const provinces = [
  "Tiền Giang",
  "Hưng Yên",
  "Hà Nội",
  "TP Hồ Chí Minh",
  "Cà Mau",
  "Đắc Lắc",
  "Nam Định",
  "Quảng Ninh",
  "Đắk Nông",
  "Đà Nẵng",
  "Hải Dương",
  "Long An",
  "Bến Tre",
  "Đồng Tháp",
  "Vĩnh Long",
  "Kiên Giang",
  "Trà Vinh",
  "Sóc Trăng",
  "Bắc Ninh",
  "Thanh Hoá",
  "Vũng Tàu",
  "Đồng Nai",
  "Bình Dương",
  "Thái Nguyên",
  "Thái Bình",
  "Cần Thơ",
  "Nghệ An",
  "Huế",
  "Bình Phước",
  "Quảng Nam",
  "Quảng Ngãi",
  "Ninh Thuận",
  "Lào Cai",
  "Hải Phòng",
  "An Giang",
  "Phú Thọ",
  "Tây Ninh",
  "Khánh Hòa",
  "Phú Yên",
  "Hòa Bình",
  "Tuyên Quang",
  "Lai Châu",
  "Hậu Giang",
  "Lâm Đồng",
  "Lạng Sơn",
  "Hà Nam",
  "Bắc Cạn",
  "Bình Định",
  "Cao Bằng",
  "Sơn La",
  "Quảng Bình",
  "Quảng Trị",
  "Gia Lai",
  "Bắc Giang",
  "Hà Tĩnh",
  "Ninh Bình",
  "Bình Thuận",
  "Kon Tum",
  "Vĩnh Phúc",
  "Bạc Liêu",
  "Yên Bái",
  "Điện Biên",
  "Hà Giang",
];
const userSchema = yup.object().shape({
  name: yup.string(),
  tel: yup
    .string()
    .matches(
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
      "Số điện thoại không đúng"
    ),
  class: yup.string(),
  other: yup.string(),
  school: yup.string(),
  province: yup.string().oneOf(provinces, "Tỉnh/Thành phố không hợp lệ"),
  futureSchool: yup.string(),
});

const cx = classNames.bind(styles);
function Profile(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login.currentUser);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-wrapper")}>
        <div className={cx("header")}>
          <p className={cx("info")}>
            <img
              src={images["user-avatar"]}
              alt="avatar"
              className={cx("avatar")}
            />
            <span>{user?.name}</span>
          </p>
          <p className={cx("des")}>Cập nhật hồ sơ</p>
        </div>
        <Formik
          initialValues={{
            name: user.name || "",
            tel: user.phoneNumber || "",
            sex: user.sex || "",
            class: user.class || "",
            other: user.other || "",
            school: user.school || "",
            province: user.province || "",
            futureSchool: user.futureSchool || "",
          }}
          validationSchema={userSchema}
          onSubmit={(values) => {
            const userInfo = {
              name: values.name,
              email: values.email,
              password: values.password,
              phoneNumber: values.tel,
            };
            registerNewUser(userInfo, dispatch, navigate);
          }}
        >
          {({ errors, touched }) => (
            <Form className={cx("form")}>
              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Họ và tên:</p>
                <FastField
                  className={cx("input-field")}
                  error={errors.name && touched.name}
                  name="name"
                  type="text"
                  component={InputField}
                >
                  {errors.name && touched.name ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.name}
                    </div>
                  ) : null}
                </FastField>
              </div>
              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Giới tính</p>
                <div className={cx("radio-wrapper")}>
                  <div className={cx("radio")}>
                    <FastField
                      className={cx("input-field")}
                      error={errors.name && touched.name}
                      name="sex"
                      type="radio"
                      id="sex1"
                      value="male"
                      component={InputField}
                    >
                      {errors.name && touched.name ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.name}
                        </div>
                      ) : null}
                    </FastField>
                    <label htmlFor="sex1">Male</label>
                  </div>
                  <div className={cx("radio")}>
                    <FastField
                      className={cx("input-field")}
                      error={errors.name && touched.name}
                      name="sex"
                      type="radio"
                      id="sex2"
                      value="female"
                      component={InputField}
                    >
                      {errors.name && touched.name ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.name}
                        </div>
                      ) : null}
                    </FastField>
                    <label htmlFor="sex2">Female</label>
                  </div>
                </div>
              </div>
              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Số điện thoại:</p>
                <FastField
                  className={cx("input-field")}
                  error={errors.tel && touched.tel}
                  name="tel"
                  type="text"
                  component={InputField}
                >
                  {errors.tel && touched.tel ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.tel}
                    </div>
                  ) : null}
                </FastField>
              </div>
              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Bạn dự định thi trường nào:</p>
                <FastField
                  className={cx("input-field")}
                  error={errors.futureSchool && touched.futureSchool}
                  name="futureSchool"
                  type="text"
                  component={InputField}
                >
                  {errors.futureSchool && touched.futureSchool ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.futureSchool}
                    </div>
                  ) : null}
                </FastField>
              </div>
              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Học sinh lớp</p>
                <div className={cx("radio-wrapper")}>
                  <div className={cx("radio")}>
                    <FastField
                      className={cx("input-field")}
                      error={errors.class && touched.class}
                      name="class"
                      type="radio"
                      id="class1"
                      value="10"
                      component={InputField}
                    >
                      {errors.class && touched.class ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.class}
                        </div>
                      ) : null}
                    </FastField>
                    <label htmlFor="class1">Lớp 10</label>
                  </div>
                  <div className={cx("radio")}>
                    <FastField
                      className={cx("input-field")}
                      error={errors.class && touched.class}
                      name="class"
                      type="radio"
                      id="class2"
                      value="11"
                      component={InputField}
                    >
                      {errors.class && touched.class ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.class}
                        </div>
                      ) : null}
                    </FastField>
                    <label htmlFor="class2">Lớp 11</label>
                  </div>
                  <div className={cx("radio")}>
                    <FastField
                      className={cx("input-field")}
                      error={errors.class && touched.class}
                      name="class"
                      type="radio"
                      id="class3"
                      value="12"
                      component={InputField}
                    >
                      {errors.class && touched.class ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.class}
                        </div>
                      ) : null}
                    </FastField>
                    <label htmlFor="class3">Lớp 12</label>
                  </div>
                </div>
              </div>
              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Khác:</p>
                <FastField
                  className={cx("input-field")}
                  error={errors.other && touched.other}
                  name="other"
                  type="text"
                  component={InputField}
                >
                  {errors.other && touched.other ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.other}
                    </div>
                  ) : null}
                </FastField>
              </div>
              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Trường học hiện tại:</p>
                <FastField
                  className={cx("input-field")}
                  error={errors.school && touched.school}
                  name="school"
                  type="text"
                  component={InputField}
                >
                  {errors.school && touched.school ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.school}
                    </div>
                  ) : null}
                </FastField>
              </div>

              <div className={cx("input-wrapper")}>
                <p className={cx("label")}>Tỉnh/Thành phố:</p>
                <FastField
                  className={cx("input-field")}
                  error={errors.province && touched.province}
                  name="province"
                  type="text"
                  component={InputField}
                  list={provinces}
                >
                  {errors.province && touched.province ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.province}
                    </div>
                  ) : null}
                </FastField>
              </div>
              <div className={cx("button-wrapper")}>
                <Button to={routes.home} className={cx("button")}>
                  Quay về
                </Button>
                <Button type={"submit"} className={cx("button")}>
                  Cập nhật hồ sơ
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Profile;

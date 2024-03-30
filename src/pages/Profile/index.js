import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { jugeResult } from "~/api/jugeResultHolland";
import images from "~/assets/images";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import routes from "~/config/routes";
import { updateCurrentUser } from "~/redux/request";
import styles from "./Profile.module.scss";
Profile.propTypes = {};

const provinces = [
  { value: "Tiền Giang", label: "Tiền Giang" },
  { value: "Hưng Yên", label: "Hưng Yên" },
  { value: "Hà Nội", label: "Hà Nội" },
  { value: "TP Hồ Chí Minh", label: "TP Hồ Chí Minh" },
  { value: "Cà Mau", label: "Cà Mau" },
  { value: "Đắc Lắc", label: "Đắc Lắc" },
  { value: "Nam Định", label: "Nam Định" },
  { value: "Quảng Ninh", label: "Quảng Ninh" },
  { value: "Đắk Nông", label: "Đắk Nông" },
  { value: "Đà Nẵng", label: "Đà Nẵng" },
  { value: "Hải Dương", label: "Hải Dương" },
  { value: "Long An", label: "Long An" },
  { value: "Bến Tre", label: "Bến Tre" },
  { value: "Đồng Tháp", label: "Đồng Tháp" },
  { value: "Vĩnh Long", label: "Vĩnh Long" },
  { value: "Kiên Giang", label: "Kiên Giang" },
  { value: "Trà Vinh", label: "Trà Vinh" },
  { value: "Sóc Trăng", label: "Sóc Trăng" },
  { value: "Bắc Ninh", label: "Bắc Ninh" },
  { value: "Thanh Hoá", label: "Thanh Hoá" },
  { value: "Vũng Tàu", label: "Vũng Tàu" },
  { value: "Đồng Nai", label: "Đồng Nai" },
  { value: "Bình Dương", label: "Bình Dương" },
  { value: "Thái Nguyên", label: "Thái Nguyên" },
  { value: "Thái Bình", label: "Thái Bình" },
  { value: "Cần Thơ", label: "Cần Thơ" },
  { value: "Nghệ An", label: "Nghệ An" },
  { value: "Huế", label: "Huế" },
  { value: "Bình Phước", label: "Bình Phước" },
  { value: "Quảng Nam", label: "Quảng Nam" },
  { value: "Quảng Ngãi", label: "Quảng Ngãi" },
  { value: "Ninh Thuận", label: "Ninh Thuận" },
  { value: "Lào Cai", label: "Lào Cai" },
  { value: "Hải Phòng", label: "Hải Phòng" },
  { value: "An Giang", label: "An Giang" },
  { value: "Phú Thọ", label: "Phú Thọ" },
  { value: "Tây Ninh", label: "Tây Ninh" },
  { value: "Khánh Hòa", label: "Khánh Hòa" },
  { value: "Phú Yên", label: "Phú Yên" },
  { value: "Hòa Bình", label: "Hòa Bình" },
  { value: "Tuyên Quang", label: "Tuyên Quang" },
  { value: "Lai Châu", label: "Lai Châu" },
  { value: "Hậu Giang", label: "Hậu Giang" },
  { value: "Lâm Đồng", label: "Lâm Đồng" },
  { value: "Lạng Sơn", label: "Lạng Sơn" },
  { value: "Hà Nam", label: "Hà Nam" },
  { value: "Bắc Cạn", label: "Bắc Cạn" },
  { value: "Bình Định", label: "Bình Định" },
  { value: "Cao Bằng", label: "Cao Bằng" },
  { value: "Sơn La", label: "Sơn La" },
  { value: "Quảng Bình", label: "Quảng Bình" },
  { value: "Quảng Trị", label: "Quảng Trị" },
  { value: "Gia Lai", label: "Gia Lai" },
  { value: "Bắc Giang", label: "Bắc Giang" },
  { value: "Hà Tĩnh", label: "Hà Tĩnh" },
  { value: "Ninh Bình", label: "Ninh Bình" },
  { value: "Bình Thuận", label: "Bình Thuận" },
  { value: "Kon Tum", label: "Kon Tum" },
  { value: "Vĩnh Phúc", label: "Vĩnh Phúc" },
  { value: "Bạc Liêu", label: "Bạc Liêu" },
  { value: "Yên Bái", label: "Yên Bái" },
  { value: "Điện Biên", label: "Điện Biên" },
  { value: "Hà Giang", label: "Hà Giang" },
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

  school: yup.string(),
  province: yup.string().oneOf(
    provinces.map((province) => province.value),
    "Tỉnh/Thành phố không hợp lệ"
  ),
  futureSchool: yup.string(),
});

const cx = classNames.bind(styles);
function Profile(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login.currentUser);
  const [fullSkill] = useState(() => {
    const result = user?.hollandEntities;
    console.log(user);
    const sortedResult = result ? [...result] : null; // Tạo một bản sao của mảng trước khi sắp xếp
    if (sortedResult) {
      sortedResult.sort((a, b) => b.value - a.value);
    }
    return sortedResult;
  });
  console.log(fullSkill);

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
            name: String(user?.name).toLowerCase() || "",
            tel: String(user?.phoneNumber).toLowerCase() || "",
            sex: String(user?.gender).toLowerCase() || "",
            class: String(user?.grade).toLowerCase() || "",
            school: String(user?.currentSchool).toLowerCase() || "",
            province: String(user?.province).toLowerCase() || "",
            futureSchool: String(user?.futureSchool).toLowerCase() || "",
          }}
          validationSchema={userSchema}
          onSubmit={(values) => {
            const userInfo = {
              name: values.name,
              phoneNumber: values.tel,
              gender: values.sex,
              grade: values.class,
              currentSchool: values.school,
              province: values.province,
              futureSchool: values.futureSchool,
            };
            updateCurrentUser(user?.token, userInfo, dispatch, navigate);
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
      <div className={cx("result-grade", "form-wrapper")}>
        <p className={cx("title")}>Kết quả trắc nghiệm holland</p>
        {fullSkill?.map((skill, index) => {
          return (
            <div key={index} className={cx("progress-bar")}>
              <label>
                {jugeResult[skill.name].group} (
                {skill.name.charAt(0).toUpperCase()})
              </label>
              {`${skill.value}/ ${skill.maxValue}`}
              <div className={cx("progress")}>
                <progress
                  style={{
                    "--color": jugeResult[skill.name].color,
                  }}
                  value={skill.value}
                  max={skill.maxValue}
                ></progress>

                <ul className={cx("percent")}>
                  <li>0%</li>
                  <li>25%</li>
                  <li>50%</li>
                  <li>75%</li>
                  <li>100%</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;

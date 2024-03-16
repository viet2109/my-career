import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Button from "~/components/Button";
import routes from "~/config/routes";
import Popper from "~/components/Popper";
import images from "~/assets/images";

Home.propTypes = {};

const cx = classNames.bind(styles);

function Home(props) {
  return (
    <main className={cx("wrapper")}>
      <div className={cx("section-wrapper")}>
        <section className={cx("quiz")}>
          <div className={cx("content")}>
            <h1 className={cx("title")}>khám phá bản thân</h1>
            <div className={cx("des")}>
              <p>
                "Em là ai? Em thích gì? Em muốn làm gì? Em đang hoang mang về
                lựa chọn ngành nghề? Làm sao để thành công trong tương lai?" -
                Đây đều là những băn khoăn, trăn trở của các bạn học sinh THPT
                trước ngưỡng cửa Đại học.
              </p>
              <p>
                Hiểu được nỗi lo ấy, Mạng Xã Hội Hướng Nghiệp MyCareer sẽ trao
                cho các em chìa khóa xây dựng kế hoạch mở cho các em đến với
                cánh cửa nghề nghiệp của chính mình thông qua hành trình trải
                nghiệm và khám phá đầy thú vị.
              </p>
              <p>Hãy bắt đầu trả lời câu hỏi để khám phá bản thân ngay nhé!</p>
            </div>
            <Button className={cx("button")} to={routes.quiz}>
              Làm bài test Holland tại đây!{" "}
            </Button>
          </div>
          <div className={cx("banner")}>
            <img
              src={images["banner-quiz"]}
              className={cx("banner")}
              alt="banner"
            />
          </div>
        </section>
      </div>

      <div className={cx("section-wrapper")}>
        <section className={cx("advise")}>
          <div className={cx("content")}>
            <h1 className={cx("title")}>Tư vấn chuyên gia</h1>
            <div className={cx("des")}>
              <p>
                Sau khi biết được điểm mạnh của bản thân, đừng ngần ngại kết nối
                với những chuyên gia về lĩnh vực đó bạn nhé!
              </p>
            </div>
          </div>

          <ul className={cx("adviser-list")}>
            <li className={cx("adviser")}>
              <img style={{"--color-from": "rgba(171, 119, 231, 0.5)", '--color-to': 'rgba(171, 119, 231, 0.75)'}} src={images["adviser-tuan"]} alt="avatar" />
              <p>Ths Lê Anh Tuấn</p>
            </li>
            <li className={cx("adviser")}>
              <img style={{"--color-from": "rgba(230,161,166, 0.5)", '--color-to': 'rgba(230,161,166, 0.75)'}} src={images["adviser-hoa"]} alt="avatar" />
              <p>Mr Nguyễn Hữu Thái Hòa</p>
            </li>
            <li className={cx("adviser")}>
              <img style={{"--color-from": "rgba(255,18,18, 0.5)", '--color-to': 'rgba(255,18,18, 0.75)'}} src={images["adviser-thien"]} alt="avatar" />
              <p>Mr Nguyễn Hoàng Thiện</p>
            </li>
            <li className={cx("adviser")}>
              <img style={{"--color-from": "rgba(13,110,253, 0.5)", '--color-to': 'rgba(13,110,253, 0.75)'}} src={images["adviser-hanh"]} alt="avatar" />
              <p>Mr Ninh Gia Hanh</p>
            </li>
          </ul>
          <Button className={cx("button")}>
            Kết nối thêm với các chuyên gia!
          </Button>
        </section>
      </div>

      <div className={cx("section-wrapper")}>
        <section className={cx("exp")}>
          <div className={cx("content")}>
            <h1 className={cx("title")}>trải nghiệm hướng nghiệp</h1>
            <div className={cx("des")}>
              <p>
                Sau khi biết được điểm mạnh của bản thân, đừng ngần ngại kết nối
                với những chuyên gia về lĩnh vực đó bạn nhé!
              </p>
            </div>
          </div>

          <div className={cx("exp-form")}>
            <div className={cx("card")}>
              <img src={images["student-woman"]} alt="young-student-woman" />
            </div>

            <form className={cx('form')}>
              <div className={cx("form-group")}>
                <label htmlFor={cx('school')}>Nếu học đại học, bạn sẽ đăng kí trường nào?</label>
                <input id={cx("school")} name="school" />
              </div>

              <div className={cx("form-group")}>
                <label htmlFor={cx('nation')}>Nếu đi du lịch, bạn sẽ đi nước nào?</label>
                <input id={cx("nation")} name="nation" />
              </div>

              <button className={cx('button')} type="submit">Đăng kí trải nghiệm ngay</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;

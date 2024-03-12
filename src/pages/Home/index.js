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
      <section className={cx("intro")}>
        <div className={cx("title")}>
          <div className={cx("title-wrapper")}>
            <p className={cx("title-1")}>đi đúng đường</p>
            <p className={cx("title-2")}>tương lai tỏa sáng</p>
            <div className={cx("des")}>
              <p className={cx("ques")}>
                "Em là ai? Em thích gì? Em muốn làm gì? Em đang hoang mang về
                lựa chọn ngành nghề? Làm sao để thành công trong tương lai?" -
                Đây đều là những băn khoăn, trăn trở của các bạn học sinh THPT
                trước ngưỡng cửa Đại học.{" "}
              </p>
              <p className={cx("ans")}>
                Hiểu được nỗi lo ấy, Chương trình giáo dục nghề nghiệp được
                Rightpath.edu.vn triển khai sẽ trao cho các em chìa khóa xây
                dựng kế hoạch mở cho các em đến với cánh cửa nghề nghiệp của
                chính mình thông qua hành trình trải nghiệm và khám phá đầy thú
                vị.
              </p>
            </div>
          </div>
        </div>
        <img
          className={cx("banner")}
          alt="banner"
          src={images["banner-into"]}
        />
      </section>
      <section className={cx("quiz")}>
        <div className={cx("content")}>
          <h1 className={cx("title")}>khám phá bản thân</h1>
          <p className={cx("des")}>
            Các bài trắc nghiệm khoa học sẽ giúp học sinh thấu hiểu được chính
            mình, xác định được khả năng, tính cách, sở thích của bản thân và
            giá trị nghề nghiệp.{" "}
          </p>
          <Button className={cx("button")} to={routes.quiz.holland}>
            Làm bài test Holland tại đây!{" "}
          </Button>
        </div>
        <img
          src={images["banner-quiz"]}
          className={cx("banner")}
          alt="banner"
        />
      </section>
      <section className={cx("career")}>
        <div className={cx("content")}>
          <h1 className={cx("title")}>360º NGÀNH NGHỀ</h1>
          <p className={cx("des")}>
            Với nguồn tài nguyên thông tin phong phú, Rightpath.edu.vn sẽ đưa
            các em vào “thế giới” của các ngành, nghề và trường đại học để có
            thể hình dung rõ hơn về một bức tranh toàn cảnh.
          </p>
        </div>

        <ul className={cx("card-list")}>
          <li className={cx("card-item")}>
            <Popper className={cx("popper")}>
              <img
                src={
                  "https://cms.rightpath.edu.vn/uploads/Bat_dong_dan_be89212c0d_14aacb5d65.png"
                }
                alt="avatar"
              />
            </Popper>
            <p>Công nghệ thông tin</p>
          </li>
          <li className={cx("card-item")}>
            <Popper className={cx("popper")}>
              <img
                src={
                  "https://cms.rightpath.edu.vn/uploads/Bat_dong_dan_be89212c0d_14aacb5d65.png"
                }
                alt="avatar"
              />
            </Popper>
            <p>Công nghệ thông tin</p>
          </li>
          <li className={cx("card-item")}>
            <Popper className={cx("popper")}>
              <img
                src={
                  "https://cms.rightpath.edu.vn/uploads/Bat_dong_dan_be89212c0d_14aacb5d65.png"
                }
                alt="avatar"
              />
            </Popper>
            <p>Công nghệ thông tin</p>
          </li>
        </ul>

        <Button className={cx("button")} to={routes.career.major}>
          Tìm hiểu thêm
        </Button>
      </section>

      <section className={cx("course")}>
        <div className={cx("container")}>
          <div className={cx("content")}>
            <h1 className={cx("title")}>các khóa học</h1>
            <p className={cx("des")}>
            Video được các chuyên gia và giáo viên giàu kinh nghiệm trong lĩnh vực giáo dục hướng nghiệp đầu tư xây dựng sẽ đem đến trải nghiệm học tập thú vị và hấp dẫn.


            </p>
          </div>
          <ul className={cx("card-list")}>
            <li className={cx("card-item")}>
              <Popper className={cx('popper')}>
                <img
                  src={
                    "https://cms.rightpath.edu.vn/uploads/rightpath_home_a_8a18c00ca2.jpg"
                  }
                  alt="avatar"
                />
              <p className={cx('title')}>Hướng nghiệp dành cho học sinh</p>
              <p className={cx('detail')}>Có 4 gốc rễ mà chúng ta cần tìm hiểu và vun bồi, đó là tính cách, khả năng, giá trị nghề nghiệp và sở thích.</p>
              </Popper>

            </li>
            <li className={cx("card-item")}>
              <Popper className={cx('popper')}>
                <img
                  src={
                    "https://cms.rightpath.edu.vn/uploads/rightpath_home_a_8a18c00ca2.jpg"
                  }
                  alt="avatar"
                />
              <p className={cx('title')}>Hướng nghiệp dành cho học sinh</p>
              <p className={cx('detail')}>Có 4 gốc rễ mà chúng ta cần tìm hiểu và vun bồi, đó là tính cách, khả năng, giá trị nghề nghiệp và sở thích.</p>
              </Popper>

            </li>
            <li className={cx("card-item")}>
              <Popper className={cx('popper')}>
                <img
                  src={
                    "https://cms.rightpath.edu.vn/uploads/rightpath_home_a_8a18c00ca2.jpg"
                  }
                  alt="avatar"
                />
              <p className={cx('title')}>Hướng nghiệp dành cho học sinh</p>
              <p className={cx('detail')}>Có 4 gốc rễ mà chúng ta cần tìm hiểu và vun bồi, đó là tính cách, khả năng, giá trị nghề nghiệp và sở thích.</p>
              </Popper>

            </li>
            <li className={cx("card-item")}>
              <Popper className={cx('popper')}>
                <img
                  src={
                    "https://cms.rightpath.edu.vn/uploads/rightpath_home_a_8a18c00ca2.jpg"
                  }
                  alt="avatar"
                />
              <p className={cx('title')}>Hướng nghiệp dành cho học sinh</p>
              <p className={cx('detail')}>Có 4 gốc rễ mà chúng ta cần tìm hiểu và vun bồi, đó là tính cách, khả năng, giá trị nghề nghiệp và sở thích.</p>
              </Popper>

            </li>
           
          </ul>

          <Button className={cx('button')} to={routes.career.major}>Tìm hiểu thêm</Button>
        </div>
      </section>
    </main>
  );
}

export default Home;

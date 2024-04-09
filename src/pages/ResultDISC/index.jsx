import React, { Fragment, useCallback, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import Popper from "~/components/Popper";
import styles from "./ResultDISC.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import { jugeResultDISC } from "~/api/jugeResultDISC";
import { jugeResult } from "~/api/jugeResultHolland";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

ResultDISC.propTypes = {};
const cx = classNames.bind(styles);

function ResultDISC(props) {
  const location = useLocation();
  const initMaxCatagories = useCallback((num) => {
    // Mảng chứa các object
    const array = location.state.resultArray;

    // Sắp xếp mảng theo giá trị giảm dần của thuộc tính 'value'
    array.sort(function (a, b) {
      return b.value - a.value;
    });

    // Lấy hai phần tử đầu tiên
    const result = array.slice(0, num);

    console.log(result);
    return result;
  }, []);
  const [maxCatagories] = useState(initMaxCatagories(2));

  const initData = useCallback(() => {
    const data = {};
    const labels = location.state.resultArray.map((catagory) =>
      catagory.key.charAt(0).toUpperCase()
    );
    const datasets = location.state.resultArray.map((catagory) =>
      parseInt(catagory.value)
    );
    data.labels = labels;
    data.datasets = datasets;
    return data;
  }, []);

  const [dataInit] = useState(initData());
  const [data, setData] = useState({
    labels: dataInit.labels,
    datasets: [
      {
        label: "Tính cách của tôi",
        data: dataInit.datasets,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 3,
      },
    ],
  });
  return (
    <div className={cx("wrapper")}>
      <Popper className={cx("popper", "overview")}>
        <div className={cx("overview-on")}>
          <div className={cx("des-wrapper")}>
            <h1 className={cx("header")}>Kết quả tính cách DISC</h1>
            <h2 className={cx("title")}>
              Bạn thuộc nhóm:{" "}
              {maxCatagories.map((category, index) =>
                category.key.charAt(0).toUpperCase()
              )}
            </h2>
            <div className={cx("des")}>
              {maxCatagories.map((category, index) => {
                return (
                  <Fragment key={index}>
                    <h3 className={cx("group")}>
                      ({category.key.charAt(0).toUpperCase()})Tính cách: Nhóm{" "}
                      {jugeResultDISC[category.key].group}
                    </h3>
                    <p className={cx("general")}>
                      {jugeResultDISC[category.key].describe}
                    </p>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className={cx("chart")}>
            <Radar data={data}></Radar>
          </div>
        </div>

        <div className={cx("sub-des")}>
          <FontAwesomeIcon
            style={{
              width: "25px",
              height: "25px",
              rotate: "15deg",
              marginRight: "6px",
            }}
            icon={faBell}
            color="#FCC447"
          />{" "}
          Hãy nhớ rằng mọi người đều là sự pha trộn của cả bốn phong cách, nhưng
          hầu hết mọi người đều có xu hướng mạnh mẽ về một hoặc hai phong cách.
          Tất cả các phong cách DISC đều bình đẳng và có giá trị theo những cách
          riêng của chúng.
          <span style={{ marginBottom: "16px", display: "block" }}></span>
          Bạn muốn nhận thêm kết quả trắc nghiệm về{" "}
          <strong>Phong cách làm việc</strong>,{" "}
          <strong>Phong cách lãnh đạo</strong> và{" "}
          <strong>Phong cách Tình Yêu</strong>.
          <br />
          Hãy liên hệ chuyên viên tư vấn
          <Button className={cx("advise-btn")}>Đăng ký tư vấn</Button>
        </div>
      </Popper>
      {maxCatagories.map((catagory, i) => {
        return (
          <Popper className={cx("popper", "detail")} key={i}>
            <div className={cx("top")}>
              <div className={cx("left")}>
                <h1
                  style={{ "--color": jugeResultDISC[catagory.key].color }}
                  className={cx("group")}
                >
                  nhóm {jugeResultDISC[catagory.key].group}
                </h1>
                <h1 className={cx("type")}>
                  {jugeResultDISC[catagory.key].type_people}
                </h1>
                <p className={cx("sub-des")}>
                  {jugeResultDISC[catagory.key].sub_describe}
                </p>

                <div className={cx("container")}>
                  <div className={cx("title")}>Đặc điểm</div>
                  <div className={cx("content")}>
                    <ul>
                      {jugeResultDISC[catagory.key].feature.map((val, j) => (
                        <li key={j}>{val}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={cx("container")}>
                  <div className={cx("title")}>phong cách học tập</div>
                  <div className={cx("content")}>
                    <ul>
                      {jugeResultDISC[catagory.key].learn_style.map(
                        (val, j) => (
                          <li key={j}>{val}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={cx("right")}>
                <img src={jugeResultDISC[catagory.key].banner} alt="banner" />
              </div>
            </div>
            <div className={cx("bottom")}>
              <div className={cx("container")}>
                <div className={cx("title")} style={{ marginBottom: "10px" }}>
                  xu hướng nghề nghiệp
                </div>
                <div className={cx("title")}>ghét yêu</div>
                <div className={cx("content")}>
                  <ul>
                    {jugeResultDISC[catagory.key].advise_career_hobby.map(
                      (val, j) => (
                        <li key={j}>{val}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className={cx("container", "container-wrapper")}>
                <div className={cx("container")}>
                  <div className={cx("title")}>ngành học phù hợp</div>

                  <div className={cx("content")}>
                    <ul>{jugeResultDISC[catagory.key].major}</ul>
                  </div>
                </div>

                <div className={cx("container")}>
                  <div className={cx("title")}>khóa học trao dồi</div>

                  <div className={cx("content")}>
                    <ul>{jugeResultDISC[catagory.key].advise_course}</ul>
                  </div>
                </div>
              </div>

              <div className={cx("container", "container-wrapper")}>
                <div className={cx("container")}>
                  <div className={cx("title")}>NGHỀ NGHIỆP PHÙ HỢP</div>

                  <div className={cx("content")}>
                    <ul>{jugeResultDISC[catagory.key].job.map((val, j) => (
                        <li key={j}>{val}</li>
                      ))}</ul>
                  </div>
                </div>

                <div className={cx("container")}>
                  <div className={cx("title")}>NGHỀ NGHIỆP NÊN CÂN NHẮC</div>

                  <div className={cx("content")}>
                    <ul>{jugeResultDISC[catagory.key].advise_career_consider.map((val, j) => (
                        <li key={j}>{val}</li>
                      ))}</ul>
                  </div>
                </div>
              </div>
            </div>
          </Popper>
        );
      })}
    </div>
  );
}

export default ResultDISC;

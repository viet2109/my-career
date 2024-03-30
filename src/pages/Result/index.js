import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { jugeResult } from "~/api/jugeResultHolland";
import Popper from "~/components/Popper";
import styles from "./Result.module.scss";

Result.propTypes = {};

const cx = classNames.bind(styles);
function Result(props) {
  const numTop = 3;

  const user = useSelector((state) => state.auth.login.currentUser);

  const [currentPage, setCurrentPage] = useState(0);

  const initPage = useCallback(() => {
    const result = Array.from({ length: numTop + 1 }, () => {
      return false;
    }).reduce((obj, value, index) => {
      obj[index] = index === currentPage || value;

      return obj;
    }, {});

    return result;
  }, [currentPage]);

  const [page] = useState(initPage());
  const [maxSkills] = useState(() => {
    const result = user?.hollandEntities;
    let sortedResult = result ? [...result] : null; // Tạo một bản sao của mảng trước khi sắp xếp
    if (sortedResult) {
      sortedResult = sortedResult
        .sort((a, b) => b.value - a.value)
        .slice(0, numTop);
    }
    return sortedResult;
  });

  const [fullSkill] = useState(() => {
    const result = user?.hollandEntities;
    const sortedResult = result ? [...result] : null; // Tạo một bản sao của mảng trước khi sắp xếp
    if (sortedResult) {
      sortedResult.sort((a, b) => b.value - a.value);
    }
    return sortedResult;
  });
  const handleNav = (e) => {};
  const handlePageChange = (e) => {
    const nextPage = e.target.dataset.page;
    page[currentPage] = false;
    page[nextPage] = true;
    setCurrentPage(e.target.dataset.page);
  };

  useEffect(() => {}, [currentPage]);

  return (
    <div className={cx("frag")}>
      <Popper className={cx("container")}>
        <section className={cx("wrapper")}>
          <ul className={cx("juge-list-icon")}>
            <label
              htmlFor={"input-hidden"}
              onClick={handleNav}
              className={cx("juge-item-icon")}
            >
              <input
                id="input-hidden"
                name="nav"
                className={cx("hidden")}
                type="radio"
                value={0}
                defaultChecked
                data-page={0}
                onChange={handlePageChange}
              />
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faCheckDouble} size={"2xl"} />
              </div>
              <span>Tổng quan</span>
            </label>
            {maxSkills.map((skill, index) => (
              <label
                htmlFor={`input-hidden-${index}`}
                onClick={handleNav}
                key={index}
                className={cx("juge-item-icon")}
              >
                <input
                  id={`input-hidden-${index}`}
                  name="nav"
                  className={cx("hidden")}
                  type="radio"
                  value={index + 1}
                  data-page={index + 1}
                  onChange={handlePageChange}
                />

                <div className={cx("icon")}>
                  <FontAwesomeIcon
                    icon={jugeResult[skill.name].icon}
                    size={"2xl"}
                  />
                </div>
                <span>{jugeResult[skill.name].group}</span>
              </label>
            ))}
          </ul>
          <ul className={cx("content-wrapper")}>
            <li className={cx("content", { hidden: !page[0] })}>
              <div className={cx("overview")}>
                <div className={cx("flex-overview")}>
                  <div className={cx("result-grade")}>
                    <p className={cx("title")}>Kết quả của bạn</p>
                    {fullSkill.map((skill, index) => {
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
                  <div className={cx("book-advise")}>
                    <p className={cx("title")}>
                      Tại sao bạn cần gặp chuyên gia tư vấn hướng nghiệp?
                    </p>

                    <ul className={cx("why-list")}>
                      <li className={cx("why-item")}>
                        - Bạn còn băn khoăn và muốn được tư vấn thêm.
                      </li>
                      <li className={cx("why-item")}>
                        - Bạn cần kết quả phân tích chuyên sâu hơn.
                      </li>
                      <li className={cx("why-item")}>
                        - Bạn muốn lập kế hoạch phát triển nghề nghiệp phù hợp.
                      </li>
                      <li className={cx("why-item")}>
                        - Hay bạn có bất kỳ câu hỏi nào khác liên quan đến kế
                        hoạch nghề nghiệp.
                      </li>
                    </ul>
                    <p className={cx("des")}>
                      Hãy đặt lịch hẹn với các chuyên gia hướng nghiệp để giúp
                      bạn có thể đưa ra lựa chọn ngành học và nghề nghiệp tốt
                      nhất.
                    </p>
                    <button>Đặt lịch hẹn tư vấn</button>
                  </div>
                </div>

                <div className={cx("tutorial")}>
                  <p className={cx("title")}>Hướng dẫn phân tích kết quả</p>
                  <p className={cx("des")}>
                    <span>
                      Kết quả phân tích dựa trên 3 tính cách có kết quả trắc
                      nghiệm cao nhất. Bạn hãy xem kết quả chi tiết 3 tính cách
                      này để hiểu hơn về đặc điểm từng tính cách, và các nghề
                      nghiệp đã gợi ý dựa theo sở thích và lãnh vực bạn quan
                      tâm.
                    </span>

                    <span>
                      Dựa trên Mật mã Holland của bạn, bạn có thể tìm kiếm các
                      ngành phù hợp theo 2 hoặc 3 nhóm Holland tại trang web này
                    </span>
                  </p>
                </div>
              </div>
            </li>
            {maxSkills.map((skill, index) => {
              return (
                <li
                  key={index}
                  className={cx("content", { hidden: !page[index + 1] })}
                >
                  <div className={cx("title")}>
                    <p className={cx("vn")}>
                      Nhóm{" "}
                      <span style={{ "--color": jugeResult[skill.name].color }}>
                        {jugeResult[skill.name].group}
                      </span>{" "}
                      - Người <span>{jugeResult[skill.name].type_people}</span>
                    </p>
                    <p
                      className={cx("en")}
                      style={{ "--color": jugeResult[skill.name].color }}
                    >
                      {skill.name}
                    </p>
                  </div>

                  <div className={cx("general")}>
                    <div className={cx("item-wrapper")}>
                      <div className={cx("item")}>
                        <p className={cx("title")}>giá trị cốt lõi</p>
                        <p className={cx("content")}>
                          {jugeResult[skill.name].core_value}
                        </p>
                      </div>
                      <div className={cx("item")}>
                        <p className={cx("title")}>tính cách nổi bật</p>
                        <p className={cx("content")}>
                          {jugeResult[skill.name].genitive}
                        </p>
                      </div>
                    </div>
                    <img src={jugeResult[skill.name].banner} alt="banner" />
                  </div>

                  <ul className={cx("feature")}>
                    <li className={cx("title")}>
                      Nhóm {jugeResult[skill.name].group} có những đặc điểm nào?
                    </li>

                    {jugeResult[skill.name].feature.map((item, index) => {
                      return (
                        <li className={cx("item")} key={index}>
                          <span>{index + 1}</span>
                          <p>{item}</p>
                        </li>
                      );
                    })}
                  </ul>

                  <div className={cx("advise")}>
                    <p className={cx("title")}>
                      Điều bạn cần & thứ bạn cần cải thiện
                    </p>
                    <ul className={cx("list")}>
                      <li className={cx("item")}>
                        <span>01</span>
                        <div className={cx("content")}>
                          <p className={cx("title")}>nghề nghiệp yêu thích</p>

                          <p className={cx("content")}>
                            {jugeResult[skill.name].advise_career_hobby}
                          </p>
                        </div>
                      </li>

                      <li className={cx("item")}>
                        <span>02</span>
                        <div className={cx("content")}>
                          <p className={cx("title")}>
                            nghề nghiệp nên cân nhắc
                          </p>

                          <p className={cx("content")}>
                            {jugeResult[skill.name].advise_career_consider}
                          </p>
                        </div>
                      </li>

                      <li className={cx("item")}>
                        <span>03</span>
                        <div className={cx("content")}>
                          <p className={cx("title")}>
                            các môn học phát huy tài năng
                          </p>

                          <p className={cx("content")}>
                            {jugeResult[skill.name].advise_subject}
                          </p>
                        </div>
                      </li>

                      <li className={cx("item")}>
                        <span>04</span>
                        <div className={cx("content")}>
                          <p className={cx("title")}>
                            khóa học giúp bạn trau dồi
                          </p>

                          <p className={cx("content")}>
                            {jugeResult[skill.name].advise_course}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className={cx("suggest")}>
                    <p className={cx("title")}>
                      Ngành nghề mà bạn có thể tham khảo trong thời gian tới
                    </p>
                    <Popper className={cx("popper")}>
                      <ul className={cx("list", "job")}>
                        <li className={cx("title")}>các nghề phù hợp</li>
                        <div className={cx("item-wrapper")}>
                          {jugeResult[skill.name].job.map((job, ij) => {
                            return <li className={cx("item")} key={ij}>{job}</li>;
                          })}
                        </div>
                      </ul>
                    </Popper>

                    <Popper className={cx("popper")}>
                      <ul className={cx("list", "major")}>
                        <li className={cx("title")}>các nghề phù hợp</li>
                        <div className={cx("item-wrapper")}>
                          {jugeResult[skill.name].major.map((major, im) => {
                            return <li className={cx("item")} key={im}>{major}</li>;
                          })}
                        </div>
                      </ul>
                    </Popper>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </Popper>
    </div>
  );
}

export default Result;

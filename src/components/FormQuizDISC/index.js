import classNames from "classnames/bind";
import { useCallback, useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import quiz from "~/api/fakeDISCQuizAPI";
import { sendHollandResult } from "~/redux/request";
import Button from "../Button";
import styles from "./FormQuizDISC.module.scss";
import routes from "~/config/routes";

FormQuizDISC.propTypes = {};

const cx = classNames.bind(styles);

function FormQuizDISC(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentQuiz, setCurrentQuiz] = useState(1);
  const formRef = useRef(null);
  const questionList = quiz;
  const submitBtn = useRef(null);
  const user = useSelector((state) => state.auth.login.currentUser);

  const [isDisabledSubmit, setIsDisabledsubmit] = useState(true);
  const initData = useCallback(() => {
    const initialPageDisabled = {};
    questionList.forEach((question, index) => {
      initialPageDisabled[index + 1] = true;
    });

    return initialPageDisabled;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const nextEl = useRef(null);
  const prevEl = useRef(null);

  const [pageDisabled, setPageDisabled] = useState(initData());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const initInput = useCallback(() => {
    const result = [];
    questionList.forEach((question) => {
      question.forEach((q) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        result.push(useRef(null));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        result.push(useRef(null));
      });
    });
    return result;
  }, [questionList]);

  const [inputRef] = useState(initInput());

  const handleSubmit = (e) => {
    e.preventDefault();

    // const result = inputRef.reduce((acc, obj) => {
    //   const key = obj.current.name;
    //   const value = parseInt(obj.current.value);

    //   if (!acc[key]) {
    //     acc[key] = { name: key, value: 0, maxValue: 0 };
    //   }

    //   acc[key].value += value;
    //   acc[key].maxValue++;

    //   return acc;
    // }, {});

    // const data = Object.values(result);

    // sendHollandResult(user, data, dispatch, navigate);
    const result = inputRef.reduce((acc, obj) => {
      const [key, valueStr] = obj.current.value.split('_');
      const value = parseInt(valueStr);
      acc[key] = acc.hasOwnProperty(key) ? acc[key] + value : value;
      return acc;
    }, {});
    
    const resultArray = Object.entries(result).map(([key, value]) => ({ key, value }));
    
    navigate(routes["disc-result"], {state: {resultArray: resultArray}})
    
   
  
  };

  useEffect(() => {}, [currentQuiz, pageDisabled]);

  const handleClick = (e) => {
    submitBtn.current?.click();
  };

  const swiperRef = useRef(null);

  const handleSwipperScroll = () => {};
  const handleRadio = () => {
    inputRef.forEach((input, index) => {
      const disabledIndex = index % 2 === 0 ? index + 1 : index - 1;
      if (input.current.checked) {
        inputRef[disabledIndex].current.checked = false;
        inputRef[disabledIndex].current.disabled = true;
      } else {
        if (!inputRef[disabledIndex].current.checked) {
          inputRef[disabledIndex].current.disabled = false;
        }
      }
    });
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab" || e.key === "Enter") {
        e.preventDefault(); // Ngăn chặn hành động mặc định của tab
      }
    };

    inputRef.forEach(input => {
      input.current.value = `${input.current.dataset.name}_0`;
    })

    // Gắn sự kiện keydown cho document
    document.addEventListener("keydown", handleKeyDown);

    // Trả về một hàm cleanup để gỡ bỏ sự kiện khi component bị unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Chạy chỉ một lần sau khi component mount

  return (
    <div className={cx("wrapper")}>
      <div className={cx("ques")}>
        <strong>
          <span>Câu: </span>
          &nbsp; Bạn là người như thế nào?
        </strong>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={cx("form")}
        name={"form"}
      >
        <div className={cx("title")}>
          <span>Giống bạn nhất</span>
          <span>Khác bạn nhất</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          ref={swiperRef}
          allowTouchMove={false}
          navigation={{
            prevEl: prevEl.current,
            nextEl: nextEl.current,
          }}
          modules={[Navigation]}
          onSlideChange={(e) => {
            setCurrentQuiz(e.realIndex + 1);
          }}
        >
          {questionList.map((ques, index) => {
            return (
              <SwiperSlide key={index}>
                {ques.map((q, i, orgArr) => {
                  const j = i > 0 ? i * 2 : 0;
                  const k = j + 1;
                  return (
                    <div className={cx("input-wrapper")} key={i}>
                      <input
                        ref={inputRef[index * (orgArr.length * 2) + j]}
                        onChange={() => {
                          handleRadio();
                          inputRef[
                            index * (orgArr.length * 2) + k
                          ].current.value = `${q.name}_1`;
                          const totalCheck = inputRef.filter(
                            (input) => input.current.checked
                          );
                          if (totalCheck.length === inputRef.length / 4) {
                            setIsDisabledsubmit(false);
                          }

                          setPageDisabled((prev) => {
                            const newObj = {
                              ...prev,
                              [currentQuiz]:
                                currentQuiz === questionList.length ||
                                inputRef
                                  .slice(
                                    index * (orgArr.length * 2),
                                    index * (orgArr.length * 2) +
                                      orgArr.length * 2
                                  )
                                  .filter((input) => input.current.checked)
                                  .length !== 2,
                            };

                            return newObj;
                          });
                        }}
                        name={`same_${index}`}
                        data-name={q.name}
                        type="radio"
                        className={cx("input", "same")}
                      />
                      <p className={cx("ans")}>{q.ans}</p>
                      <input
                        ref={inputRef[index * (orgArr.length * 2) + k]}
                        onChange={() => {
                          handleRadio();
                          inputRef[
                            index * (orgArr.length * 2) + k
                          ].current.value = `${q.name}_0`;
                          const totalCheck = inputRef.filter(
                            (input) => input.current.checked
                          );
                          if (totalCheck.length === inputRef.length / 4) {
                            setIsDisabledsubmit(false);
                          }

                          setPageDisabled((prev) => {
                            const newObj = {
                              ...prev,
                              [currentQuiz]:
                                currentQuiz === questionList.length ||
                                inputRef
                                  .slice(
                                    index * (orgArr.length * 2),
                                    index * (orgArr.length * 2) +
                                      orgArr.length * 2
                                  )
                                  .filter((input) => input.current.checked)
                                  .length !== 2,
                            };

                            return newObj;
                          });
                        }}
                        name={`diff_${index}`}
                        className={cx("input", "diff")}
                        data-name={q.name}
                        type="radio"
                      />
                    </div>
                  );
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <input ref={submitBtn} type="submit" style={{ display: "none" }} />
      </form>

      <div className={cx("paginate")}>
        <div className={cx("pg-button", { disabled: currentQuiz <= 1 })}>
          <div ref={prevEl} className={cx("prev-btn")}>
            <FontAwesomeIcon fill="#fff" icon={faBackward}></FontAwesomeIcon>
            <span>Câu hỏi trước</span>
          </div>
        </div>

        <div
          className={cx("pg-button", { disabled: pageDisabled[currentQuiz] })}
        >
          <div
            ref={nextEl}
            className={cx("next-button")}
            onClick={handleSwipperScroll}
          >
            <span>Câu hỏi tiếp theo</span>
            <FontAwesomeIcon fill="#fff" icon={faForward}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className={cx("progress-bar")}>
        <progress
          className={cx("bar")}
          value={currentQuiz}
          max={questionList.length}
        ></progress>
        <span className={cx("label")}>
          Tiến độ làm bài: {`${currentQuiz}/${quiz.length}`}
        </span>
      </div>

      <div
        className={cx("submit-button", {
          disabled: isDisabledSubmit,
        })}
        onClick={handleClick}
      >
        <Button>Nộp bài</Button>
      </div>
    </div>
  );
}

export default FormQuizDISC;

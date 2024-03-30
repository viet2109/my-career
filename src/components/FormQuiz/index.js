import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useCallback, useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { quizCal } from "~/redux/request";
import Button from "../Button";
import styles from "./FormQuiz.module.scss";
import quiz from "~/api/fakeQuizAPI";
import { jugeResult } from "~/api/jugeResultHolland";

FormQuiz.propTypes = {};

const cx = classNames.bind(styles);

function FormQuiz(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentQuiz, setCurrentQuiz] = useState(1);
  const formRef = useRef(null);
  const questionList = quiz;
  const submitBtn = useRef(null);

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
    questionList.forEach((ques) => {
      ques.quesList.forEach(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        result.push(useRef(null));
      });
    });
    return result;
  }, [questionList]);

  const [inputRef, setInputRef] = useState(initInput());

  const handleSubmit = (e) => {
    // eslint-disable-next-line no-restricted-globals
    e.preventDefault();

    const data = {};
    inputRef.forEach((input) => {
      if (!(input.current.name in data)) {
        data[input.current.name] = [];
      }

      data[input.current.name].push(parseInt(input.current.value));
    });

    quizCal(data, dispatch, navigate);
  };

  useEffect(() => {}, [currentQuiz, pageDisabled]);

  const handleClick = (e) => {
    submitBtn.current?.click();
  };

  const swiperRef = useRef(null);

  const handleSwipperScroll = () => {
    console.log(swiperRef.current);
  };

  return (
    <div className={cx("wrapper")}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={cx("form")}
        name={"form"}
      >
        <Swiper
          allowTouchMove={false}
          slidesPerView={1}
          ref={swiperRef}
          centeredSlides
          navigation={{
            prevEl: prevEl.current,
            nextEl: nextEl.current,
          }}
          modules={[Navigation]}
          onSlideChange={(e) => {
            setCurrentQuiz(e.realIndex + 1);
            window.scrollTo(0, 0);
          }}
        >
          {questionList.map((ques, index) => {
            return (
              <SwiperSlide key={index}>
                <h4 className={cx("title-group")}>{`Nhóm ${
                  jugeResult[ques.name].group
                } (${ques.name} - ${ques.name.charAt(0)})`}</h4>

                {ques.quesList.map((q, i, orgArr) => {
                  return (
                    <div key={i}>
                      <div className={cx("form-group")}>
                        <input
                          ref={inputRef[index * orgArr.length + i]}
                          type="hidden"
                          name={ques.name}
                          id={`${index}-${i}`}
                        />
                        <p className={cx("ques")}>
                          <strong>
                            <span>Câu {index * orgArr.length + i + 1}:</span>
                            &nbsp;
                            {q.ques}{" "}
                            <span
                              style={{
                                color: "#ec1b30",
                                textDecoration: "none",
                              }}
                            >
                              *
                            </span>
                          </strong>
                        </p>

                        <div className={cx("input-wrapper")}>
                          {q.ansList?.map((ans, ansI) => {
                            return (
                              <div key={ansI} className={cx("input")}>
                                <input
                                  id={`${index}-${i}-${ansI}`}
                                  name={`${index}-${i}`}
                                  type="radio"
                                  value={ans.point}
                                  onChange={(e) => {
                                    inputRef[
                                      index * orgArr.length + i
                                    ].current.value = e.target.value;

                                    if (currentQuiz === questionList.length) {
                                      setIsDisabledsubmit(false);
                                    }

                                    setPageDisabled((prev) => {
                                      const newObj = {
                                        ...prev,
                                        [currentQuiz]:
                                          currentQuiz === questionList.length ||
                                          inputRef
                                            .slice(
                                              index * orgArr.length,
                                              index * orgArr.length +
                                                orgArr.length
                                            )
                                            .some(
                                              (value) => !value.current.value
                                            ),
                                      };

                                      return newObj;
                                    });
                                  }}
                                />
                                <label htmlFor={`${index}-${i}-${ansI}`}>
                                  {ans.ans}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {i === orgArr.length - 1 || <br></br>}
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
        <div className={cx({ disabled: currentQuiz <= 1 })}>
          <div ref={prevEl} className={cx("prev-btn")}>
            <FontAwesomeIcon fill="#fff" icon={faBackward}></FontAwesomeIcon>
            Câu hỏi trước
          </div>
        </div>

        <div className={cx({ disabled: pageDisabled[currentQuiz] })}>
          <div ref={nextEl} className={cx("next-button")} onClick={handleSwipperScroll}>
            Câu hỏi tiếp theo
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

export default FormQuiz;

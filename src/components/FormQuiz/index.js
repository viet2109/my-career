import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useCallback, useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

import Button from "../Button";
import styles from "./FormQuiz.module.scss";

FormQuiz.propTypes = {};

const cx = classNames.bind(styles);

function FormQuiz(props) {
  const [currentQuiz, setCurrentQuiz] = useState(1);
  const formRef = useRef(null);
  const questionList = require("~/api/fakeQuizAPI.json");
  const submitBtn = useRef(null);
  const initData = useCallback(() => {
    const initialPageDisabled = {};
    questionList.forEach((question, index) => {
      initialPageDisabled[index + 1] = true;
    });
    return initialPageDisabled;
  }, []);

  const [pageDisabled, setPageDisabled] = useState(initData());
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = questionList.map(() => useRef(null));

  const handleSubmit = (e) => {
    // eslint-disable-next-line no-restricted-globals
    e.preventDefault();
    // Lấy giá trị của form
    const data = {};
    inputRef.forEach((input) => {
      if (!(input.current.name in data)) {
        data[input.current.name] = [];
      }

      data[input.current.name].push(input.current.value);
    });
    console.log(data);
  };


  useEffect(() => {}, [currentQuiz, pageDisabled]);

  const handleClick = (e) => {
    submitBtn.current?.click();
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
          centeredSlides
          navigation={{
            prevEl: `.${cx("prev-btn")}`,
            nextEl: `.${cx("next-button")}`,
          }}
          modules={[Navigation]}
          onSlideChange={(e) => {
            setCurrentQuiz(e.realIndex + 1);
          }}
        >
          {questionList.map((ques, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={cx("form-group")}>
                  <p className={cx("ques")}>
                    <strong>
                      <span>Câu {index + 1}:</span>&nbsp;{ques.ques}
                    </strong>
                  </p>
                  <input
                    ref={inputRef[index]}
                    type="hidden"
                    name={ques.group}
                  />

                  <div className={cx("input-wrapper")}>
                    {ques.ansList?.map((ans, i) => {
                      return (
                        <div key={i} className={cx("input")}>
                          <input
                            id={index + "-" + i}
                            name={ques.group + "-" + index}
                            type="radio"
                            value={ans.point}
                            onChange={(e) => {
                              inputRef[index].current.value = e.target.value;

                              setPageDisabled((prev) => {
                                const newObj = {
                                  ...prev,
                                  [currentQuiz]: false,
                                };

                                return newObj;
                              });
                            }}
                          />
                          <label htmlFor={index + "-" + i}>{ans.ans}</label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <input ref={submitBtn} type="submit" style={{ display: "none" }} />
      </form>

      <div className={cx("paginate")}>
        <div className={cx({ disabled: currentQuiz <= 1 })}>
          <div className={cx("prev-btn")}>
            <FontAwesomeIcon fill="#fff" icon={faBackward}></FontAwesomeIcon>
            Câu hỏi trước
          </div>
        </div>
        
        
        <div className={cx({ disabled: pageDisabled[currentQuiz] })}>
          <div className={cx("next-button")}>
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
          Tác giả câu hỏi trắc nghiệm: Th.S Trần Thị Thúy Lan và C.N Lê Thị
          Hương Giang Đại Học RMIT Việt Nam
        </span>
      </div>
      
        <div className={cx("submit-button", {disabled: currentQuiz < questionList.length})} onClick={handleClick}>
          <Button>Nộp bài</Button>
        </div>
      
    </div>
  );
}

export default FormQuiz;

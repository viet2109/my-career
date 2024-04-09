import classNames from "classnames/bind";
import { useRef } from "react";
import images from "~/assets/images";
import Button from "~/components/Button";
import FormQuizDISC from "~/components/FormQuizDISC";
import styles from "./QuizDISC.module.scss";

QuizDISC.propTypes = {};

const cx = classNames.bind(styles);

function QuizDISC(props) {
  const form = useRef(null);
  const tutorial = useRef(null);

  const handleStartDoExBtn = () => {
    tutorial.current?.classList.add(cx("disabled"));
    form.current?.classList.add(cx("enabled"));
  };

  return (
    <section className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("title")}>
          <h2 className={cx("title-1")}>TRẮC NGHIỆM TÍNH CÁCH</h2>
          <h1 className={cx("title-2")}>MẬT MÃ DISC</h1>
        </div>

        <div ref={tutorial}>
          <div className={cx("intro")}>
            <p className={cx("des")}>
              <strong>Mô hình DISC</strong> được nhà tâm lý học người Mỹ Walter
              Clarke xây dựng dựa trên lý thuyết DISC của nhà tâm lý học William
              Moulton Marston. Trắc nghiệm DISC là công cụ hữu ích nhất được
              nhiều công ty và tổ chức sử dụng nhằm đánh giá khả năng giao tiếp,
              hành vi và tính cách của con người
              <br />
              <span></span>
              DISC là từ viết tắt của bốn xu hướng hành vi chính được mô tả
              trong mô hình DISC.
              <br />
              <span></span>- Thống lĩnh - Dominance (D)
              <br />
              <span></span>- Ảnh hưởng - Influence (I)
              <br />
              <span></span>- Kiên định - Steady (S)
              <br />
              <span></span>- Tuân thủ - Compliant (C)
            </p>
            <div className={cx("logo")}>
              <img src={images["banner-disc-quiz"]} alt="logo" />
            </div>
          </div>

          <div onClick={handleStartDoExBtn} className={cx("button-wrapper")}>
            <Button className={cx("button")}>
              BẮT ĐẦU LÀM BÀI TRẮC NGHIỆM
            </Button>
          </div>
        </div>
        
        <div ref={form} className={cx("question-wrapper")}>
          <div className={cx("help")}>
            <strong>Hướng dẫn</strong>
            <ul className={cx("help-list")}>
              <li className={cx("help-item")}>
                Thời gian hoàn thành dự kiến: 10 - 15 phút
              </li>
              <li className={cx("help-item")}>
                Click chọn câu mô tả đặc điểm phù hợp với mình
              </li>
              <li className={cx("help-item")}>
                Ô bên trái (màu xanh): Hãy chọn đáp án mô tả GIỐNG bạn nhất,
                không chọn đáp án bạn mong muốn trở thành
              </li>
              <li className={cx("help-item")}>
                Ô bên phải (màu đỏ) Hãy chọn đáp án mô tả KHÁC bạn hoặc KHÔNG
                GIỐNG bạn nhất
              </li>
              <li className={cx("help-item")}>Click Nộp bài để xem kết quả</li>
            </ul>
          </div>
          <FormQuizDISC></FormQuizDISC>
        </div>
      </div>
    </section>
  );
}

export default QuizDISC;

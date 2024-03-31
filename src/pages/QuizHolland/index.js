import classNames from "classnames/bind";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import FormQuiz from "~/components/FormQuiz";
import styles from "./QuizHolland.module.scss";

QuizHolland.propTypes = {};

const cx = classNames.bind(styles);

function QuizHolland(props) {
  const form = useRef(null);
  const tutorial = useRef(null);
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate();

  const handleStartDoExBtn = () => {
    if (user === null) {
      navigate("/dang-nhap");
      return;
    }
    tutorial.current?.classList.add(cx("disabled"));
    form.current?.classList.add(cx("enabled"));
  };

  return (
    <section className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("title")}>
          <h2 className={cx("title-1")}>TRẮC NGHIỆM SỞ THÍCH NGÀNH NGHỀ</h2>
          <h1 className={cx("title-2")}>MẬT MÃ HOLLAND</h1>
        </div>

        <div ref={tutorial}>
          <div className={cx("intro")}>
            <p className={cx("des")}>
              <strong>TRƯỚC</strong> khi thực hiện, người thực hiện cần:
              <br></br>• Tự nguyện làm công cụ này.
              <br></br>• Lắng đọng tinh thần 5 phút để nhẹ nhàng.
              <br></br>• Hiểu đây là công cụ tự đánh giá, do đó sẽ vô dụng nếu
              người thực hiện cố gắng trả lời vì muốn có một hình ảnh tốt đẹp
              nào đó.
              <br></br>• Sẵn sàng tâm trí để là chính mình thật nhất có thể khi
              làm công cụ này - đừng tự đánh giá, đừng tự chê, đừng tự khen,
              đừng cố gắng giống ai.
              <br></br>• Hoàn thành chỉ tối đa trong 20 phút.
              <br></br>
              <br></br>
              <strong>TRONG</strong> Chọn câu trả lời này đến với mình nhanh và
              tự nhiên nhất. Càng suy nghĩ thì càng không tốt vì lúc ấy người
              thực hiện đang suy tính và dùng lý trí để trả lời.
              <br></br>
              Nắm bắt các lựa chọn trong từng câu mô tả bao gồm:
              <br></br>• Có: Tôi "có" sở thích ở câu mô tả này
              <br></br>• Không: Tôi "không" có sở thích ở câu mô tả này.
              <br></br>• Không rõ: Tôi "không hiểu" câu mô tả này.
            </p>
            <div className={cx("logo")}>
              <img
                src={"https://rightpath.edu.vn/images/group-holland.png"}
                alt="logo"
              />
            </div>
          </div>

          <ul className={cx("tutorial")}>
            <li className={cx("title")}>CÁC BƯỚC LÀM TRẮC NGHIỆM</li>
            <li className={cx("step")}>
              <strong>Bước 1:</strong> Trả lời bộ câu hỏi để xác Bạn là ai, Bạn
              có thể làm gì, Bạn thích gì
            </li>
            <li className={cx("step")}>
              <strong>Bước 2:</strong> Nhận kết quả Holland. Bạn chọn và xem 2 -
              3 kết quả có điểm cao nhất. Đọc kết quả tương đương với 6 loại
              tính cách-viết tắt là RIASEC, tương ứng với các 6 loại ngành nghề
              phù hợp.
            </li>
            <li className={cx("step")}>
              <strong>Bước 3:</strong> Tìm hiểu các ngành và cân nhắc ngành phù
              hợp theo 2-3 nhóm Holland tại trang web này
            </li>
          </ul>
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
                Thời gian hoàn thành dự kiến: 15 - 20 phút
              </li>
              <li className={cx("help-item")}>
                Click chọn câu mô tả đặc điểm phù hợp với mình
              </li>
              <li className={cx("help-item")}>
                Bạn chỉ có thể chọn một đáp án
              </li>
              <li className={cx("help-item")}>
                Không cần suy nghĩ quá nhiều khi lựa chọn câu trả lời
              </li>
              <li className={cx("help-item")}>Click Nộp bài để xem kết quả</li>
            </ul>
          </div>
          <FormQuiz></FormQuiz>
        </div>
      </div>
    </section>
  );
}

export default QuizHolland;

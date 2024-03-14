import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./QuizHolland.module.scss";
import Button from "~/components/Button";
import FormQuiz from "~/components/FormQuiz";

QuizHolland.propTypes = {};

const cx = classNames.bind(styles);

function QuizHolland(props) {
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
          <h2 className={cx("title-1")}>TRẮC NGHIỆM SỞ THÍCH NGÀNH NGHỀ</h2>
          <h1 className={cx("title-2")}>MẬT MÃ HOLLAND</h1>
        </div>

        <div ref={tutorial}>
          <div className={cx("intro")}>
            <p className={cx("des")}>
              “Làm những gì bạn yêu thích và bạn sẽ không bao giờ phải làm việc
              trong cuộc đời của mình” - đó là bản chất của Trắc nghiệm Holland.
              Lý thuyết lựa chọn nghề nghiệp Holland xuất hiện lần đầu tiên vào
              năm 1959. Đây là công trình của Tiến sỹ Tâm lý người Mỹ John L.
              Holland (1919-2008). Theo lý thuyết, được chọn công việc hoặc môi
              trường có chương trình giáo dục phù hợp, hoặc tương đồng với sở
              thích và tính cách của bạn, rất có thể giúp bạn cảm thấy hài lòng
              trong công việc và thành công trong sự nghiệp. Việc này có nghĩa
              là nếu bạn có thể làm việc mình thích, và còn được làm việc với
              những người cùng chí hướng, thì đó là môi trường lý tưởng để bạn
              trau dồi đam mê và phát triển tài năng của bạn. Trắc nghiệm
              Holland có thể giúp bạn không chỉ chú ý hơn đến các đặc điểm tính
              cách và môi trường làm việc tương ứng mà còn có thể liệt kê một
              loạt các nghề nghiệp mà trước đây bạn có thể chưa nghĩ đến. Hơn
              nữa, trắc nghiệm này cũng có thể giúp bạn xác định một số đặc điểm
              phẩm chất còn tiềm ẩn mà bạn chưa khám phá ra. Lý thuyết lựa chọn
              nghề nghiệp Holland chia con người ra 6 loại tính cách-viết tắt là
              RIASEC, tương ứng với 6 loại ngành nghề phù hợp:
            </p>
            <div className={cx("logo")}>
              <img
                src={"https://rightpath.edu.vn/images/group-holland.png"}
                alt="logo"
              />
            </div>
          </div>
          <ul className={cx("explaine")}>
            <li className={cx("item")}>
              • <strong>Thực tế (R)</strong> - Quan tâm đến các lĩnh vực khoa
              học hoặc máy móc và các hoạt động đòi hỏi sự phối hợp vận động, kỹ
              năng và sức mạnh thể chất. Nhóm Thực tế quan tâm đến công việc
              truyền thống, thực tế, làm việc trong các lĩnh vực như sửa chữa,
              xây dựng hoặc nông nghiệp. Họ sử dụng các công cụ và máy móc, và
              làm việc bằng tay của họ.
            </li>
            <li className={cx("item")}>
              • <strong>Thực tế (R)</strong> - Quan tâm đến các lĩnh vực khoa
              học hoặc máy móc và các hoạt động đòi hỏi sự phối hợp vận động, kỹ
              năng và sức mạnh thể chất. Nhóm Thực tế quan tâm đến công việc
              truyền thống, thực tế, làm việc trong các lĩnh vực như sửa chữa,
              xây dựng hoặc nông nghiệp. Họ sử dụng các công cụ và máy móc, và
              làm việc bằng tay của họ.
            </li>
            <li className={cx("item")}>
              • <strong>Thực tế (R)</strong> - Quan tâm đến các lĩnh vực khoa
              học hoặc máy móc và các hoạt động đòi hỏi sự phối hợp vận động, kỹ
              năng và sức mạnh thể chất. Nhóm Thực tế quan tâm đến công việc
              truyền thống, thực tế, làm việc trong các lĩnh vực như sửa chữa,
              xây dựng hoặc nông nghiệp. Họ sử dụng các công cụ và máy móc, và
              làm việc bằng tay của họ.
            </li>
            <li className={cx("item")}>
              • <strong>Thực tế (R)</strong> - Quan tâm đến các lĩnh vực khoa
              học hoặc máy móc và các hoạt động đòi hỏi sự phối hợp vận động, kỹ
              năng và sức mạnh thể chất. Nhóm Thực tế quan tâm đến công việc
              truyền thống, thực tế, làm việc trong các lĩnh vực như sửa chữa,
              xây dựng hoặc nông nghiệp. Họ sử dụng các công cụ và máy móc, và
              làm việc bằng tay của họ.
            </li>
            <li className={cx("item")}>
              • <strong>Thực tế (R)</strong> - Quan tâm đến các lĩnh vực khoa
              học hoặc máy móc và các hoạt động đòi hỏi sự phối hợp vận động, kỹ
              năng và sức mạnh thể chất. Nhóm Thực tế quan tâm đến công việc
              truyền thống, thực tế, làm việc trong các lĩnh vực như sửa chữa,
              xây dựng hoặc nông nghiệp. Họ sử dụng các công cụ và máy móc, và
              làm việc bằng tay của họ.
            </li>
            <li className={cx("item")}>
              • <strong>Thực tế (R)</strong> - Quan tâm đến các lĩnh vực khoa
              học hoặc máy móc và các hoạt động đòi hỏi sự phối hợp vận động, kỹ
              năng và sức mạnh thể chất. Nhóm Thực tế quan tâm đến công việc
              truyền thống, thực tế, làm việc trong các lĩnh vực như sửa chữa,
              xây dựng hoặc nông nghiệp. Họ sử dụng các công cụ và máy móc, và
              làm việc bằng tay của họ.
            </li>
            <li className={cx("item")}>
              Tuy nhiên, không phải tất cả ngành nghề đều sẽ phù hợp với bạn vì
              có những nghề là sự kết hợp các nhóm sở thích khác nhau. Do đó nếu
              bạn chỉ căn cứ vào kết quả cao nhất để chọn ngành nghề thì rất dễ
              chọn sai. Thực tế là chúng ta thường sẽ có hơn 2 tính cách nổi
              bật. Bạn nên xem xét, tìm hiểu nghề nghiệp theo nhóm tính cách nổi
              bật để chọn nghề phù hợp nhất.
            </li>
          </ul>
          <ul className={cx("tutorial")}>
            <li className={cx("title")}>CÁC BƯỚC LÀM TRẮC NGHIỆM</li>
            <li className={cx("step")}>
              <strong>Bước 1:</strong> Trả lời bộ câu hỏi để xác Bạn là ai, Bạn
              có thể làm gì, Bạn thích gì (Không có câu trả lời đúng sai, chỉ có
              câu các câu mô tả giống bạn nhất)
            </li>
            <li className={cx("step")}>
              <strong>Bước 1:</strong> Trả lời bộ câu hỏi để xác Bạn là ai, Bạn
              có thể làm gì, Bạn thích gì (Không có câu trả lời đúng sai, chỉ có
              câu các câu mô tả giống bạn nhất)
            </li>
            <li className={cx("step")}>
              <strong>Bước 1:</strong> Trả lời bộ câu hỏi để xác Bạn là ai, Bạn
              có thể làm gì, Bạn thích gì (Không có câu trả lời đúng sai, chỉ có
              câu các câu mô tả giống bạn nhất)
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
                Thời gian hoàn thành dự kiến: 10 - 15 phút
              </li>
              <li className={cx("help-item")}>
                Click chọn câu mô tả đặc điểm phù hợp với mình
              </li>
              <li className={cx("help-item")}>Bạn có thể chọn nhiều đáp án</li>
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

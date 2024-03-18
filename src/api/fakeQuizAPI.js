let index = 1;

const answer = [
  {
    ans: "Có",
    point: 1,
  },
  {
    ans: "Không",
    point: 0,
  },
  {
    ans: "Không rõ",
    point: 0,
  },
];

const exportQuiz = (array) => {
  const originalStr = "Nếu có đầy đủ cơ hội và nguồn lực, bạn có thích";
  return array.map((item) => {
    return `${originalStr} ${item.toLowerCase()}`;
  });
};
const realistic = exportQuiz([
  "tự mua và lắp ráp máy vi tính theo ý mình",
  "lắp ráp tủ theo hướng dẫn của youtube",
  "Trang điểm cho mình hay cho bạn theo hướng dẫn của youtube",
  "Cắt tỉa cây cảnh",
  "Tháo điện thoại di dộng hay máy tính ra để tìm hiểu",
  "Tham gia một chuyến du lịch thám hiểm (như khám phá hang động, núi rừng)",
  "Chăm sóc vật nuôi",
  "Sửa xe",
  "Làm đồ nội thất",
  "Lắp ráp máy vi tính",
  "Leo núi",
  "Đóng gói đồ đạc vào thùng",
  "Chơi một môn thể thao",
  "Tham gia chuyến đạp xe xuyên quốc gia (từ TPHCM ra Hà Nội, từ Hà Nội vào TPHCM)",
]);

const investigate = exportQuiz([
  "Thăm bảo tàng công nghệ",
  "Tìm hiểu sự hình thành của các vì sao",
  "Tìm hiểu về văn hóa một quốc gia mà mình thích",
  "Tìm hiểu về tâm lý con người",
  "Đọc một cuốn sách về tương lai của loài người trong một triệu năm nữa",
  "Đọc sách, báo hay xem youtube video về vũ trụ",
  "Tìm hiểu về cảm xúc con người",
  "Được xem một ca mổ tim",
  "Tìm hiểu nguồn gốc của một dịch bệnh",
  "Đọc các bài báo về ảnh hưởng của AI (trí tuệ nhân tạo) lên nghề nghiệp tương lai",
  "Xem youtube video về thế giới động vật",
  "Phát minh xe điện",
  "Tiến hành thí nghiệm hoá học",
  "Nghiên cứu về chế độ dinh dưỡng",
]);

const artistic = exportQuiz([
  "Vẽ tranh",
  "Viết truyện ngắn",
  "Chơi một nhạc cụ",
  "Chơi trong một ban nhạc",
  "Chỉnh sửa phim",
  "Thiết kế poster cho một sự kiện",
  "Vẽ phim hoạt hình",
  "Hát trong một ban nhạc",
  "Biểu diễn nhảy hiện đại",
  "Dẫn chương trình (MC) cho một sự kiện",
  "Dẫn chương trình trên đài phát thanh",
  "Viết kịch bản cho phim hoặc chương trình truyền hình",
  "Chụp hình đám cưới",
  "Viết một bài phê bình phim cho bộ phim mình thích/ghét nhất",
]);

const social = exportQuiz([
  "Giúp người khác chọn nghề nghiệp phù hợp",
  "Kết nối hai người bạn với nhau",
  "Dạy cho bạn mình cách giảm cân qua ăn uống đúng cách",
  "Tham gia ngày trái đất bằng cách lượm rác hay tắt điện",
  "Hướng dẫn khách nước ngoài chỗ ăn ngon",
  "Cứu động vật bị bỏ rơi ngoài đường",
  "Tham gia vào một cuộc thảo luận nhóm nhỏ",
  "Kể chuyện cười cho bạn bè nghe",
  "Dạy trẻ con chơi một trò chơi hay một môn thể thao",
  "Lắng nghe bạn bè tâm sự về vấn đề cá nhân của họ",
  "Giúp bạn bè giải quyết vấn đề liên quan đến tình yêu",
  "Tham gia một chuyến đi từ thiện",
  "Giúp một dự án cộng đồng trong sức của mình",
  "Sẵn sàng giúp thầy cô, bạn bè khi thấy họ cần",
]);

const enterprising = exportQuiz([
  "Tham gia ban đại diện học sinh ở trường",
  "Làm cán bộ lớp",
  "Bán hàng trực tuyến",
  "Quản lý một cửa hàng trực tuyến",
  "Học về thị trường chứng khoán",
  "Tham gia một khóa học về quản lý tài chính",
  "Tham dự một trại huấn luyện kỹ năng lãnh đạo dành cho lứa tuổi thanh thiếu niên",
  "Lập kế hoạch làm việc cho thành viên nhóm",
  "Kiếm tiền bằng cách kinh doanh online",
  "Nói trước đám đông về một đề tài bạn thích",
  "Tham gia xây dựng các luật lệ mới cho lớp/trường",
  "Thuyết phục cha mẹ theo ý mình",
  "Tổ chức đi chơi cho một nhóm bạn",
  "Kiếm tiền bằng cách làm thêm",
]);

const conventional = exportQuiz([
  "Mở tài khoản tiết kiệm",
  "Lập kế hoạch chi tiêu hàng tháng",
  "Chuẩn bị ngân sách cho chuyến đi chơi tập thể lớp",
  "Làm slides cho buổi trình bày trước lớp",
  "Lập kế hoạch cho kỳ nghỉ hè/Tết",
  "Đếm và sắp xếp tiền",
  "Sắp xếp lại bàn học",
  "Viết kế hoạch học tập cho học kỳ mới",
  "Hoàn tất bài tập theo đúng hạn được giao",
  "Dò lỗi chính tả cho phụ đề của một phim ưa thích",
  "Học một khóa vi tính văn phòng",
  "Làm thủ quỹ cho lớp",
  "Sắp xếp lại tủ quần áo cá nhân",
  "Giúp ba/mẹ quản lý tiền chợ của gia đình (mua gì, mua khi nào, mua bao nhiêu)",
]);

const total = {
  realistic,
  investigate,
  artistic,
  social,
  enterprising,
  conventional,
};
const quiz = Object.entries(total).reduce((acc, [key, value]) => {
  const obj = {name: key};
  const array = value.map((item) => {
    return {
      id: index++,
      ques: item,
      ansList: [...answer]
    };
  });
  obj.quesList = array;

  return [...acc, obj];
}, []);

export default quiz;

const categories = {
  dominance: ["Dè dặt", "Kiên định", "Hay giúp đỡ"],
  influence: ["Mạnh mẽ", "Chính xác", "Sôi nổi, hoạt náo"],
  steady: ["Cẩn thận", "Thú vị", "Liều lĩnh"],
  compliant: ["Dễ bộ lộ cảm xúc", "Dễ hài lòng", "Dễ hài lòng"],
};

const quiz = Object.values(categories)[0].map((_, index) =>
  Object.entries(categories).map(([name, category]) => ({
    name,
    ans: category[index],
  }))
);

export default quiz;

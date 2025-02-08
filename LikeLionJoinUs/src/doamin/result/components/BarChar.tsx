interface BarChartProps {
  scores: [number, number, number, number];
}

export default function BarChart({ scores }: BarChartProps) {
  const categories = [
    { name: "기획력", score: scores[0] },
    { name: "분석력", score: scores[1] },
    { name: "실행력", score: scores[2] },
    { name: "창의력", score: scores[3] },
  ];

  const maxScore = 5;

  return (
    <div className="my-8 flex flex-col items-center">
      {categories.map((category, index) => (
        <div key={index} className="mb-3 flex items-center">
          <span className="block font-bold text-gray-800 mr-3">
            {category.name}
          </span>
          <div className="flex justify-center space-x-1 border-2 border-black rounded-md p-1">
            {Array.from({ length: maxScore }).map((_, idx) => (
              <div
                key={idx}
                className={`w-11 h-3 ${
                  idx < category.score ? "bg-[#01A0D2]" : ""
                }`}
                style={{
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

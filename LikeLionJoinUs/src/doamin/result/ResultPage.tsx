import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PositionData, resultDummyData } from "./api/resultDummyData";
import { fetchResultData } from "./api/resultApi";
import { BluePalm, BluePalmUp } from "../question/components/Palm";
import BarChart from "./components/BarChar";
import { PositionComment, PositionImage } from "./utils/positionType";

const ResultPage = () => {
  const [searchParams] = useSearchParams();

  const scores: [number, number, number, number] = [
    Number(searchParams.get("planning")) || 1,
    Number(searchParams.get("analysis")) || 1,
    Number(searchParams.get("practice")) || 1,
    Number(searchParams.get("creative")) || 1,
  ];

  // 최고, 최저 점수 찾기
  const maxIndex = scores.indexOf(Math.max(...scores)) + 1;
  const minIndex = scores.indexOf(Math.min(...scores)) + 1;
  console.log("Best:", maxIndex);
  console.log("Worst:", minIndex);

  const [data, setData] = useState<PositionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // API 요청
    const fetchData = async () => {
      try {
        setLoading(true);
        // const result: PositionData | undefined = await fetchResultData(
        //   maxIndex
        // );

        // if (!result) {
        //   throw new Error("데이터를 불러올 수 없습니다.");
        // }
        // setData(result);

        setData(resultDummyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "알 수 없는 오류 발생");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-[390px] h-[844px] border-4 border-red-400 p-4">
        {data ? (
          <>
            <p className="font-pfstardust text-[12px] text-center mt-5">
              멋쟁이 사자처럼에서의 나의 트랙은...
            </p>
            <div className="text-[31px] font-bold text-center">
              <span className="text-[#FF7711]">{data.positionName}형</span>
              <span className="text-[#01A0D2]"> 아기사자</span>
            </div>

            {/* <h3 className="font-semibold mt-2 flex items-center">
              <BluePalmUp />
              {data.positionName}형 아기사자는?
            </h3> */}

            <div>
              <div className="flex flex-col items-center justify-center">
                {/* 말풍선 (사자 이미지와 살짝 겹침) */}
                <div
                  className="bg-[url('/assets/img/balloon_box.png')] w-full  h-[70px] bg-contain bg-no-repeat bg-center 
    max-w-[80%] mx-auto flex flex-col items-center justify-center pb-2 mt-7 -mb-5"
                >
                  <div className="text-[11px] mb-3">
                    {PositionComment[maxIndex - 1]}
                  </div>
                </div>

                {/* 사자 이미지 (위쪽으로 당겨서 겹치도록 설정) */}
                <div
                  className="h-[250px] w-full bg-cover bg-center mt-[-20px]"
                  style={{
                    backgroundImage: `url(${PositionImage[maxIndex - 1]})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>

            <ul className="list-disc ml-5">
              {data.abilities.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-2">🔹 주요 키워드</h3>
            <p>{data.keywords.join(", ")}</p>

            {/* 점수 표시 */}
            <h3 className="font-semibold mt-2">🔹 나의 점수</h3>
            <p>
              A: {scores[0]}점 | B: {scores[1]}점 | C: {scores[2]}점 | D:{" "}
              {scores[3]}점
            </p>
            <BarChart scores={scores} />
          </>
        ) : (
          <p>데이터 없음</p>
        )}
      </div>
    </div>
  );
};

export default ResultPage;

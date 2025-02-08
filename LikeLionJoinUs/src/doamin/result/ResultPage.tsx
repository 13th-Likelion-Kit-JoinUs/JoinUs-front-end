import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PositionData, resultDummyData } from "./api/resultDummyData";
import BarChart from "./components/BarChar";
import {
  Position,
  PositionComment,
  PositionImage,
  PositionWish,
} from "./utils/positionType";
import { BluePalmUp } from "./components/BluePalmUp";
import { InfoListItem } from "./components/InfoListItem";
import { Logo } from "./components/Logo";
import { ResultTitle } from "./components/ResultTitle";
import { ButtonComponent } from "./components/ButtonComponent";

const ResultPage = () => {
  const [searchParams] = useSearchParams();

  const scores: [number, number, number, number] = [
    Number(searchParams.get("planning")) || 1,
    Number(searchParams.get("analysis")) || 1,
    Number(searchParams.get("practice")) || 1,
    Number(searchParams.get("creative")) || 1,
  ];

  const maxIndex = scores.indexOf(Math.max(...scores));
  const minIndex = scores.indexOf(Math.min(...scores));

  const [data, setData] = useState<PositionData | null>(null);

  useEffect(() => {
    setData(resultDummyData[maxIndex]);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-[390px] h-auto min-h-screen p-4 overflow-hidden">
        {data ? (
          <>
            <ResultTitle index={maxIndex} />

            <div className="flex flex-col items-center justify-center mt-2">
              <div
                className="bg-[url('/~s20231073/assets/img/balloon_box.png')] w-full max-w-[80%] h-[70px] bg-contain bg-no-repeat bg-center 
                flex flex-col items-center justify-center pb-2 mt-7 -mb-5"
              >
                <div className="text-[11px] mb-4">
                  {PositionComment[maxIndex]}
                </div>
              </div>

              <div
                className="h-[250px] w-full bg-cover bg-center mt-[-20px]"
                style={{
                  backgroundImage: `url(${PositionImage[maxIndex]})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>

            <BarChart scores={scores} />

            <BluePalmUp text={`${Position[maxIndex]}형 아기사자는?`} />
            <div className="mx-3 mt-2">
              {data.abilities.map((ability, index) => (
                <InfoListItem key={index} label="" items={[ability]} />
              ))}
            </div>

            <BluePalmUp text={PositionWish[maxIndex]} />
            <div className="ml-3 mt-2">
              <InfoListItem label="툴" items={data.tools} />
              <InfoListItem label="역량" items={data.knowledge} />
              <InfoListItem label="기술" items={data.skills} />
            </div>

            <div className="flex items-start">
              <div>
                <BluePalmUp text="나랑 안맞는 트랙?" />
                <InfoListItem
                  label=""
                  items={[`${Position[minIndex]}형 아기사자`]}
                />
              </div>

              <div className="h-[190px] w-2/5 overflow-hidden mt-7">
                <div
                  className="h-full w-full bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${PositionImage[minIndex]})`,
                    backgroundSize: "100% auto",
                    backgroundPosition: "center top",
                  }}
                ></div>
              </div>
            </div>

            <ButtonComponent />

            <Logo />
          </>
        ) : (
          <p>no data</p>
        )}
      </div>
    </div>
  );
};

export default ResultPage;

import { PositionData } from "./resultDummyData";

export const fetchResultData = async (position: number) => {
  try {
    const response = await fetch(
      `http://localhost:8080/test?position=${position}`
    );
    if (!response.ok) throw new Error("데이터를 가져오는 데 실패했습니다.");

    const result: PositionData = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

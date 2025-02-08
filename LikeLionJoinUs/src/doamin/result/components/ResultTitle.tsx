import { PositionWord } from "../utils/positionType";

export const ResultTitle = ({ index }: { index: number }) => (
  <>
    <p className="font-pfstardust text-sm text-center mt-12">
      멋쟁이 사자처럼에서의 나의 트랙은...
    </p>

    <div className="flex justify-center gap-3 w-full mt-2">
      <img src={PositionWord[index]} className="h-[32px] object-cover" />
      <img
        src="/~s20231073/assets/img/lion_word.png"
        className="h-[32px] object-cover"
      />
    </div>
  </>
);

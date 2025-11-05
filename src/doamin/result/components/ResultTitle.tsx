import { PositionWord } from '../utils/positionType';

export const ResultTitle = ({ index }: { index: number }) => (
  <>
    <p className='font-pfstardust text-sm text-center mt-12 small:text-xs medium:text-sm tablet:text-base laptop:text-lg'>
      멋쟁이 사자처럼에서의 나의 트랙은...
    </p>

    <div className='flex justify-center gap-3 w-full mt-2'>
      <img
        src={PositionWord[index]}
        className='h-[32px] object-cover small:h-[24px] medium:h-[28px] tablet:h-[36px] laptop:h-[40px]'
      />
      <img
        src='/assets/img/lion_word.png'
        className='h-[32px] object-cover small:h-[24px] medium:h-[28px] tablet:h-[36px] laptop:h-[40px]'
      />
    </div>
  </>
);

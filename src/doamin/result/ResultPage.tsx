import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PositionData, resultDummyData } from './api/resultDummyData';
import BarChart from './components/BarChar';
import {
  Position,
  PositionComment,
  PositionImage,
  PositionWish,
} from './utils/positionType';
import { BluePalmUp } from './components/BluePalmUp';
import { InfoListItem } from './components/InfoListItem';
import { Logo } from './components/Logo';
import { ResultTitle } from './components/ResultTitle';
import { ButtonComponent } from './components/ButtonComponent';

const ResultPage = () => {
  const [searchParams] = useSearchParams();

  const scores: [number, number, number, number] = [
    Number(searchParams.get('planning')) || 1,
    Number(searchParams.get('analysis')) || 1,
    Number(searchParams.get('practice')) || 1,
    Number(searchParams.get('creative')) || 1,
  ];

  const maxIndex = scores.indexOf(Math.max(...scores));
  const minIndex = scores.indexOf(Math.min(...scores));

  const [data, setData] = useState<PositionData | null>(null);

  useEffect(() => {
    setData(resultDummyData[maxIndex]);
  }, []);

  return (
    <div className='flex justify-center items-center min-h-screen bg-[#f9f9f9]'>
      <div className='relative w-full sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] h-auto min-h-screen p-4 overflow-hidden'>
        {data ? (
          <>
            <ResultTitle index={maxIndex} />

            <div className='flex flex-col items-center justify-center mt-2'>
              <div className="bg-[url('./assets/img/balloon_box.png')] w-full bg-contain bg-no-repeat bg-center flex flex-col items-center justify-center pb-2 mt-7 -mb-5 small:max-w-[90%] small:h-[65px] medium:max-w-[70%] medium:h-[80px] tablet:max-w-[60%] tablet:h-[100px] laptop:max-w-[30%] laptop:h-[120px]">
                <div className='text-[11px] mb-5 small:text-[11px] medium:text-[13px] tablet:text-[17px] tablet:mb-7 laptop:mb-8 laptop:text-[20px]'>
                  {PositionComment[maxIndex]}
                </div>
              </div>

              <div
                className='h-[250px] w-full bg-cover bg-center mt-[-20px] small:h-[200px] medium:h-[250px] tablet:h-[300px] laptop:h-[350px]'
                style={{
                  backgroundImage: `url(${PositionImage[maxIndex]})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </div>

            <BarChart scores={scores} />

            <div className='flex flex-col items-start small:max-w-[300px] medium:max-w-[500px] tablet:max-w-[500px] laptop:max-w-[600px] mx-auto'>
              <BluePalmUp text={`${Position[maxIndex]}형 아기사자는?`} />
              <div className='mx-5 mt-2'>
                {data.abilities.map((ability, index) => (
                  <InfoListItem key={index} label='' items={[ability]} />
                ))}
              </div>
            </div>

            <div className='flex flex-col items-start my-6 small:max-w-[300px] medium:max-w-[500px] tablet:max-w-[500px] laptop:max-w-[600px] mx-auto'>
              <BluePalmUp text={PositionWish[maxIndex]} />
              <div className='ml-5 mt-2'>
                <InfoListItem label='툴' items={data.tools} />
                <InfoListItem label='역량' items={data.knowledge} />
                <InfoListItem label='기술' items={data.skills} />
              </div>
            </div>

            <div className='flex justify-between my-6 small:max-w-[300px] medium:max-w-[500px] tablet:max-w-[500px] laptop:max-w-[600px] mx-auto'>
              <div className='w-[500px]'>
                <BluePalmUp text='나랑 안 맞는 트랙?' />
                <div className='ml-5 mt-2'>
                  <InfoListItem
                    label=''
                    items={[`${Position[minIndex]}형 아기사자`]}
                  />
                </div>
              </div>

              <div className='h-[250px] w-[250px] overflow-hidden mt-7 small:h-[150px] medium:h-[250px] tablet:h-[300px] laptop:h-[280px]'>
                <div
                  className='h-full w-full bg-no-repeat bg-center'
                  style={{
                    backgroundImage: `url(${PositionImage[minIndex]})`,
                    backgroundSize: '100% auto',
                    backgroundPosition: 'center top',
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

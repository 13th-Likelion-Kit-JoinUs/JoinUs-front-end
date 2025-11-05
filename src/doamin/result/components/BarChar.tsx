import { Word } from '../utils/positionType';

interface BarChartProps {
  scores: [number, number, number, number];
}

export default function BarChart({ scores }: BarChartProps) {
  const categories = [
    { name: '기획력', score: scores[0] },
    { name: '분석력', score: scores[1] },
    { name: '실행력', score: scores[2] },
    { name: '창의력', score: scores[3] },
  ];

  const maxScore = 5;

  return (
    <div className='my-10 flex flex-col items-center'>
      {categories.map((category, index) => (
        <div key={index} className='mb-3 flex items-center'>
          <span className='block font-bold text-gray-800 mr-3'>
            <div
              className='h-[30px] w-[50px] small:w-[40px] tablet:w-[60px] laptop:w-[70px] bg-center'
              style={{
                backgroundImage: `url(${Word[index]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </span>
          <div
            className='flex justify-center space-x-1 p-1.5 medium:p-2 tablet:p-2 labtop:p-2'
            style={{
              backgroundImage: `url('assets/img/box.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {Array.from({ length: maxScore }).map((_, idx) => (
              <div
                key={idx}
                className={`small:w-[47px] small:h-3 medium:w-[60px] medium:h-3 tablet:w-[80px] tablet:h-5 laptop:w-[100px] laptop:h-5 ${
                  idx < category.score ? 'bg-[#01A0D2]' : ''
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

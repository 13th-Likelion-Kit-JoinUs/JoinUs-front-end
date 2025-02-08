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
import { handleShareClick } from './hook/HandleShareClick';

const ResultPage = () => {
	const [searchParams] = useSearchParams();

	const scores: [number, number, number, number] = [
		Number(searchParams.get('planning')) || 1,
		Number(searchParams.get('analysis')) || 1,
		Number(searchParams.get('practice')) || 1,
		Number(searchParams.get('creative')) || 1,
	];

	// 최고, 최저 점수 찾기
	const maxIndex = scores.indexOf(Math.max(...scores)) + 1;
	const minIndex = scores.indexOf(Math.min(...scores)) + 1;
	console.log(scores);
	console.log(`max : ${maxIndex}`);
	console.log(`min : ${minIndex}`);

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

				setData(resultDummyData[maxIndex - 1]);
			} catch (err) {
				setError(err instanceof Error ? err.message : '알 수 없는 오류 발생');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>로딩 중...</p>;
	if (error) return <p className="text-red-500">{error}</p>;

	return (
		<div className="flex justify-center items-center min-h-screen">
			{/* 가로 너비 딱 맞게 조정 */}
			<div className="relative w-full max-w-[390px] h-auto min-h-screen p-4 overflow-hidden">
				{data ? (
					<>
						<p className="font-pfstardust text-[12px] text-center mt-10">
							멋쟁이 사자처럼에서의 나의 트랙은...
						</p>
						<div className="text-[31px] font-bold text-center">
							<span className="text-[#FF7711]">{Position[maxIndex - 1]}형</span>
							<span className="text-[#01A0D2]"> 아기사자</span>
						</div>
						<div className="flex flex-col items-center justify-center -mt-2">
							{/* 말풍선 */}
							<div
								className="bg-[url('/~s20231073/assets/img/balloon_box.png')] w-full max-w-[80%] h-[70px] bg-contain bg-no-repeat bg-center 
                flex flex-col items-center justify-center pb-2 mt-7 -mb-5"
							>
								<div className="text-[11px] mb-4">
									{PositionComment[maxIndex - 1]}
								</div>
							</div>

							{/* 사자 이미지 */}
							<div
								className="h-[250px] w-full bg-cover bg-center mt-[-20px]"
								style={{
									backgroundImage: `url(${PositionImage[maxIndex - 1]})`,
									backgroundSize: 'contain',
									backgroundRepeat: 'no-repeat',
								}}
							></div>
						</div>
						<BarChart scores={scores} />

						<BluePalmUp text={Position[maxIndex - 1] + '형 아기사자는?'} />
						<div className="ml-2 mt-2">
							{data.abilities.map((ability, index) => (
								<div key={index} className="relative grid pl-4 mb-2">
									<span className="absolute left-0 top-0 bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[7px] h-[10px] bg-cover mt-1" />
									<span className="text-[15px] leading-tight break-words">
										{ability}
									</span>
								</div>
							))}
						</div>

						<BluePalmUp text={PositionWish[maxIndex - 1]} />
						<div className="ml-2 mt-2">
							<div className="relative grid pl-4 mb-2">
								<span className="absolute left-0 top-0 bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[7px] h-[10px] bg-cover mt-1" />
								<span className="text-[15px] leading-tight break-words">
									툴: {data.tools.join(', ')}
								</span>
							</div>
							<div className="relative grid pl-4 mb-2">
								<span className="absolute left-0 top-0 bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[7px] h-[10px] bg-cover mt-1" />
								<span className="text-[15px] leading-tight break-words">
									역량:{data.knowledge.join(', ')}
								</span>
							</div>
							<div className="relative grid pl-4 mb-2">
								<span className="absolute left-0 top-0 bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[7px] h-[10px] bg-cover mt-1" />
								<span className="text-[15px] leading-tight break-words">
									기술: {data.skills.join(', ')}
								</span>
							</div>
						</div>

						<div className="flex items-start">
							{/* 왼쪽 텍스트 영역 */}
							<div>
								<BluePalmUp text={'나랑 안맞는 트랙?'} />
								<div className="relative grid pl-4 mb-2 ml-2 mt-2">
									<span className="absolute left-0 top-0 bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[7px] h-[10px] bg-cover mt-1" />
									<span className="text-[15px] leading-tight break-words">
										{Position[minIndex - 1]}형 아기사자
									</span>
								</div>
							</div>

							{/* 오른쪽 이미지 영역 */}
							<div className="h-[190px] w-2/5 overflow-hidden">
								<div
									className="h-full w-full bg-no-repeat bg-center"
									style={{
										backgroundImage: `url(${PositionImage[minIndex - 1]})`,
										backgroundSize: '100% auto', // 가로 100%, 세로 자동
										backgroundPosition: 'center top', // 위쪽 기준으로 자름 (필요하면 bottom으로 변경)
									}}
								></div>
							</div>
						</div>

						<div className="flex justify-between w-full">
							<img
								src="/~s20231073/assets/img/left_btn.png"
								alt="Left Button"
								className="w-1/2 h-full object-cover"
							/>
							<img
								src="/~s20231073/assets/img/right_btn.png"
								alt="Right Button"
								className="w-1/2 h-full object-cover"
								onClick={handleShareClick}
							/>
						</div>

						<div className="flex justify-center items-center my-5">
							<img
								src="/~s20231073/assets/img/likelion_logo.png"
								alt="멋사 로고"
								className="w-1/4 h-auto object-cover"
							/>
						</div>
					</>
				) : (
					<p>no data</p>
				)}
			</div>
		</div>
	);
};
export default ResultPage;

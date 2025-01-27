import { Link } from 'react-router-dom';
import TextBoard from './components/TextBoard';

const Home = () => {
	return (
		<div className="min-h-screen flex-col items-center justify-center font-NeoDunggeunmoPro">
			<div className="flex justify-center items-center mt-10 mb-6">
				<img
					className="w-[61.6px] h-[8px]"
					src="/assets/img/likelion_logo.png"
					alt="logo"
				/>
			</div>
			<div className="flex-col">
				<div className="m-2 text-[12px] text-center text-[#212224]">
					적성 고민 중인 당신을 위한
				</div>
				<div className="flex-col text-center">
					<div className="text-2xl">
						<span className="text-[#01A0D2]">아기사자</span>
						<span className="text-[#FF7711]">트랙</span>
					</div>
					<div className="text-2xl">유형 테스트</div>
				</div>
				<div className="flex justify-center m-8">
					<Link to="/question">
						<div className="bg-[url('assets/img/ballon_box.png')] w-[97px] h-[112px] bg-cover flex flex-col items-center justify-center pb-4">
							<div className="text-[9px]">
								나는 어떤 <br />
								아기사자가 될까?
							</div>
							<div className="bg-[url('assets/img/start_button.png')] w-[61px] h-[20px] bg-cover text-[9px] m-1 text-center bg-bl text-white flex flex-row items-center justify-center">
								<span className="bg-[url('assets/img/right_arrow_white.png')] w-[7px] h-[10px] bg-cover mr-1"></span>
								<span>테스트</span>
							</div>
						</div>
					</Link>
					<div className="bg-[url('assets/img/main_lion.png')] w-[130px] h-[170px] bg-cover"></div>
				</div>
			</div>
			<div className="flex justify-center">
				<TextBoard />
			</div>
		</div>
	);
};

export default Home;

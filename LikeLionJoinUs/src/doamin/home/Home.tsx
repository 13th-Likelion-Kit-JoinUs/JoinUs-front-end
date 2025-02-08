import { Link } from 'react-router-dom';
import TextBoard from './components/TextBoard';

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly font-NeoDunggeunmoPro">
			<div className="flex-col">
				<div className="flex justify-center items-center mt-10 mb-6">
					<img
						className="w-[4rem] h-[0.5rem]"
						src="/assets/img/likelion_logo.png"
						alt="logo"
					/>
				</div>
				<div className="m-2 text-[1em] text-center text-[#212224]">
					적성 고민 중인 당신을 위한
				</div>
				<div className="flex-col text-center">
					<div className="text-[1.6em]">
						<span className="text-[#01A0D2]">아기사자</span>
						<span className="text-[#FF7711]">트랙</span>
					</div>
					<div className="text-[1.6em]">유형 테스트</div>
				</div>
			</div>
			<div className="flex justify-center m-8">
				<Link to="/question">
					<div className="bg-[url('assets/img/ballon_box.png')] w-[7rem] h-[8rem] bg-cover flex flex-col items-center justify-center pb-4">
						<div className="text-[0.6rem]">
							나는 어떤 <br />
							아기사자가 될까?
						</div>
						<div className="bg-[url('assets/img/start_button.png')] w-[4rem] h-[1.4rem] bg-contain text-[0.6em] m-1 text-center bg-bl text-white flex flex-row items-center justify-center">
							<span className="bg-[url('assets/img/right_arrow_white.png')] w-[0.4rem] h-[0.4rem] bg-cover mr-1"></span>
							<span>테스트</span>
						</div>
					</div>
				</Link>
				<div className="bg-[url('assets/img/main_lion.png')] w-[8rem] h-[11rem] bg-cover"></div>
			</div>
			<div className="flex justify-center">
				<Link to="/question">
					<TextBoard text="멋쟁이사자처럼 동아리에서 초대장을 보내왔다!!" />
				</Link>
			</div>
		</div>
	);
};

export default Home;

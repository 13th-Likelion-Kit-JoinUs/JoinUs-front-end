import { Link } from 'react-router-dom';
import TextBoard from './components/TextBoard';

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly font-NeoDunggeunmoPro">
			<div className="flex-col">
				<div className="flex justify-center items-center mt-10 mb-6">
					<img
						className="w-[4rem] h-[0.5rem]"
						src="/~s20231073/assets/img/likelion_logo.png"
						alt="logo"
					/>
				</div>
				<div className="m-2 text-[1em] text-center text-[#212224]">
					적성 고민 중인 당신을 위한
				</div>
				<div className="flex-col text-center">
					<img
						className="w-[22rem] m-1 p-1"
						src="public/assets/img/sub_title.png"
						alt="title"
					/>
				</div>
			</div>
			<div className="flex justify-center m-8">
				<Link to="/question">
					<div
						className="bg-[url('/~s20231073/assets/img/ballon_box.png')] 
                w-[9rem] h-[10rem] sm:w-[9rem] sm:h-[10rem] md:w-[11rem] md:h-[12rem] 
                bg-cover flex flex-col items-center justify-center pb-6"
					>
						<div className="text-[0.9em] p-2 ">
							나는 어떤 <br />
							아기사자가 될까?
						</div>
						<div
							className="bg-[url('/~s20231073/assets/img/start_button.png')] 
                    w-[4rem] h-[1.4rem] sm:w-[5rem] sm:h-[1.8rem] md:w-[6rem] md:h-[2rem] 
                    bg-contain text-[0.6em] sm:text-[0.7em] md:text-[0.8em] 
                    m-1 text-center bg-bl text-white flex flex-row items-center justify-center"
						>
							<span
								className="bg-[url('/~s20231073/assets/img/right_arrow_white.png')] 
                        w-[0.5rem] h-[0.6rem] sm:w-[0.5rem] sm:h-[0.5rem] md:w-[0.6rem] md:h-[0.6rem] 
                        bg-cover mr-1"
							></span>
							<span>테스트</span>
						</div>
					</div>
				</Link>

				<div className="bg-[url('/~s20231073/assets/img/main_lion.png')] w-[10rem] h-[14rem] bg-cover"></div>
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

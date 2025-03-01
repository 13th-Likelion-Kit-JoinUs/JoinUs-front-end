import { Link } from "react-router-dom";
import TextBoard from "./components/TextBoard";

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-evenly font-NeoDunggeunmoPro">
			<div className="flex flex-col w-[100%]">
				<div className="flex justify-center items-center mt-10 mb-6">
					<img
						className="w-[4rem] h-auto medium:w-[6rem] tablet:w-[10rem]"
						src="/~s20231073/assets/img/likelion_logo.png"
						alt="logo"
					/>
				</div>
				<div className="m-2 text-[1em] text-center text-[#212224]  medium:text-[1.2em] tablet:text-[1.8em]">
					적성 고민 중인 당신을 위한
				</div>
				<div className="flex flex-col text-center justify-center items-center">
					<img
						className="w-[22rem] m-1 p-1 medium:w-[30rem] tablet:w-[40rem]"
						src="/~s20231073/assets/img/sub_title.png"
						alt="title"
					/>
				</div>
			</div>
			<div className="flex justify-center m-8">
				<Link to="/question">
					<div
						className="bg-[url('/~s20231073/assets/img/ballon_box.png')] 
                w-[9rem] h-[10rem] medium:w-[10rem] medium:h-[12rem] tablet:w-[13rem] tablet:h-[15rem] 
                bg-cover flex flex-col items-center justify-center pb-6"
					>
						<div className="text-[0.8em] p-2 medium:text-[0.9em] tablet:text-[1.2em]">
							나는 어떤 <br />
							아기사자가 될까?
						</div>
						<div
							className="bg-[url('/~s20231073/assets/img/start_button.png')] 
                    w-[4rem] h-[1.4rem] bg-no-repeat medium:w-[6rem] medium:h-[2.2rem] tablet:w-[6rem] tablet:h-[2.2rem] 
                    bg-contain text-[0.6em] medium:text-[0.7em] tablet:text-[0.8em] 
                    m-1 text-center bg-bl text-white flex flex-row items-center justify-center"
						>
							<span
								className="bg-[url('/~s20231073/assets/img/right_arrow_white.png')] 
                        w-[0.5rem] h-[0.6rem] medium:w-[0.8rem] medium:h-[1rem] tablet:w-[1rem] tablet:h-[1.2rem] 
                        bg-cover mr-1"
							></span>
							<span>테스트</span>
						</div>
					</div>
				</Link>

				<img
					src="/~s20231073/assets/img/main_lion.png"
					className="
				w-[10rem] h-auto medium:w-[14rem] tablet:w-[18rem]"
				></img>
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

type message = {
	data: string;
	onClick: () => void;
};

const ChoiceBoard = ({ data, onClick }: message): JSX.Element => {
	return (
		<div
			className="bg-[length:100%_100%] bg-[url('/~s20231073/assets/img/ballon_wide.png')] w-[20rem] h-[6rem] flex flex-row items-center justify-evenly medium:w-[29rem] medium:h-[8rem] tablet:w-[35rem] tablet:h-[10rem]"
			onClick={onClick}
		>
			<img
				src="assets/img/right_arrow_black.png"
				className="w-[0.5rem] h-auto medium:w-[0.7rem] tablet:w-[1rem]"
				alt=""
			/>
			{/* <span className="bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[0.5rem] h-[0.7rem] bg-cover mr-4 medium:w-[1.2rem]"></span> */}
			<div className="text-[0.8em] w-[16rem] medium:w-[20rem] medium:text-[1em] tablet:w-[23rem] tablet:text-[1.2em] break-keep">
				{data}
			</div>
		</div>
	);
};

export default ChoiceBoard;

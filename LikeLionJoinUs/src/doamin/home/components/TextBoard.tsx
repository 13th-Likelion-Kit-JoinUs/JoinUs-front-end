type textProps = {
	text: string;
};

const TextBoard = ({ text }: textProps): JSX.Element => {
	return (
		<div className="bg-[url('/~s20231073/assets/img/ballon_wide.png')]  w-[20rem] h-[6.4rem] bg-cover flex flex-row items-center justify-center  medium:bg-[url('assets/img/main_loading_box_480.svg')] medium:w-[29rem] tablet:bg-[url('assets/img/main_loading_box_768.svg')] tablet:w-[35rem]">
			<div className="text-[1em] w-[14rem] medium:text-[1.4em] medium:w-[14em] tablet:text-[1.4em] tablet:w-[17em]">
				{text.split("\n").map((line, index) => (
					<span key={index}>
						{line}
						<br />
					</span>
				))}{" "}
			</div>
			<div
				className="bg-[url('/~s20231073/assets/img/right_arrow_black.png')]  
				rotate-90 w-[0.6rem] h-[0.9rem] bg-cover ml-10 mt-4
				medium:hidden tablet:hidden"
			></div>
		</div>
	);
};

export default TextBoard;

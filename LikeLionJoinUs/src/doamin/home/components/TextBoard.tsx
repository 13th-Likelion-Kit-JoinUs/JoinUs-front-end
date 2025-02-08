
type textProps = {
	text: string;
};

const TextBoard = ({ text }: textProps): JSX.Element => {
	return (
		<div className="bg-[url('/~s20231073/assets/img/ballon_wide.png')] w-[18rem] h-[6rem] bg-cover flex flex-row items-center justify-center">
			<div className="text-[0.8em] w-[10rem] h-[2rem]">{text} </div>
			<div className="bg-[url('/~s20231073/assets/img/right_arrow_black.png')] rotate-90 w-[0.6rem] h-[0.9rem] bg-cover ml-10 mt-4"></div>
		</div>
	);
};

export default TextBoard;

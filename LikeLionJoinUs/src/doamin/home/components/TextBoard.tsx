
type textProps = {
	text: string;
};

const TextBoard = ({ text }: textProps): JSX.Element => {
	return (
		<div className="bg-[url('/~s20231073/assets/img/ballon_wide.png')]  w-[23rem] h-[7.5rem] bg-cover flex flex-row items-center justify-center">
      <div className="text-[1em] w-[14rem]">{text} </div>
			<div className="bg-[url('/~s20231073/assets/img/right_arrow_black.png')]  rotate-90 w-[0.6rem] h-[0.9rem] bg-cover ml-10 mt-4"></div>
		</div>
	);
};

export default TextBoard;

type textProps = {
	text: string;
};

const TextBoard = ({ text }: textProps): JSX.Element => {
	return (
		<div className="bg-[url('/~s20231073/assets/img/ballon_wide.png')]  w-[20rem] h-[6.4rem] bg-cover flex flex-row items-center justify-center">
			<div className="text-[1em] w-[14rem]">
				{text.split('\n').map((line, index) => (
					<span key={index}>
						{line}
						<br />
					</span>
				))}{' '}
			</div>
			<div className="bg-[url('/~s20231073/assets/img/right_arrow_black.png')]  rotate-90 w-[0.6rem] h-[0.9rem] bg-cover ml-10 mt-4"></div>
		</div>
	);
};

export default TextBoard;

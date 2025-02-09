type message = {
	data: string;
	onClick: () => void;
};

const ChoiceBoard = ({ data, onClick }: message): JSX.Element => {
	return (
		<div
			className="bg-[url('/~s20231073/assets/img/ballon_wide.png')] w-[23rem] h-[7.5rem] bg-cover flex flex-row items-center justify-center"
			onClick={onClick}
		>
			<span className="bg-[url('/~s20231073/assets/img/right_arrow_black.png')] w-[0.5rem] h-[0.7rem] bg-cover mr-4"></span>
			<div className="text-[0.9em] w-[16rem]">
				{data.split('\n').map((line, index) => (
					<span key={index}>
						{line}
						<br />
					</span>
				))}
			</div>
		</div>
	);
};

export default ChoiceBoard;

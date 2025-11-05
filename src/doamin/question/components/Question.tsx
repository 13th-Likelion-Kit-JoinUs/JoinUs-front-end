type QuestionProps = {
	data: string;
};

const Question = ({ data }: QuestionProps): JSX.Element => {
	return (
		<div className="m-3 text-[1.2em] w-[22rem] medium:w-[26rem] medium:text-[1.5em] tablet:w-[36rem] tablet:text-[2rem]">
			<h1 className="break-words text-center">
				{data.split("\n").map((line, index) => (
					<span key={index}>
						{line}
						<br />
					</span>
				))}{" "}
			</h1>
		</div>
	);
};

export default Question;

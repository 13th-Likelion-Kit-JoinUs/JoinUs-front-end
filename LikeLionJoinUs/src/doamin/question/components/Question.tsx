type QuestionProps = {
	data: string;
};

const Question = ({ data }: QuestionProps): JSX.Element => {
	return (
		<div className="m-3 text-[1.2em] w-[18rem] medium:w-[25rem] medium:text-[1.5em] tablet:w-[28rem] tablet:text-[2rem]">
			<h1>{data}</h1>
		</div>
	);
};

export default Question;

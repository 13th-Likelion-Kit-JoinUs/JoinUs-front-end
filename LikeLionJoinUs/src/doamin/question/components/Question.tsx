
type QuestionProps = {
	data: string;
};

const Question = ({ data }: QuestionProps): JSX.Element => {
	return (
		<div className="m-3 text-[1rem]">
			<h1>{data}</h1>
		</div>
	);
};

export default Question;

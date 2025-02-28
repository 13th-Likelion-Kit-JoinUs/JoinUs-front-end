type QuestionProps = {
	data: string;
};

const Question = ({ data }: QuestionProps): JSX.Element => {
	return (
		<div className="m-3 text-[1.2em] w-[18rem]">
			<h1>
				{data.split('\n').map((line, index) => (
					<span key={index}>
						{line}
						<br />
					</span>
				))}
			</h1>
		</div>
	);
};

export default Question;

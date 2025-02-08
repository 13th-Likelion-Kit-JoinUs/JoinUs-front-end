import Question from './components/Question';
import ChoiceBoard from './components/ChoiceBoard';
import Palms from './components/Pamls';
import useQuestionState from './utils/useQuestionState';

const QuestionPage = () => {
	const { questions, currentStep, handleChoices } = useQuestionState();

	if (!questions.length) {
		return <div>로딩 중....</div>;
	}

	return (
		<div className="flex flex-col items-center justify-around h-screen p-6">
			<Palms progressNum={questions[currentStep].step} />
			<Question data={questions[currentStep].question} />
			<div>
				<ChoiceBoard
					onClick={() => handleChoices(questions[currentStep].choices[0])}
					data={questions[currentStep].choices[0].choiceText}
				/>
				<ChoiceBoard
					onClick={() => handleChoices(questions[currentStep].choices[1])}
					data={questions[currentStep].choices[1].choiceText}
				/>
			</div>
		</div>
	);
};

export default QuestionPage;

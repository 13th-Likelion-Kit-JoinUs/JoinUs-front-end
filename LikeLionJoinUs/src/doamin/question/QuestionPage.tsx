import { useEffect, useState } from 'react';
import Question from './components/Question';
import { questionDummyData } from './api/questionDummyData';
import ChoiceBoard from './components/ChoiceBoard';
import Palms from './components/Pamls';
import { useNavigate } from 'react-router-dom';

type Choice = {
	id: number;
	choiceText: string;
	scorePlanning: number;
	scoreDesign: number;
	scoreFront: number;
	scoreBack: number;
};

type Question = {
	id: number;
	question: string;
	step: number;
	choices: Choice[];
};

const QuestionPage = () => {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState<Question[]>([]);
	const [currentStep, setCurrentStep] = useState(0);
	const [answers, setAnswers] = useState<Choice[]>([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch('/api경로');
	// 		const jsonData = await response.json();
	// 		setQuestions(jsonData.data); // API 데이터 상태에 저장
	// 	};

	// 	fetchData();
	// }, []);

	useEffect(() => {
		setQuestions(questionDummyData);
	}, []);

	if (!questions.length) {
		return <div>로딩 중...</div>;
	}

	const handleChoices = (props: Choice) => {
		const newAnswers: Choice[] = answers;
		newAnswers[props.id] = props;
		setAnswers(newAnswers);
		if (currentStep + 1 === 10) {
			navigate('/loading');
		} else {
			setCurrentStep(currentStep + 1);
		}
	};

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

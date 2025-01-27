import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { questionDummyData } from '../api/questionDummyData';

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

export default function useQuestionState() {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState<Question[]>([]);
	const [currentStep, setCurrentStep] = useState(0);
	const [answers, setAnswers] = useState<Choice[]>([]);

	useEffect(() => {
		setQuestions(questionDummyData);
	}, []);

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

	return { questions, currentStep, answers, handleChoices };
}

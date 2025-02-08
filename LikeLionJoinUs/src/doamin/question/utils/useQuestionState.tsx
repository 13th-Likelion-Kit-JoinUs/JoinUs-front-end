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
	const totalScore = {
		scorePlanning: 0,
		scoreDesign: 0,
		scoreFront: 0,
		scoreBack: 0,
	};

	useEffect(() => {
		setQuestions(questionDummyData);
	}, []);

	const handleChoices = (props: Choice) => {
		const newAnswers: Choice[] = answers;
		newAnswers[props.id] = props;
		setAnswers(newAnswers);
		if (currentStep + 1 === 10) {
			navigate('/loading', {
				state: {
					value: {
						scorePlanning: totalScore.scorePlanning,
						scoreDesign: totalScore.scoreDesign,
						scoreFront: totalScore.scoreFront,
						scoreBack: totalScore.scoreBack,
					},
				},
			});
		} else {
			setCurrentStep(currentStep + 1);
		}
	};

	const calculateScore = (props: Choice[]) => {
		props.forEach((answer) => {
			totalScore.scorePlanning += answer.scorePlanning;
			totalScore.scoreDesign += answer.scoreDesign;
			totalScore.scoreFront += answer.scoreFront;
			totalScore.scoreBack += answer.scoreBack;
		});
	};
	calculateScore(answers);

	return { questions, currentStep, answers, handleChoices };
}

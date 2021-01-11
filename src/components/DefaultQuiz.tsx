import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useFela } from "react-fela";

import { Results } from "../components/Results";

import { answerOptions, IAnswersPayload } from "../interfaces";

import { addAnswers } from "../redux/actions/setAnswers";

import { title, answerBtn, reloadBtn } from "../styles";

export const DefaultQuiz: React.FC = () => {
	const { css } = useFela();
	const dispatch = useDispatch();

	const [currentQuiz, setCurrentQuiz] = React.useState<number>(0);

	const score = useSelector((scoreObj) => scoreObj.scoreReducer.scoreValue);
	const { quizItems }  = useSelector((quizObj) => quizObj.dataReducer);

	function getCorrectAnswer() {
		const allAnswers = quizItems[currentQuiz].answers;

		const correctAnswer = allAnswers.find((answer) => answer.isCorrect);
		return correctAnswer;
	}

	function handleAnswerClick(answer: answerOptions): void {
		if (answer.isCorrect) {
			dispatch({
				type: "INCREASE_SCORE",
				payload: score,
			});
		}

		const answerObj: IAnswersPayload = {
			question: quizItems[currentQuiz].question,
			userOption: answer.option,
			correctOption: getCorrectAnswer()!.option,
		};

		dispatch(addAnswers(answerObj));

		setCurrentQuiz((prev) => ++prev);
	}

	function handleReloadButton(): void {
		dispatch({
			type: "RESET_SCORE",
		});
		dispatch({
			type: "RESET_ANSWERS",
		});
		setCurrentQuiz(0);
	}

	return (
		<>
		{currentQuiz < quizItems.length ? (
			<>
				<h2 className={css(title)}>{quizItems[currentQuiz].question}</h2>
				{quizItems[currentQuiz].answers.map((answer, index) => (
					<button
						key={`${answer}_${index}`}
						className={css(answerBtn)}
						onClick={() => handleAnswerClick(answer)}
					>
						{answer.option}
					</button>
				))}
			</>
		) : (
			<>
				<Results score={score} />
				<button className={css(reloadBtn)} onClick={handleReloadButton}>
					Попробовать еще раз
				</button>
			</>
		)}
		</>
	);
};
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFela } from "react-fela";

import { Results } from "../components/Results";

import {
	answerOptions,
	IAnswersPayload,
	localStorageKeys,
	QuestionItem,
} from "../interfaces";

import { addAnswers } from "../redux/actions/setAnswers";
import { addCustomQuiz } from "../redux/actions/data";

import { title, answerBtn, reloadBtn } from "../styles";

export const DefaultQuiz: React.FC = React.memo(() => {
	const { css } = useFela();
	const dispatch = useDispatch();

	const [currentQuiz, setCurrentQuiz] = React.useState<number>(0);

	const score = useSelector((scoreObj) => scoreObj.scoreReducer.scoreValue);

	const { quizItems } = useSelector((quizObj) => quizObj.dataReducer);
	const quizItemsArr = Object.values(quizItems);

	React.useEffect((): void => {
		if (localStorage.getItem(localStorageKeys.customQuiz)) {
			const quiz: QuestionItem = JSON.parse(
				localStorage.getItem(localStorageKeys.customQuiz) as string
			);
			const quizForRedux = Object.values(quiz);
			quizForRedux.forEach((el) => dispatch(addCustomQuiz(el)));
		} else {
			return;
		}
	}, []);

	function getCorrectAnswer() {
		const allAnswers = quizItemsArr[currentQuiz].answers;

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
			question: quizItemsArr[currentQuiz].question,
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
			{currentQuiz < quizItemsArr.length ? (
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
});

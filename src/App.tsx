import React from "react";

import { QuestionItem } from "./interfaces";
import { answerOptions } from "./interfaces";
import { RootState } from "./interfaces";

import { Results } from "./components/Results";

import { useFela, CssFelaStyle } from "react-fela";

import { quizContainer, quizHeader, title, answerBtn } from "./styles";
import { useSelector, useDispatch } from "react-redux";

export const quizData: QuestionItem[] = [
	{
		question: "Какого типа данных нет в JS?",
		answers: [
			{ option: "String", isCorrect: false },
			{ option: "Boolean", isCorrect: false },
			{ option: "Symbol", isCorrect: false },
			{ option: "Integer", isCorrect: true },
		],
	},
	{
		question: "Какой результат вызова typeof null?",
		answers: [
			{ option: "null", isCorrect: false },
			{ option: "object", isCorrect: true },
			{ option: "number", isCorrect: false },
			{ option: "string", isCorrect: false },
		],
	},
	{
		question: "Чему равно '1' + 1 в JS?",
		answers: [
			{ option: "2", isCorrect: false },
			{ option: "1", isCorrect: false },
			{ option: "11", isCorrect: true },
			{ option: "NaN", isCorrect: false },
		],
	},
	{
		question: "В каком стандарте JS появились стрелочные функции?",
		answers: [
			{ option: "ES5", isCorrect: false },
			{ option: "ES6", isCorrect: true },
			{ option: "ES7", isCorrect: false },
			{ option: "ES8", isCorrect: false },
		],
	},
	{
		question: "В каком году был придуман JS?",
		answers: [
			{ option: "1995", isCorrect: true },
			{ option: "2002", isCorrect: false },
			{ option: "2010", isCorrect: false },
			{ option: "2020...", isCorrect: false },
		],
	},
];

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const { css } = useFela();
	const [currentQuiz, setCurrentQuiz] = React.useState<number>(0);

	// React.useEffect(function getCorrectAnswer(): answerOptions | undefined {
	// 	const allAnswers = quizData[currentQuiz].answers;
		
	// 	const correctAnswer = allAnswers.find((answer) => answer.isCorrect === true);
	// 	return correctAnswer;
	// }, [currentQuiz]);

	let score = useSelector((scoreObj: RootState) => scoreObj.scoreReducer.scoreValue);

	function handleAnswerClick(answer: answerOptions): void {
		if (answer.isCorrect) {
			dispatch({
				type: "INCREASE_SCORE",
				payload: score,
			});
		}

		// getCorrectAnswer();

		setCurrentQuiz((prev) => ++prev);
	}

	function handleReloadButton(): void {
		dispatch({
			type: "RESET_SCORE",
		});
		setCurrentQuiz(0);
	}

	return (
		<div className={css(quizContainer)} id='quiz'>
			<div className={css(quizHeader)}>
				{currentQuiz < quizData.length ? (
					<>
						<h2 className={css(title)}>{quizData[currentQuiz].question}</h2>
						{quizData[currentQuiz].answers.map((answer, index) => (
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
			</div>
		</div>
	);
};

const reloadBtn: CssFelaStyle<{}, {}> = () => ({
	backgroundColor: "#fbaf00",
	border: "none",
	borderRadius: "10px",
	width: "100%",
	color: "#fff",
	cursor: "pointer",
	display: "block",
	fontFamily: "inherit",
	fontSize: "18px",
	marginBottom: "0px",
	padding: "20px",
	":hover": {
		backgroundColor: "#e7a305",
	},
	":focus": {
		backgroundColor: "#f3ac07",
		outline: "none",
	},
	"@media (max-width: 480px)": {
		fontSize: "16px",
		padding: "15px",
	},
});

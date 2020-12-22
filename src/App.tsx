import React from "react";
import { QuestionItem } from "./interfaces";
import { answerOptions } from "./interfaces";

import { useFela, CssFelaStyle } from "react-fela";

const quizData: QuestionItem[] = [
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
	const { css } = useFela();
	const [currentQuiz, setCurrentQuiz] = React.useState<number>(0);
	const [score, setScore] = React.useState<number>(0);

	function handleAnswerClick(answer: answerOptions): void {
		if (answer.isCorrect) {
			setScore((prev) => ++prev);
		}
		setCurrentQuiz((prev) => ++prev);
	}

	function handleReloadButton(): void {
		setScore(0);
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
						<h2 className={css(title)}>
							Вы верно ответили на {score} из {quizData.length} вопросов
						</h2>
						<button className={css(reloadBtn)} onClick={handleReloadButton}>
							Попробовать еще раз
						</button>
					</>
				)}
			</div>
		</div>
	);
};

const quizContainer: CssFelaStyle<{}, {}> = () => ({
	backgroundColor: "#fff",
	borderRadius: "10px",
	boxShadow: "0 0 10px 2px rbga(100, 100, 100, 0.1)",
	overflow: "hidden",
	width: "600px",
	maxWidth: "100%",
	"@media (max-width: 768px)": {
		width: "450px",
	},
	"@media (max-width: 480px)": {
		width: "300px",
	},
});

const quizHeader: CssFelaStyle<{}, {}> = () => ({
	padding: "4rem",
	"@media (max-width: 768px)": {
		padding: "2rem",
	},
	"@media (max-width: 480px)": {
		padding: "1rem",
	},
});

const title: CssFelaStyle<{}, {}> = () => ({
	padding: "0.5rem",
	textAlign: "center",
	margin: 0,
	marginBottom: "40px",
	"@media (max-width: 768px)": {
		fontSize: "24px",
	},
	"@media (max-width: 480px)": {
		fontSize: "18px",
	},
});

const answerBtn: CssFelaStyle<{}, {}> = () => ({
	backgroundColor: "#683AB6",
	border: "2px solid #C9C8CC",
	borderRadius: "20px",
	width: "100%",
	color: "#fff",
	cursor: "pointer",
	display: "block",
	fontFamily: "inherit",
	fontSize: "16px",
	marginBottom: "15px",
	padding: "15px",
	":hover": {
		backgroundColor: "#592ea3",
	},
	":focus": {
		backgroundColor: "#7340ca",
		outline: "none",
	},
	"@media (max-width: 480px)": {
		fontSize: "14px",
		padding: "10px",
	},
});

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

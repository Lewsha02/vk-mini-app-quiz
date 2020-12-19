import React from "react";
import { QuestionItem } from "./interfaces";

import { useFela, CssFelaStyle } from "react-fela";

const quizData: QuestionItem[] = [
	{
		question: "Какого типа данных нет в JS?",
		answers: ["String", "Boolean", "Symbol", "Integer"],
		correct: 3,
	},
	{
		question: "Какой результат вызова typeof null?",
		answers: ["null", "object", "number", "string"],
		correct: 1,
	},
	{
		question: "Чему равно '1' + 1 в JS?",
		answers: ["2", "1", "11", "NaN"],
		correct: 2,
	},
	{
		question: "В каком стандарте JS появились стрелочные функции?",
		answers: ["ES5", "ES6", "ES7", "ES8"],
		correct: 1,
	},
	{
		question: "В каком году был придуман JS?",
		answers: ["1995", "2002", "2010", "2020..."],
		correct: 0,
	},
];

export const App: React.FC = () => {
	const { css } = useFela();
	const [currentQuiz, setCurrentQuiz] = React.useState<number>(0);
	const [score, setScore] = React.useState<number>(0);
	const [inputCheck, setInputCheck] = React.useState<boolean>(false);

	function handleInputCheck(event: React.ChangeEvent<HTMLInputElement>): void {
		setInputCheck(!event.target.checked);
	}

	function handleSubmitButton(): void {
		const answersEl = document.querySelectorAll("input[name=answer]");
		const correctAnswerEl = document.getElementById(
			`answer${quizData[currentQuiz].correct}`
		) as HTMLInputElement;
		const correctAnswerId: number = Number(
			correctAnswerEl?.getAttribute("id")?.slice(6)
		);

		answersEl.forEach((el: any, index: number) => {
			if (el.checked) {
				if (correctAnswerEl?.checked) {
					setScore(score + 1);
				}
				setCurrentQuiz(currentQuiz + 1);
				el.checked = false;
			}
		});
	}

	function handleReloadButton(): void {
		setScore(0);
		setCurrentQuiz(0);
	}

	return (
		<div className={css(quizContainer)} id='quiz'>
			<br/>
			{currentQuiz < quizData.length ? (
				<>
					<div className={css(quizHeader)}>
						<h2 className={css(title)}>{quizData[currentQuiz].question}</h2>
						<ul className={css(answers)}>
							{quizData[currentQuiz].answers.map((answer, index) => (
								<li key={index}>
									<input
										type='radio'
										id={`answer${index}`}
										name='answer'
										onChange={handleInputCheck}
									/>
									<label htmlFor={`answer${index}`}>{answer}</label>
								</li>
							))}
						</ul>
					</div>
					<button className={css(submitButton)} onClick={handleSubmitButton}>
						Ответить
					</button>
				</>
			) : (
				<>
					<h2 className={css(title)}>
						Вы верно ответили на {score} из {quizData.length} вопросов
					</h2>{" "}
					<button className={css(submitButton)} onClick={handleReloadButton}>Попробовать еще раз</button>
				</>
			)}
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
});

const quizHeader: CssFelaStyle<{}, {}> = () => ({
	padding: "4rem",
});

const title: CssFelaStyle<{}, {}> = () => ({
	padding: "1rem",
	textAlign: "center",
	margin: 0,
});

const answers: CssFelaStyle<{}, {}> = () => ({
	listStyleType: "none",
	padding: 0,
	"> li": {
		fontSsize: "1.2rem",
		margin: "1rem 0",
		"> label": {
			cursor: "pointer",
		},
	},
});

const submitButton: CssFelaStyle<{}, {}> = () => ({
	backgroundColor: "#8e44ad",
	border: "none",
	color: "#ffffff",
	cursor: "pointer",
	display: "block",
	fontFamily: "inherit",
	fontSize: "1.3rem",
	width: "100%",
	padding: "1.3rem",
	":hover": {
		backgroundColor: "#732d91",
	},
	":focus": {
		backgroundColor: "#5e3370",
		outline: "none",
	},
});

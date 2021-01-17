import React from "react";
import { Link } from "react-router-dom";

import { useFela, CssFelaStyle } from "react-fela";

import { title, reloadBtn } from "../styles";

import { IAnswersPayload } from "../interfaces";

import { useSelector } from "react-redux";

interface IResultProps {
	score: number;
}

export const Results: React.FC<IResultProps> = React.memo(({ score }) => {
	const { css } = useFela();
	const { answers } = useSelector((data) => data.answersReducer);

	function addAttemptsToCookie() {
		let numberOfTry = document.cookie.slice(11) || '0';
		document.cookie = `countOfTry=${numberOfTry}`;
	
		let newCountOfTry = Number(document.cookie.slice(11)) + 1;
		document.cookie = `countOfTry=${newCountOfTry}`;
	}

	addAttemptsToCookie();

	return (
		<>
			<h2 className={css(title)}>
				Вы верно ответили на {score} из {answers.length} вопросов
			</h2>
			{answers.map((answer: IAnswersPayload, index: number) => (
				<div key={`${answer.question}_${index}`} className={css(quizResult)}>
					<h4>{answer.question}</h4>
					<p>Ваш ответ: {answer.userOption}.</p>
					<p>Верный ответ: {answer.correctOption}.</p>
				</div>
			))}
			<Link to='/customQuiz'>
				<button className={css(reloadBtn)}>Добавить свой вопрос</button>
			</Link>
		</>
	);
});

const quizResult: CssFelaStyle<{}, {}> = () => ({
	marginBottom: "40px",
	"> h4": {
		fontSize: "20px",
		fontWeight: "normal",
		margin: 0,
		marginBottom: "15px",
		padding: 0,
	},
	"> p": {
		padding: 0,
		margin: 0,
		marginTop: "10px",
	},
});

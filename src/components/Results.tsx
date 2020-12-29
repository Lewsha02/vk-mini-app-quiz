import React from "react";
import { quizData } from "../App";

import { useFela, CssFelaStyle } from "react-fela";

import { title } from "../styles";

import { IResultProps } from '../interfaces';

export const Results: React.FC<IResultProps> = ({score}: IResultProps) => {
	const { css } = useFela();
	console.log(score);
	

	return (
		<>
			<h2 className={css(title)}>Вы верно ответили на такие-то вопросы</h2>
			{quizData.map((quiz, index) => {
				return (
					<div key={`${quiz}_${index}`} className={css(quizResult)}>
						<h4>{quiz.question}</h4>
						<p>Ваш ответ: Lorem, ipsum.</p>
						<p>Верный ответ: Lorem, ipsum.</p>
					</div>
				);
			})}
		</>
	);
};

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

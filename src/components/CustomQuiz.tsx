import React from "react";

import { useFela, CssFelaStyle } from "react-fela";
import { QuestionItem } from "../interfaces";

import { answerBtn } from '../styles';
import editSvg from '../assets/edit.svg';

let userQuestion: QuestionItem = {
	question: "",
	answers: [
		{ option: "", isCorrect: false },
		{ option: "", isCorrect: false },
		{ option: "", isCorrect: false },
		{ option: "", isCorrect: false },
	],
};

export const CustomQuiz: React.FC = () => {
	const { css } = useFela();

	const [customTitleValue, setCustomTitleValue] = React.useState<string>("");
	const [optionCorrect, setOptionCorrect] = React.useState<boolean>(false);

	function handleCustomTitleInput(
		event: React.ChangeEvent<HTMLInputElement>
	): void {
		setCustomTitleValue(event.target.value);
	}

	function handleCorrectOption(index: number): void {
		setOptionCorrect((prev) => !prev);
		userQuestion.answers.forEach((answer, i) => {
			if (i !== index) {
				answer.isCorrect = false;
			} else {
				answer.isCorrect = true;
			}
		});
	}

	function handleSubmitButton(e: React.MouseEvent<HTMLButtonElement>): void {
		e.preventDefault();
		if(!optionCorrect) {
			alert('Выберите правильный вариант ответа!');
		}
	}

	return (
		<form className={css(customQuestionForm)}>
			<div className={css(customTitle)}>
				<input
					type='text'
					required
					placeholder='Введите ваш вопрос'
					value={customTitleValue}
					onChange={handleCustomTitleInput}
				/>
				{/* <img src={editSvg} alt="edit icon"/> */}
			</div>
			{userQuestion.answers.map((answer, index: number) => (
				<div className={css(customOption)} key={index}>
					<input
						type='text'
						placeholder='Введите вариант ответа'
						required
						className={css(optionText)}
					/>
					<input
						type='checkbox'
						onChange={() => handleCorrectOption(index)}
						id={`inputcheck${index}`}
						checked={answer.isCorrect}
					/>
					<label
						className={css(customOptionCheckbox)}
						htmlFor={`inputcheck${index}`}
					>
						<span>
							<svg width='12px' height='10px' viewBox='0 0 12 10'>
								<polyline points='1.5 6 4.5 9 10.5 1'></polyline>
							</svg>
						</span>
					</label>
				</div>
			))}
			<button
				className={css(answerBtn)}
				type="submit"
				onClick={e => handleSubmitButton(e)}
			>
				Создать вопрос
			</button>
		</form>
	);
};

const customQuestionForm: CssFelaStyle<{}, {}> = () => ({
	display: 'block',
	'> button[type="submit"]': {
		marginBottom: 0,
		borderColor: 'transparent',
		marginTop: '45px'
	}
});

const customTitle: CssFelaStyle<{}, {}> = () => ({
	textAlign: "center",
	marginBottom: "40px",
	position: 'relative',
	"> input": {
		fontSize: "28px",
		outline: "none",
		border: "none",
		padding: "0.5rem",
		paddingRight: '20px',
		textAlign: "center",
		cursor: 'pointer',
		backgroundImage: `url(${editSvg})`,
		backgroundPosition: 'right',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '15px'
	},
});

const customOption: CssFelaStyle<{}, {}> = () => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: "20px",
	'> input[type="checkbox"]': {
		display: "none",
	},
	'> input[type="checkbox"]:checked + label > span': {
		background: "#844de0",
		borderColor: "#844de0",
		animation: "wave .4s ease",
		"> svg": {
			strokeDashoffset: 0,
			":before": {
				transform: "scale(3.5)",
				opacity: 0,
				transition: "all .6s ease",
			},
		},
	},
});

const optionText: CssFelaStyle<{}, {}> = () => ({
	padding: "1rem",
	flexBasis: "93%",
	border: "1.5px solid #C9C8CC",
	borderRadius: "5px",
	outline: "none",
	fontSize: "16px",
	':focus': {
		borderColor: '#844de0'
	}
});

const customOptionCheckbox: CssFelaStyle<{}, {}> = () => ({
	userSelect: "none",
	cursor: "pointer",
	"> span": {
		display: "inline-block",
		position: "relative",
		width: "18px",
		height: "18px",
		borderRadius: "3px",
		transform: "scale(1) translate3d(0,0,0)",
		verticalAlign: "middle",
		border: "1px solid #9098A9",
		transition: "all .2s ease",
		":hover": {
			borderColor: "#a272f3",
		},
		"> svg": {
			position: "absolute",
			top: "3px",
			left: "2px",
			fill: "none",
			stroke: "#FFFFFF",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeDasharray: "16px",
			strokeDashoffset: "16px",
			transition: "all .3s ease",
			transitionDelay: ".1s",
			transform: "translate3d(0,0,0)",
			":before": {
				content: "",
				width: "100%",
				height: "100%",
				background: "#506EEC",
				display: "block",
				transform: "scale(0)",
				opacity: "1",
				borderRadius: "50%",
			},
		},
	},
});

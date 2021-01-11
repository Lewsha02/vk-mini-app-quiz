import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { useFela, CssFelaStyle } from "react-fela";
import { QuestionItem } from "../interfaces";

import { answerBtn } from "../styles";
import editSvg from "../assets/edit.svg";
import { setCustomQuiz } from "../redux/actions/data";

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
	const dispatch = useDispatch();
	const history = useHistory();

	const [customTitleValue, setCustomTitleValue] = React.useState<string>("");
	const [optionCorrect, setOptionCorrect] = React.useState<boolean>(false);
	const [textOfError, setTextOfError] = React.useState<string>("");

	const { quizItems }  = useSelector((quizObj) => quizObj.dataReducer);

	function handleCustomTitleInput(
		event: React.ChangeEvent<HTMLInputElement>
	): void {
		setCustomTitleValue(event.target.value);
	}

	function handleOptionValue(
		e: React.ChangeEvent<HTMLInputElement>,
		i: number
	) {
		const newOptionValue = e.target.value;
		userQuestion.answers[i].option = newOptionValue;
	}

	function handleCorrectOption(index: number): void {
		setOptionCorrect((prev) => !prev);
		userQuestion.answers.forEach((answer, i) => {
			answer.isCorrect = i === index;
		});
	}


	function handleSubmitButton(e: React.MouseEvent<HTMLButtonElement>): void {
		e.preventDefault();
		userQuestion.question = customTitleValue;
		const hasNotOption = userQuestion.answers.find((answer) => !answer.option);
		const IsStorageFull = (quizItems.length >= 15) || false;

		if (!customTitleValue) {
			setTextOfError("Необходимо придумать вопрос");
		} else if (hasNotOption) {
			setTextOfError("Необходимо заполнить варианты ответа");
		} else if (!optionCorrect) {
			setTextOfError("Необходимо выбрать правильный ответ");
		} else if (IsStorageFull) {
			setTextOfError("Вы не можете создать более 10 вопросов");
		} 
		else {
			dispatch(setCustomQuiz(userQuestion));
			history.push('./');
		}
	}

	return (
		<form className={css(customQuestionForm)}>
			{textOfError && <div className={css(modal)}>{textOfError}</div>}
			<div className={css(customTitle)}>
				<input
					type='text'
					required
					placeholder='Введите ваш вопрос'
					onChange={handleCustomTitleInput}
					value={customTitleValue}
				/>
			</div>
			{userQuestion.answers.map((answer, index) => (
				<div className={css(customOption)} key={index}>
					<input
						type='text'
						placeholder='Введите вариант ответа'
						className={css(optionText)}
						onChange={(e) => handleOptionValue(e, index)}
						name="optionText"
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
			<>
				<button
					className={css(answerBtn)}
					onClick={handleSubmitButton}
				>
					Создать вопрос
				</button>
				</>
		</form>
	);
};

const modal: CssFelaStyle<{}, {}> = () => ({
	textAlign: "center",
	fontSize: "16px",
	marginBottom: "30px",
	padding: "0.8rem",
	borderRadius: "5px",
	boxShadow: "3px 5px 20px -6px rgba(0,0,0,0.75)",
	color: "#333",
	position: "absolute",
	bottom: "-20px",
	width: "90%",
	left: "50%",
	transform: "translateX(-50%)",
	"@media (max-width: 768px)": {
		fontSize: "14px",
		padding: "0.6rem",
	},
});

const customQuestionForm: CssFelaStyle<{}, {}> = () => ({
	display: "block",
	'> button[type="submit"]': {
		marginBottom: 0,
		borderColor: "transparent",
		marginTop: "45px",
		"@media (max-width: 420px)": {
			marginTop: "20px",
		},
	},
	"@media (max-width: 768px)": {
		paddingTop: "20px",
		paddingBottom: "20px",
	},
});

const customTitle: CssFelaStyle<{}, {}> = () => ({
	textAlign: "center",
	marginBottom: "40px",
	position: "relative",
	"> input": {
		fontSize: "28px",
		outline: "none",
		border: "none",
		padding: "0.5rem",
		paddingRight: "20px",
		textAlign: "center",
		cursor: "pointer",
		backgroundImage: `url(${editSvg})`,
		backgroundPosition: "right",
		backgroundRepeat: "no-repeat",
		backgroundSize: "15px",
		"@media (max-width: 768px)": {
			fontSize: "20px",
		},
	},
	"@media (max-width: 420px)": {
		marginBottom: "10px",
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
	"@media (max-width: 420px)": {
		marginBottom: "10px",
	},
});

const optionText: CssFelaStyle<{}, {}> = () => ({
	padding: "1rem",
	flexBasis: "93%",
	border: "1.5px solid #C9C8CC",
	borderRadius: "5px",
	outline: "none",
	fontSize: "16px",
	":focus": {
		borderColor: "#844de0",
	},
	"@media (max-width: 768px)": {
		fontSize: "14px",
	},
	"@media (max-width: 480px)": {
		padding: "0.6rem",
		flexBasis: "90%",
	},
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
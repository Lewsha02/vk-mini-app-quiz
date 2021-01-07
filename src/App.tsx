import React from "react";

import { QuestionItem } from "./interfaces";
import { answerOptions } from "./interfaces";
import { IAnswersPayload } from "./interfaces";

import { Results } from "./components/Results";

import { useFela, CssFelaStyle } from "react-fela";

import { quizContainer, quizHeader, title, answerBtn } from "./styles";
import { useSelector, useDispatch } from "react-redux";

import Database from "./quizData.json";
import { setQuiz } from "./redux/actions/data";
import { CustomQuiz } from "./components/CustomQuiz";

const quizData: QuestionItem[] = Object.values(Database);

export const App: React.FC = () => {
	const dispatch = useDispatch();
	const { css } = useFela();

	const [currentQuiz, setCurrentQuiz] = React.useState<number>(0);

	const score = useSelector((scoreObj) => scoreObj.scoreReducer.scoreValue);

	React.useEffect(() => {
		dispatch(setQuiz(quizData));
	}, []);

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

		dispatch({
			type: "ADD_ANSWERS",
			payload: answerObj,
		});

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
		<div className={css(quizContainer)} id='quiz'>
			<div className={css(quizHeader)}>
				{currentQuiz < quizItems.length ? (
					<CustomQuiz />
					// <>
					// 	<h2 className={css(title)}>{quizItems[currentQuiz].question}</h2>
					// 	{quizItems[currentQuiz].answers.map((answer, index) => (
					// 		<button
					// 			key={`${answer}_${index}`}
					// 			className={css(answerBtn)}
					// 			onClick={() => handleAnswerClick(answer)}
					// 		>
					// 			{answer.option}
					// 		</button>
					// 	))}
					// </>
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

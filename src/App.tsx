import React from "react";
import { useFela } from "react-fela";
import { Route } from "react-router-dom";

import { quizContainer, quizHeader } from "./styles";
import { homePage } from "./pages/homePage";
import { customQuizPage } from "./pages/customQuizPage";

export const App: React.FC = React.memo(() => {
	const { css } = useFela();

	return (
		<div className={css(quizContainer)} id='quiz'>
			<div className={css(quizHeader)}>
				<Route component={homePage} path='/' exact />
				<Route component={customQuizPage} path='/customQuiz' />
			</div>
		</div>
	);
});

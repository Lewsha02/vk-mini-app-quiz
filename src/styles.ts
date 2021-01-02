import { CssFelaStyle } from 'react-fela';

export const quizContainer: CssFelaStyle<{}, {}> = () => ({
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

export const quizHeader: CssFelaStyle<{}, {}> = () => ({
	padding: "4rem",
	"@media (max-width: 768px)": {
		padding: "2rem",
	},
	"@media (max-width: 480px)": {
		padding: "1rem",
	},
});

export const title: CssFelaStyle<{}, {}> = () => ({
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

export const answerBtn: CssFelaStyle<{}, {}> = () => ({
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
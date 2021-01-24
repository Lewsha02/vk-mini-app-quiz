import { FelaStyle } from 'react-fela';

export const quizContainer: FelaStyle<{}, {}> = () => ({
	backgroundColor: "#fff",
	position: 'relative',
	borderRadius: "10px",
	boxShadow: "0 0 10px 2px rbga(100, 100, 100, 0.1)",
	overflow: "hidden",
	width: "600px",
	maxWidth: "100%",
	paddingBottom: '15px',
	"@media (max-width: 768px)": {
		width: "450px",
	},
	"@media (max-width: 480px)": {
		width: "300px",
	},
});

export const quizHeader: FelaStyle<{}, {}> = () => ({
	padding: "4rem",
	"@media (max-width: 768px)": {
		padding: "2rem",
	},
	"@media (max-width: 480px)": {
		padding: "1rem",
	},
});

export const title: FelaStyle<{}, {}> = () => ({
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

export const answerBtn: FelaStyle<{}, {}> = () => ({
	backgroundColor: "#844de0",
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
		backgroundColor: "#7f45e0",
	},
	":focus": {
		backgroundColor: "#8e56ec",
		outline: "none",
	},
	"@media (max-width: 480px)": {
		fontSize: "14px",
		padding: "10px"
	},
});

export const reloadBtn: FelaStyle<{}, {}> = () => ({
	backgroundColor: "#fbaf00",
	border: "none",
	borderRadius: "10px",
	width: "100%",
	color: "#fff",
	cursor: "pointer",
	display: "block",
	fontFamily: "inherit",
	fontSize: "18px",
	marginBottom: "15px",
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
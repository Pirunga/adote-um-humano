import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  font-family: "Amatic SC", cursive;
box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	height: 100%;
	position: relative;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyle;

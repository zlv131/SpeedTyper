import React from 'react';
import './Title.css';
import {useSelector} from "react-redux";
const Title = ({ time }) => {
	const indicators = useSelector((state) => state.indicators.value);
	
	return (
		<div>
			<div className="wrapper__title">
				<p className="title"> {time < 1 ? "😎 Game over 😎" : "👨‍💻 Speed Typer 😎"} </p>
				<p className={time < 1 ? "scoreVisible" : "score"}> Score: {indicators.score} </p>
			</div>
		</div>
	);
};

export default Title;
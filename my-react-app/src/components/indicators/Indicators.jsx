import React from 'react';
import "./Indicators.css";
import {useSelector} from "react-redux";
const Indicators = ({ time }) => {
	const indicators = useSelector((state) => state.indicators.value);
	
	return (
		<div>
			<div className="wrapper__indicators">
				<div className="wrapper__scoreTimerleft">
					<div className="indicators__timeLeft"> Timer left: {time} </div>
					<div className="indicators__score"> Score: {indicators.score}  </div>
				</div>
				
				<div className="wrapper__titleNextWord">
					<div className="indicators__title"> Type the following: </div>
					<div className="indicators__nextWord"> {indicators.currentWord} </div>
				</div>
			</div>
		</div>
	);
};

export default Indicators;
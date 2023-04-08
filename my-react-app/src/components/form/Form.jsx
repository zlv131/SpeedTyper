import React, {useState} from 'react';
import "./Form.css";
import {useDispatch, useSelector} from "react-redux";
import { upScore } from "../../store/indicators.js";
import {words} from "../../words.js";
import {getNextWord} from "../../words.js";

const Form = ({ setTime, time }) => {
	const dispatch = useDispatch();
	const indicators = useSelector((state) => state.indicators.value);
	const [currentInput, setCurrentInput] = useState('');
	
	
	
	return (
		<div>
			<div className="wrapper__form">
				
				<form   onSubmit={(event) => {
					event.preventDefault();
					if (indicators.currentWord === currentInput) {
						(dispatch(upScore( {score: indicators.score + 1, currentWord: getNextWord(words), difficulty: indicators.difficulty})));
						(indicators.difficulty === 'Easy') ? setTime(time + 2) : setTime(time + 1);
						setCurrentInput('');
					};
				}}
				         action="#"
				         className="form">
					
					<input onChange={(event) => setCurrentInput(event.target.value)}
					       value={currentInput}
						     type="text"
					       placeholder={"Type the word here..."}
					       className="form__input"/>
				</form>
				
			</div>
		</div>
	);
};

export default Form;
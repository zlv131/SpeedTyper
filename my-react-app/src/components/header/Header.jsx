import React from 'react';
import './Header.css';
import {useDispatch, useSelector} from "react-redux";
import {changeDifficulty} from "../../store/indicators.js";
import {Link, Outlet} from "react-router-dom";

const Header = () => {
	const dispatch = useDispatch();
	const indicators = useSelector((state) => state.indicators.value);
	
	return (
		<div>
			<div className="wrapper__header">
				<Link className={"header__linkHome"} to={"/"}>
					<a href="" className="header__linkHome"> Home </a>
				</Link>
				<button onClick={() => {
					dispatch(changeDifficulty( {score: indicators.score, currentWord: indicators.currentWord, difficulty: (indicators.difficulty === 'Easy') ? 'Hard' : 'Easy' }))
				}}
				        className="header__button"> {indicators.difficulty} </button>
				
				<Link className="header__linkRules" to={'/rules'}>
					<a href="" className="header__linkRules"> Rules </a>
				</Link>
			</div>
			
			<Outlet/>
		</div>
	);
};

export default Header;
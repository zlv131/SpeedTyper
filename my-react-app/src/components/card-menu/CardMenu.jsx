import React, {useEffect, useState} from 'react';
import Title from "../title/Title.jsx";
import "./CardMenu.css";
import Indicators from "../indicators/Indicators.jsx";
import Form from "../form/Form.jsx";
const CardMenu = () => {
	const [time, setTime] = useState(10);
	
	useEffect(() => {
		setInterval(() => {
			setTime((prevState) => prevState - 0.5);
		}, 1000);
	}, []);
	
	return (
		<div>
			<div className="wrapper__cardMenu">
				<Title time={time}/>
				<div className={time < 1 ? "contentIndicatorsForm" : "contentIndicatorsFormVisible"}>
					<Indicators time={time}/>
					<Form setTime={setTime} time={time}/>
				</div>
			</div>
		</div>
	);
};

export default CardMenu;
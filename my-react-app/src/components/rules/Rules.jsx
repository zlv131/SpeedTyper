import React from 'react';
import './Rules.css';
const Rules = () => {
	return (
		<div>
			<div className="wrapper__rules">
				<h1 className="rules__header"> Это правила игры! </h1>
				<div className="rules__title">
					Если коротко: Вам нужно быстро, а главное правильно вводить слова,
					которые просит приложение. За каждое правильное введенное слово Вы получаете 1 очко, а также
					продлеваете свой таймер, который при старте ограничен в 10 секунд! По окончании таймера игра
					заканчивается!
				</div>
			</div>
		</div>
	);
};

export default Rules;
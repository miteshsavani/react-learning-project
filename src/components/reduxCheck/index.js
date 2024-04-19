import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCount } from '../../store/counter/actions';
import s from './style.less';

export function ReduxCheck() {
	const count = useSelector((state) => state.counter.count);
	const [random, setRandom] = useState(1);
	const dispatch = useDispatch();

	const buttonHandler = useCallback(
		(current) => {
			dispatch(addCount(current + 1));
		},
		[dispatch]
	);

	const generateRandom = useCallback(() => {
		setRandom(Math.floor(Math.random() * 100 + 1));
	}, []);

	const makeEffect = useCallback(() => {
		document
			.querySelectorAll('img')
			?.forEach((img) => img.classList.toggle('reduxCheck_blur'));

		setTimeout(() => {
			document
				.querySelectorAll('img')
				?.forEach((img) => img.classList.toggle('reduxCheck_blur'));
		}, 1000);
	}, []);

	const randomWithEffect = useCallback(() => {
		makeEffect();
		generateRandom();
	}, [generateRandom, makeEffect]);

	return (
		<div className={s.container}>
			<div className={s.block}>
				<p>
					Counter: <span>{count + 1}</span>
				</p>
				<div className={s.buttonBlock}>
					<button onClick={() => buttonHandler(count)}> Add Image!</button>
					<button onClick={makeEffect} disabled={!count}>
						Effect !
					</button>
					<button onClick={generateRandom} disabled={!count}>
						Random
					</button>
					<button onClick={randomWithEffect} disabled={!count}>
						Random + Effect
					</button>
				</div>
				<div className={s.imgBlock}>
					{Array.from(Array(count)).map((d, i) => (
						<div key={i}>
							<img src={`https://picsum.photos/200?random=${random + i}`} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

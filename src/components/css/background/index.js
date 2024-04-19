import { Backdrop } from '@material-ui/core';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import s from './style.less';

export function Background() {
	const [contentWidth, setContentWidth] = useState(0);
	const [contentHeight, setContentHeight] = useState(0);
	const [count, setCount] = useState(1);
	const [loading, setLoading] = useState(false);
    const [img, setImage] = useState('');

    const style = useMemo(
		() => ({
			backgroundImage: `url(${img})`,
		}),
		[img]
	);

	const load = (src) => {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.addEventListener('load', resolve);
			image.addEventListener('error', reject);
			image.src = src;
		});
	};

	useEffect(() => {
		setLoading(true);
        const url = `https://picsum.photos/${contentWidth}/${contentHeight}?random=${count}`;
		load(url)
			.then(() => {
				setLoading(false);
                setImage(url);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [contentWidth, contentHeight, count]);

	const divRef = useRef(null);
	useEffect(() => {
		const divCurrent = divRef.current;
		setContentWidth(divCurrent.scrollWidth);
		setContentHeight(divCurrent.scrollHeight);
	}, []);

	const handleDoubleClick = useCallback(() => {
		setCount((count) => count + 1);
	}, [setCount]);

	return (
		<div
			ref={divRef}
			style={style}
			className={s.container}
			onDoubleClick={handleDoubleClick}
		>
			{loading ? (
				<div
					style={{
						width: '100%',
						height: '100vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
                        fontSize: '3rem'
					}}
				>
					Loading...
				</div>
			) : (
				''
			)}
		</div>
	);
}
import  { useCallback, useEffect, useState } from 'react';
import moment from 'moment';

const useBatteryChecker = () => {
	const [isCharging, setCharging] = useState(false);
	const [chargingTime, setChargingTime] = useState(Infinity);
	const [dischargeTime, setDischargeTime] = useState(Infinity);
	const [level, setLevel] = useState(0);

	const onChargingChange = useCallback((e) => {
		setCharging(e.target.charging);
	},[]);
	const onChargingTimeChange = useCallback((e) => {
		setChargingTime(e.target.chargingTime);
	},[]);
	const onDischargingTimeChange = useCallback((e) => {
		console.log('Discharge called');
		setDischargeTime(e.target.dischargingTime);
	},[]);
	const onLevelChange = useCallback((e) => {
		setLevel(e.target.level);
	}, []);

	useEffect(() => {
		navigator.getBattery().then((battery) => {
			setCharging(battery.charging);
			setChargingTime(battery.chargingTime);
			setDischargeTime(battery.dischargingTime);
			setLevel(battery.level);
			battery.onchargingchange = onChargingChange;
			battery.onchargingtimechange = onChargingTimeChange;
			battery.ondischargingtimechange = onDischargingTimeChange;
			battery.onlevelchange = onLevelChange;
		});
	}, [onChargingChange, onChargingTimeChange, onDischargingTimeChange, onLevelChange]);

	return [isCharging, chargingTime, dischargeTime, level];
};

const convertMinute = (secs) => {
	const second = secs % 60;
	const hhMM = secs / 60;
	const hour =  Math.floor(hhMM / 60);
	const minute = hhMM % 60;
	

	return `${hour}:${minute}:${second}`;
}

const BatteryChecker = () => {
	const [chargingCheck, chargingTime, dischargeTime, level] =
		useBatteryChecker();

	return (
		<>
			<p>{`Charging: ${chargingCheck}`}</p>
			{chargingTime !== Infinity && (
				<p>{`Time to full charge: ${chargingTime} mins`}</p>
			)}
			{dischargeTime !== Infinity && (
				<p>{`Discharge Time: ${convertMinute(dischargeTime)} mins`}</p>
			)}
			<p>{`Level: ${level * 100}%`}</p>
		</>
	);
};

export default BatteryChecker;

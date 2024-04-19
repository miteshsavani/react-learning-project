import { useCallback } from 'react';
import s from './style.less';

const TestComponent = () => {
	const onSubmitForm = useCallback((event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		const firstName = formData.get('firstName');
		const lastName = formData.get('lastName');
        const option = formData.get('option');
		console.log(firstName, lastName, option);
	}, []);

	return (
		<form onSubmit={onSubmitForm}>
			<div className={s.formContainer}>
				<div>
					<input type="text" name="firstName" placeholder="first name" />
				</div>
				<div>
					<input type="text" name="lastName" placeholder="last name" />
				</div>
				<div className="radio">
					<label>
						<input name="option" type="radio" value="option1" checked={true} />
						Option 1
					</label>
				</div>
				<div className="radio">
					<label>
						<input name="option" type="radio" value="option2" />
						Option 2
					</label>
				</div>
				<div className="radio">
					<label>
						<input name="option" type="radio" value="option3" />
						Option 3
					</label>
				</div>
				<div>
					<button type="submit">
						<span>Submit</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default TestComponent;

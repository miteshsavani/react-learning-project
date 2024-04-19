import AppRouter from '../router';
import { Provider } from 'react-redux';
import { store } from '../../store';

const App = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

export default App;

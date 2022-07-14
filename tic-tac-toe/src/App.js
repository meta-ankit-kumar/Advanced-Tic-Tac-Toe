import './App.css';
import { Main } from './components/main/main.component';
function App() {
	const a = async () => {
		try {
			const response = await fetch('/express_backend');
			const body = await response.json();
			console.log('body', body);
			if (response.status !== 200) {
				console.log('In the error block');
				throw Error(body.message);
			}
			return body;
		} catch(e) {
			console.log('In the catch block', JSON.stringify(e));
		}
	};
	a();
	return (
		<Main/>
	);
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainpageRoute } from './Routes';
import MainPage from './pages/MainPage';
import TemtemDetail from './pages/TemtemDetail';
import Footer from './components/Footer';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path={MainpageRoute} component={MainPage} exact />
				<Route path='/:number' component={TemtemDetail} exact />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;

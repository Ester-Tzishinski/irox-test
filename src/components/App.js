import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventsTable from './EventsTable';
import UploadEvents from './UploadEvents';
import Home from './Home';



function App() {
    return (
		<Router>
		 		<Switch>	
				<Route path='/UploadEvents' component={UploadEvents}/>
				<Route path='/EventsTable' component={EventsTable}/>
				<Route path='/' component={Home}/>
			</Switch>
		 </Router>
    
    );
}

export default App;
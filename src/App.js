import { Route } from 'react-router-dom';
import Main from './Main/Main';
import routes from './Router/routes';

function App() {
  return (
    routes.map(route => <Route {...route} />)
  );
}

export default App;

import {Auth , Home} from 'page';
import {Route} from 'react-router-dom';

import './styles/index.css'

function App() {
  return (
    <div className="app">
      <Route path={['/' , '/login' , '/reg']} exact component={Auth} />
      <Route path='/usr' component={Home} />
    </div>
  );
}

export default App;

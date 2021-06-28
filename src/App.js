import {Button , WhiteBlock} from './components';

import './styles/app.css';

function App() {
  return (
    <div className="app">
       <h1>Hello World!</h1>
       <WhiteBlock>
         <Button className="button--normal" size='large' type='primary'>Увійти</Button>
       </WhiteBlock>
       
    </div>
  );
}

export default App;

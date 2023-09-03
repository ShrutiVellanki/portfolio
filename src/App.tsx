import { IntlProvider } from 'react-intl';
import './App.css';
import Representation from './multiple-means-representation/Representation';
import Engagement from './multiple-means-of-engagement/Engagement';
import Action from './multiple-means-action-expression/Action';

function App() {

  return (
    <div className="App">
      <IntlProvider locale="en">
        <h1>Universal Learning Design</h1>
        <Representation></Representation>
        <Engagement></Engagement>
        <Action></Action>
      </IntlProvider>
    </div>
  );
}

export default App;

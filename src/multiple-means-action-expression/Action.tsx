import { useIntl } from 'react-intl';
import './Action.css';
import Scaffolding from './scaffolding/Scaffolding';
import Interacting from './interacting/Interacting';
import Expressing from './expressing/Expressing';

function Action() {
  const intl = useIntl();

  return (
    <div className="Action">
      <h2>Multiple Means of Action and Expression</h2>
      <Expressing></Expressing>
      <Interacting></Interacting>
      <Scaffolding></Scaffolding>
    </div>
  );
}

export default Action;

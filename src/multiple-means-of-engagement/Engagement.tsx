import { useIntl } from 'react-intl';
import './Engagement.css';
import Regulate from './regulate/Regulate';
import Effort from './effort/Effort';
import Interest from './interest/Interest';

function Engagement() {
  const intl = useIntl();

  return (
    <div className="Engagement">
      <h1>Multiple Means of Engagement and Expression</h1>
      <Effort></Effort>
      <Regulate></Regulate>
      <Interest></Interest>
    </div>
  );
}

export default Engagement;

import './Engagement.css';
import Regulate from './regulate/Regulate';
import Effort from './effort/Effort';
import Interest from './interest/Interest';

function Engagement() {

  return (
    <div className="Engagement">
      <h2>Multiple Means of Engagement</h2>
      <Effort></Effort>
      <Regulate></Regulate>
      <Interest></Interest>
    </div>
  );
}

export default Engagement;

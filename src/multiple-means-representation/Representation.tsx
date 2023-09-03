import { useIntl } from 'react-intl';
import './Representation.css';
import Comprehension from './comprehension/Comprehension';
import Language from './language-and-symbols/Language';
import Perception from './perception/Perception';

function Representation() {
  const intl = useIntl();

  return (
    <div className="Representation">
      <h1>Multiple Means of Representation</h1>
      <Comprehension></Comprehension>
      <Language></Language>
      <Perception></Perception>
    </div>
  );
}

export default Representation;

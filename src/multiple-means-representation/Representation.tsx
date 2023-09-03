import './Representation.css';
import Comprehension from './comprehension/Comprehension';
import Language from './language-and-symbols/Language';
import Perception from './perception/Perception';

function Representation() {

  return (
    <div className="Representation">
      <h2>Multiple Means of Representation</h2>
      <Comprehension></Comprehension>
      <Language></Language>
      <Perception></Perception>
    </div>
  );
}

export default Representation;

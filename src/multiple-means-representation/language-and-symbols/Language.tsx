import { useIntl } from 'react-intl';
import './Language.css';

function Language() {
  const intl = useIntl();

  return (
    <div className="Language">
      <h1>Language</h1>
    </div>
  );
}

export default Language;

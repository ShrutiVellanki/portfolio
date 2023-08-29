import { useIntl } from 'react-intl';
import './App.css';

function App() {
  const intl = useIntl();

  return (
    <div className="App">
      <h1>Universal Learning Design</h1>
      <section>
        <h2>Multiple Means of Representation</h2>
        <section class="sub-section">
          <h3>Perception Through Different Modalities</h3>
          <h4 class="italics"></h4>
          <Perception></Perception>
        </section>
        <section class="sub-section">
          <h3>Language and Symbols</h3>
          <h4 class="italics"></h4>
          <Language></Language>
        </section>
        <section class="sub-section">
          <h3>Comprehension</h3>
          <h4 class="italics"></h4>
          <Comprehension></Comprehension>
        </section>
      </section>
      <section>
        <h2>Multiple Means of Engagement</h2>
        <section class="sub-section">
          <h3>Recruiting learners’ interest</h3>
          <h4 class="italics">Subtitle for recruiting learners’ interest</h4>
          <Recruiting></Recruiting>
        </section>
        <section class="sub-section">
          <h3>Learners to sustain their efforts</h3>
          <h4>Subtitle for sustaining learners' efforts</h4>
          <SustainEfforts></SustainEfforts>
        </section>
        <section class="sub-section">
          <h3>Learners to self-regulate</h3>
          <h4>Subtitle for learners to self-regulate</h4>
          <SelfRegulate></SelfRegulate>
        </section>
      </section>
      
      <section>
        <h2>Multiple Means of Action and Expression</h2>
        <section class="sub-section">
          <h3>Interacting with tools and environments that make learning physically accessible</h3>
          <h4 class="italics">Subtitle for interacting with tools and environments that make learning physically accessible</h4>
          <Interacting></Interacting>
        </section>
        <section class="sub-section">
          <h3>Learners to express themselves and communicate</h3>
          <h4>Subtitle for learners to express themselves and communicate</h4>
          <Expression></Expression>
        </section>
        <section class="sub-section">
          <h3>Building learners’ executive functions through scaffolding</h3>
          <h4>Subtitle for building learners’ executive functions through scaffolding</h4>
          <Scaffolding></Scaffolding>
        </section>
      </section>
    </div>
  );
}

export default App;

import './App.css';
import {ContactDetails} from './components/ContactInfo/ContactInfo';
import { ContactForm } from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="container mt-3 main">
      <div className="row">
        
        <div className="col-md-7 my-auto">
          <ContactDetails/>
        </div>
        <div className="col-md-5">

          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;

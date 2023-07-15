import { Fragment, useState } from 'react';

import Form from './components/Form';
import Success from './components/Success';

import './App.css';

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const submitionHandler = (
    inputEmail: string,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!inputEmail || !inputEmail.includes('@')) setIsValid(false);
    else {
      setIsValid(true);
      setEmail(inputEmail);
      setIsSubmited(true);
    }
  };

  const dismissHandler = () => {
    setIsSubmited(false);
  };

  return (
    <Fragment>
      {!isSubmited && <Form onSubmition={submitionHandler} isValid={isValid} />}
      {isSubmited && <Success email={email} onDismiss={dismissHandler} />}
    </Fragment>
  );
}

export default App;

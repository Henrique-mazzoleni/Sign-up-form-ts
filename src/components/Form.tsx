import React, { useState } from 'react';

import DesktopImg from '../../assets/images/illustration-sign-up-desktop.svg';
import MobileImg from '../../assets/images/illustration-sign-up-mobile.svg';

interface FormProps {
  onSubmition: (email: string, event: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
}

const Form: React.FC<FormProps> = ({ onSubmition, isValid }) => {
  const [email, setEmail] = useState('');

  const emailInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  return (
    <main>
      <section>
        <h1>Stay updated!</h1>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <span>Product discovery and building what matters</span>
          </li>
          <li>
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li>
            <span>And much more!</span>
          </li>
        </ul>

        <form onSubmit={onSubmition.bind(null, email)}>
          <label>
            Email address {!isValid && <span>Valid email required</span>}
          </label>
          <input
            type="text"
            id="email"
            placeholder="email@company.com"
            className={isValid ? '' : 'isInvalid'}
            value={email}
            onChange={emailInputHandler}
          />
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
      <img
        className="desktop-img"
        src={DesktopImg}
        alt="illustration sign up"
      />
      <img className="mobile-img" src={MobileImg} alt="illustration sign up" />
    </main>
  );
};

export default Form;

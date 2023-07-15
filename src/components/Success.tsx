import React from 'react';
import successIcon from '../../assets/images/icon-success.svg';

interface SuccessProps {
  email: string;
  onDismiss: () => void;
}

const Success: React.FC<SuccessProps> = ({ email, onDismiss }) => {
  return (
    <main id="success">
      <section>
        <img id="icon" src={successIcon} alt="success icon" />
        <h1>Thanks for subscribing!</h1>

        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </section>
      <button onClick={onDismiss}>Dismiss message</button>
    </main>
  );
};

export default Success;

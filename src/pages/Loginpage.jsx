import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage({ onSubmit, formData }) {
  return (
    <div>
      <LoginForm onSubmit={onSubmit} formData={formData} />
    </div>
  );
}

export default LoginPage;

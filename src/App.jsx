import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import UserDetailsPage from './pages/UserDetailsPage';
import '../node_modules/@amigoapp/doca/dist/css/doca.min.css';

function App() {
  const [page, setPage] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (data) => {
    console.log(data , "data")
    setFormData(data);
    setPage('details');
  };

  const handleBack = () => {
    setPage('login');
  };

  return (
    <>

    <div>
      {page === 'login' ? (
        <>
          
          <LoginPage onSubmit={handleSubmit} formData={formData} />
        </>
      ) : (
        <UserDetailsPage formData={formData} onBack={handleBack} />
      )}
    </div>
    </>
  );
}

export default App;

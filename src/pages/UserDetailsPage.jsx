import React from 'react';
import UserDetails from '../components/UserDetails';

function UserDetailsPage({ formData, onBack }) {
  return (
    <div>
      <UserDetails formData={formData} onBack={onBack} />
    </div>
  );
}

export default UserDetailsPage;

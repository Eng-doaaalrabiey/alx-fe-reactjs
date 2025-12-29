import React from 'react';
import FormikForm from './components/formikForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App" style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>User Registration</h1>
      
      {/* Controlled Components Form */}
      <h2>Controlled Form</h2>
      <RegistrationForm />

      <hr style={{ margin: '30px 0' }} />

      {/* Formik Form */}
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;

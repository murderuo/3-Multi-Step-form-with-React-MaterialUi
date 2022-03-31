import React, { useState } from 'react';
import FormUserDetails from '../Form/FormUserDetails';
import FormPersonalDetails from '../Form/FormPersonalDetails';
import FormConfirm from '../Form/FormConfirm';
import FormSuccess from '../Form/FormSuccess';

const initialFormValues = {
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: '',
};

function UserForm() {
  const nextStep = () => {
    const step = formValues.step;
    setFormValues({ ...formValues, step: step + 1 });
  };
  const prevStep = () => {
    const step = formValues.step;
    setFormValues({ ...formValues, step: step - 1 });
  };
  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    // console.log(event.target.name);
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  switch (formValues.step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          formValues={formValues}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <FormConfirm
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
        />
      );
    case 4:
      return <FormSuccess />;

    default:
      return (
        <div>
          User Form Component <br />
          <button onClick={prevStep}>geri</button>
          <button onClick={nextStep}>ileri</button>
          <br />
          {JSON.stringify(formValues)}
        </div>
      );
  }

  //
}

export default UserForm;

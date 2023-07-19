import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    profession: Yup.string().required('Profession is required'),
    companyName: Yup.string().required('Company name is required'),
  });

  // Form submission handler
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle your sign-up logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        profession: '',
        companyName: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="profession">Profession:</label>
            <Field as="select" id="profession" name="profession">
              <option value="">Select a profession</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              {/* Add more profession options here */}
            </Field>
            <ErrorMessage name="profession" component="div" />
          </div>

          <div>
            <label htmlFor="companyName">Company Name:</label>
            <Field type="text" id="companyName" name="companyName" />
            <ErrorMessage name="companyName" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;

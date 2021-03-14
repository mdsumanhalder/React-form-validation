import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import  './ContactForm.css'
import TextArea from './TextArea';
// import TextSelect from './TextSelect'

export const ContactForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    Jobtitle: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    company: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
      textarea: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        jobtitle: '',
        company: '',
        country:'',
        operating_geography:'',
        textarea:' '
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">
Contact us</h1>
          <Form>
            <div className='columns'>
            <TextField label="First name*" name="firstName" type="text" />
            <TextField label="Last name" name="lastName" type="text" />
            <TextField label="Email*" name="email" type="email" />
            <TextField label="job title" name="jobtitle" type="text" />
          
         
            <TextField label="Company*" name="company" type="text" />
          
            {/* <TextSelect label="Industry*" name="industry"> */}
            <option value="">Banking</option>
            <option value="Automotive">Automotive</option>
            <option value="Consulting">Consulting</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Media/PR">Media/PR</option>
            <option value="Retail">Retail</option>
            <option value="Technology">Technology</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="other">Other</option>
          {/* </TextSelect> */}
            <TextField label="Country*" name="country" value='N/A' />
            <TextField label="Operating geography*" name="operating_geography" value='N/A' />
            {/* <TextSelect label="Operating geography" name="Operating geography"> */}
            <option value="">N/A</option>
            <option value="National">National</option>
            <option value="Regional">Regional</option>
            <option value="Global">Global</option>
          {/* </TextSelect> */}
            </div>
            
            <TextArea label="What would you like to talk about?" name='textarea' type='text' rows='6' />
           <div className='Checkbox'> 
          <div className='first-checkbox'> 
          <input type='checkbox' name='termsAccepted'/>
              <span>By submitting this form I accept</span>
              <a href='#' target='_blank'>privacy policy and cookie policy.</a>
              </div>

             <div className='second-checkbox'> 
             <input type='checkbox' name='termsAccepted'/>
              <span>I would like to receive your newsletter.</span>
              </div>
            
              </div> 
            <button className="btn btn-danger mt-3 ml-3" type="submit">Send</button>
          </Form>
          
        </div>
      )}
      
    </Formik>
    
  )
}

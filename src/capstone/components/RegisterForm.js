import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import * as IssuesActions from '../actions/IssuesActions';
import Button  from 'react-bootstrap/Button'
import { Link,Prompt} from 'react-router-dom';

const RegisterForm = ({ values, errors, touched, isSubmitting }) => (
    <div>
        <br></br><br></br><br></br>
        <h1>REGISTER</h1><br></br><br></br>
        <Form>
            <div>
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;
                <Field type="email" name="mail" placeholder="mail"/>
                {touched.mail && errors.mail && <span style={{ color: 'red' }}>{errors.mail}</span>}
                <br/><br/>
            </div>
            <div>
                PassWord &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;
                <Field type="password" name="password" placeholder="password"/>
                {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                <br/><br/>
            </div>
            <div>
                FirstName&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                <Field type="text" name="fname" placeholder="fname"/>
                {touched.fname && errors.fname && <span style={{ color: 'red' }}>{errors.fname}</span>}
                <br/><br/>
            </div>
            <div>
                 LastName &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                <Field type="text" name="lname" placeholder="lname"/>
                {touched.lname && errors.lname && <span style={{ color: 'red' }}>{errors.lname}</span>}
                <br/><br/>
            </div>
            <div>
                Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                <Field type="text" name="location" placeholder="location"/>
                {touched.location && errors.location && <span style={{ color: 'red' }}>{errors.location}</span>}
                <br/><br/>
            </div>
            <div>
                Mobile No&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                <Field type="text" name="phoneno" placeholder="phoneno"/>
                {touched.phoneno && errors.phoneno && <span style={{ color: 'red' }}>{errors.phoneno}</span>}
                <br/><br/>
            </div>
    
             &nbsp; <Link to="/IssuesComponent" className="btnLink">Back</Link>&nbsp;&nbsp;
            <Button type="submit">Submit</Button>
        </Form>
    </div>
)

const FormikregisterForm = withFormik({
    mapPropsToValues({fname,lname,phoneno,mail,location,password}) {
        return {
            fname: fname || '',
            lname: lname || '',
            phoneno: phoneno || '',
            mail: mail || '',
            location: location || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        fname: Yup.string().min(3, 'Name must be atleast 3 characters in length').required('First Name is required'),
        lname: Yup.string().min(3, 'Name must be atleast 3 characters in length').required('Last Name is required'),
        phoneno: Yup.string().min(10, 'Phone Number must be atleast 10 digits in length').required('Phone Number is required'),
        mail: Yup.string().min(10, 'Mail must be atleast 10 characters in length').required('Mail ID is required'),
        location: Yup.string().min(3, 'location must be atleast 3 characters in length').required('location is required'),
        password: Yup.string().min(6,  'Password must be atleast 6 characters in length').required('Password is required') 
    }),
    handleSubmit(values, { resetForm, setSubmitting,props, setErrors }) {
        console.log(values);
        setTimeout(() => {
            if(values.phoneno==null)
            setErrors({ empname: 'You cannot add Error as an Issue' })
            else{
               props.onSave(values);
			setSubmitting(false);
            }
        });
    }
})(RegisterForm)

export default FormikregisterForm;
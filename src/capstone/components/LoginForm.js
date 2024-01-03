import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Button  from 'react-bootstrap/Button'
import { Link} from 'react-router-dom';

const loginForm = ({ values, errors, touched, isSubmitting }) => (
    <div>
        <br></br><br></br><br></br>
        <h1>Login Page</h1><br></br>
        <Form>
            <div>
                UserName &nbsp;&nbsp;: &nbsp;&nbsp;
                <Field type="email" name="username" placeholder="username"/>
                {touched.username && errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}<br/><br/>
            </div>
            <div>
                PassWord &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;
                <Field type="password" name="password" placeholder="password"/>
                {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                <br/><br/>
            </div>
            <Link to="/IssuesComponent2" className="btnLink">Skip SignIn</Link>&nbsp;
            <Button type="submit">Submit</Button>
        </Form>
    </div>
)

const FormikloginForm = withFormik({
    mapPropsToValues({username,password}) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(10, 'Username must be atleast 10 characters in length').required('UserName is required'),
        password: Yup.string().min(6,  'Password must be atleast 6 characters in length').required('Password is required') 
    }),
    handleSubmit(values, { resetForm, setSubmitting,props, setErrors }) {
        console.log(values);
        setTimeout(() => {
            if (values.empname === 'Error') {
                setErrors({ empname: 'You cannot add Error as an Issue' })
            } else {
                resetForm();
                props.onSave(values);
            }
			setSubmitting(false);
        });
    }
})(loginForm)

export default FormikloginForm
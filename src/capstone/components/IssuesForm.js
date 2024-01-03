import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link, Prompt} from 'react-router-dom';
import Button  from 'react-bootstrap/Button'

const IssuesForm = ({ values, errors, touched, isSubmitting }) => (
    <div>
         <br></br><br></br><br></br>
        <h1>Add Issue</h1>
        <br></br><br></br>
        <Form>
            <div>Issue Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <Field type="text" name="title" placeholder="title"/>
            {touched.title && errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
            </div><br></br>
            <div>Issue Desription&nbsp;:&nbsp;
                <Field type="text" name="isd" placeholder="Isd"/>
                {touched.isd && errors.isd && <span style={{ color: 'red' }}>{errors.isd}</span>}<br/><br/>
            </div>
            <div>
                    Severity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                <Field as="select" name="severity">
                   <option value="Minor">Minor</option>
                   <option value="Major">Major</option>
                   <option value="Critical">Critical</option>
                   </Field>
                 <br/><br/>
            </div>
            <div>
            Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                <Field type="radio" id="Open" name="Status" value="Open"/>
                <label for="Open">Open</label>
                <Field  type="radio" id="Closed" name="Status" value="Closed"/>
                <label for="Closed">Closed</label>
                <Field type="radio" id="InProgress" name="Status" value="In Progress"/>
                <label for="InProgress">In Progress</label>
                <br/><br/>
            </div>
            <div>
            Created Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <Field type="date" name="cdate" placeholder="cdate"/>
            {touched.cdate && errors.cdate && <span style={{ color: 'red' }}>{errors.cdate}</span>}
            </div><br></br>
            <div>
            Resolved Date&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            <Field type="date" name="rdate" placeholder="rdate"/>
            </div>  
            <br/>
            <Prompt message="Are you sure?" />
            &nbsp; <Link className="btnLink" to="/IssuesComponent">Back</Link>&nbsp;&nbsp;&nbsp;
            <Button type="submit">Submit</Button>
        </Form>
    </div>
)

const FormikIssuesForm = withFormik({
    mapPropsToValues({title,isd,severity,Status,cdate,rdate}) {
        return {
            title: title || '',
            isd: isd || '',
            severity: severity || 'Minor',
            Status: Status || 'Open',
            cdate: cdate || '' ,
            rdate: rdate || '',
        }
    },
    validationSchema: Yup.object().shape({
        title:Yup.string().required('This Field is required'),
        cdate:Yup.date().required('This Field is required'),
        isd: Yup.string().min(5, 'Description must be at least 5 characters in length').required('This Field is required')
    }),
    handleSubmit(values, { resetForm, setSubmitting,props, setErrors }) {
        console.log(values);
        setTimeout(() => {
            if (values.empname === 'Error') {
                setErrors({ empname: 'You cannot add Error as an Issue' })
            } else {
                resetForm()
            props.onSave(values);
            }
			setSubmitting(false);
        });
    }
})(IssuesForm)

export default FormikIssuesForm

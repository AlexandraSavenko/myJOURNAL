import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { ToastContainer, toast } from 'react-toastify';
import '../scss/AddDishForm.scss'




export default function AddDishForm (){

    // const FeedbackSchema = Yup.object().shape({
    //     username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    //     email: Yup.string().email("Must be a valid email!").required("Required"),
    //     comment: Yup.string().min(2, "Too short").max(256, "Too long").required("Required"),
    //   });
    return <div className='add-dish-form'>
    <Formik 
    initialValues={{
        ingredients: '',
        process: '',
    }} 
    onSubmit={(value, action)=> {
        // toast.success("Form submitted successfully!");
        action.resetForm()
    }}
    // validationSchema={FeedbackSchema}
    >
      <Form className="ad-form">
        <Field className='ad-input ad-ingredients' as="textarea" name="ingredients" rows="10"/>
        <Field className='ad-input ad-process' as="textarea" name="process" rows="10" />
        <button type="submit">save</button>
      {/* <ToastContainer/> */}
      </Form>
    </Formik>
    </div>
}
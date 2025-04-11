import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { ToastContainer, toast } from 'react-toastify';
import css from '../scss/WeeklyForm.module.scss'




export default function AddDishForm (){

    // const FeedbackSchema = Yup.object().shape({
    //     username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    //     email: Yup.string().email("Must be a valid email!").required("Required"),
    //     comment: Yup.string().min(2, "Too short").max(256, "Too long").required("Required"),
    //   });
    return <div className={css.formWrap}>
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
      <Form className={css.form}>
        <Field className={css.habitInput} type="text" name="habit"/>
        <Field className={css.numberInput} type="number" name="repeatTimes"/>
        <button type="submit">save</button>
      {/* <ToastContainer/> */}
      </Form>
    </Formik>
    </div>
}
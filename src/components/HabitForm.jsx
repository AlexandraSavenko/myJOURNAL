import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { ToastContainer, toast } from 'react-toastify';
import css from '../scss/HabitForm.module.scss';
// import {nanoid} from '@reduxjs/toolkit';
// import { useDispatch } from "react-redux";
// import { addNewHabit } from "../redux/dailyHabitsSlice";


export default function DailyForm ({onSubmit}){

    const ValidationSchema = Yup.object().shape({
        habit: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        repeat: Yup.string().required('Required'),
        repeatTimes: Yup.string().max(4, "Too many times!")
        .matches(/^\d+$/, <em>Invalid number of times</em>)
      });

    return <div className={css.formWrap}>
    <Formik 
    initialValues={{
        habit: '',
        repeat: '',
        repeatTimes: '',
    }} 
    onSubmit={(value, action)=> {
        onSubmit(value)
        action.resetForm()
    }}
    validationSchema={ValidationSchema}
    >
        {
        ({values}) =>(
        <Form className={css.form}>
        <label className={css.habit}> The name of a new habit:
        <Field className={css.habitInput} type="text" name="habit"/>
        </label>
        <fieldset className={css.fieldset}>
            <legend>How many times to repeat:</legend>
        <label>Once
        <Field type="radio" name="repeat" value="Once" />
        </label>
        <div>
        <label>Many
        <Field type="radio" name="repeat" value="Many" /> 
        </label>
        {values.repeat === 'Many' && ( <label>How many:
            <Field className={css.numberInput} type="text" name="repeatTimes"/></label>
            )}</div>
        </fieldset>
        
       
        <button className={css.button} type="submit">save</button>
      {/* <ToastContainer/> */}
      </Form>
      )
      }
      
    </Formik>
    </div>
}
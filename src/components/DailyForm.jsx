import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { ToastContainer, toast } from 'react-toastify';
import css from '../scss/WeeklyForm.module.scss';
import {nanoid} from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { addNewHabit } from "../redux/dailyHabitsSlice";


export default function DailyForm (){

    const ValidationSchema = Yup.object().shape({
        habit: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        repeatTimes: Yup.string().max(4, "Too many times!")
        .matches(/^\d+$/, <em>Invalid number of times</em>)
      });
const dispatch = useDispatch();

const handleNewHabit = (formValue) => {
  dispatch(addNewHabit({id: nanoid(), ...formValue, count: 0}))
}
    return <div className={css.formWrap}>
    <Formik 
    initialValues={{
        habit: '',
        repeat: '',
        repeatTimes: '',
    }} 
    onSubmit={(value, action)=> {
        // toast.success("Form submitted successfully!");
        // console.log(value)
        handleNewHabit(value)
        action.resetForm()
    }}
    validationSchema={ValidationSchema}
    >
        {
        ({values}) =>(
        <Form className={css.form}>
        <label> Habit:
        <Field className={css.habitInput} type="text" name="habit"/>
        </label>

        <label>Once
        <Field type="radio" name="repeat" value="Once" />
        </label>

        <label>More than once
        <Field type="radio" name="repeat" value="Many" />
        </label>
        
        {values.repeat === 'Many' && ( <label>How many times:
            <Field className={css.numberInput} type="text" name="repeatTimes"/></label>
            )}
        <button type="submit">save</button>
      {/* <ToastContainer/> */}
      </Form>
      )
      }
      
    </Formik>
    </div>
}
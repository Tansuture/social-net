import { ErrorMessage, Field, Form,Formik } from 'formik'
import { connect } from 'react-redux'
import { loginThunkCreator, logoutThunkCreator } from '../../state/authReducer'
import s from './Login.module.css'
import * as Yup from "yup"
const initialValues={
        email:"",
        password:"",
        rememberMe:""
}

const  validationSchema=Yup.object({
    email:Yup.string().required('Required'),
    password:Yup.string().required('Required'),
    rememberMe:Yup.string().required('Required')
})

const Login = (props)=>{
    

    const onSubmit=(values)=>{
      
        props.login(values.email,values.password,values.rememberMe)
      
    }

    return(
        <>
        <Formik initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        <Form>
            <label htmlFor="email">Login</label>
            <Field type="email" name="email"></Field>
            <div  className={s.required}><ErrorMessage name="email"/></div>

            <label htmlFor="password">Password</label>
            <Field  type="password" name="password"></Field>
            <div  className={s.required}><ErrorMessage name="password"/></div>

            <div><Field  type="checkbox" name="rememberMe"/>Check</div>
            <div  className={s.required}><ErrorMessage name="rememberMe"/></div>        
             <button type="submit">Submit</button>
        </Form>
        </Formik>
        
        </>
    )
}


export default connect(null,{login:loginThunkCreator,logout:logoutThunkCreator})(Login)
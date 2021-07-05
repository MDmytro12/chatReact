import LoginForm from "../components/LoginForm";
import { withFormik } from 'formik';

export default withFormik({

    validate: values => {
        let error = {};

        if (!values.name){
          error.name = "error-name";
        }

        if (!values.password){
          error.password = "error-password";
        }

       return error;
      },
      
      handleSubmit: (values, { setSubmitting }) => {

        setTimeout(() => {
   
          alert(JSON.stringify(values, null, 2));
   
          setSubmitting(false);
   
        }, 1000);
   
      },

      displayName: 'LoginForm',
})(LoginForm);
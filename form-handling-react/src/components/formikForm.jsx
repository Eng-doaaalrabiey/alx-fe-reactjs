import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => (
  <div className="max-w-sm mx-auto mt-10 p-4 border rounded">
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field name="username" className="border p-2 w-full" />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500"
          />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" type="email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <div>
          <label>Password:</label>
          <Field
            name="password"
            type="password"
            className="border p-2 w-full"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Register
        </button>
      </Form>
    </Formik>
  </div>
);

export default FormikForm;

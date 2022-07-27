import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
  senha: Yup.string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obrigatório"),
});

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <div>
      <h1>Realizar login</h1>
      <Formik
        initialValues={{
          login: "",
          senha: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="login" />
            {errors.login && touched.login ? <div>{errors.login}</div> : null}

            <Field type="password" name="senha" />
            {errors.senha && touched.senha ? <div>{errors.senha}</div> : null}

            <button type="submit">Entrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

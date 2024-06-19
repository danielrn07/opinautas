import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { FormContainer } from './styles'

import { useAuth } from '../../hooks/useAuth'

const Login = () => {
  const [error, setError] = useState(null)
  const { login, error: authError, loading } = useAuth()

  const SignInSchema = Yup.object({
    email: Yup.string().email('E-mail inválido.').required('Campo obrigatório.'),
    password: Yup.string().required('Campo obrigatório.'),
  })

  const handleSubmit = async (values, resetForm) => {
    const user = {
      email: values.email,
      password: values.password,
    }

    await login(user)

    !error && resetForm()
  }

  useEffect(() => {
    setError(authError)
  }, [authError])

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm)
      }}
    >
      <FormContainer>
        <Form className='form'>
          <label>
            <span>E-mail</span>
            <Field type='email' name='email' placeholder='Digite seu e-mail' />
            <ErrorMessage name='email' className='error-message' component='p' />
          </label>

          <label>
            <span>Senha</span>
            <Field type='password' name='password' placeholder='Digite sua senha' />
            <ErrorMessage name='password' className='error-message' component='p' />
          </label>

          <button type='submit'>{!loading ? 'Entrar' : 'Carregando...'}</button>
          <p>
            Ainda não possui conta? <Link to='/register'>Registre-se</Link>
          </p>
        </Form>
        {error}
      </FormContainer>
    </Formik>
  )
}

export default Login

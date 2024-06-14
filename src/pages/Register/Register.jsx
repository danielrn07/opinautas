import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FormContainer } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useState } from 'react'

const Register = () => {
  const [error, setError] = useState(null)
  const { createUser, error: authError, loading } = useAuth()


  const SignUpSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Nome muito curto.')
      .max(50, 'Nome muito longo')
      .required('Campo obrigatório.'),
    email: Yup.string().email('E-mail inválido.').required('Campo obrigatório.'),
    password: Yup.string()
      .min(8, 'Senha muito curta.')
      .required('Campo obrigatório.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas não correspondem.')
      .required('Campo obrigatório.'),
  })

  const handleSubmit = async (values) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password
    }
    const res = await createUser(user)
    console.log(res)
  }

  useEffect(() => {
    setError(authError)
  }, [authError])

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={( values, { resetForm, setSubmiting }) => {
        handleSubmit(values)        
        resetForm()
      }}
    >
      <FormContainer>
        <Form className='form'>
          <label>
            <span>Nome</span>
            <Field type='text' name='name' placeholder='Digite seu nome' />
            <ErrorMessage name='name' component='p' />
          </label>

          <label>
            <span>E-mail</span>
            <Field type='email' name='email' placeholder='Digite seu e-mail' />
            <ErrorMessage name='email' component='p' />
          </label>

          <label>
            <span>Senha</span>
            <Field type='password' name='password' placeholder='Digite sua senha' />
            <ErrorMessage name='password' component='p' />
          </label>

          <label>
            <span>Confirmar senha</span>
            <Field type='password' name='confirmPassword' placeholder='Confirme sua senha' />
            <ErrorMessage name='confirmPassword' component='p' />
          </label>

          <button onSubmit={handleSubmit} type='submit'>{!loading ? 'Cadastrar' : 'Carregando...'}</button>
          {error}
        </Form>
      </FormContainer>
    </Formik>
  )
}

export default Register

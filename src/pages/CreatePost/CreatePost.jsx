import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useAuthValue } from '../../context/AuthContext'
import { useSubmit } from '../../hooks/useSubmit'
import { FormContainer } from './styled'

const CreatePost = () => {
  const [error, setError] = useState(null)

  const { insertDocument, response } = useSubmit('posts')
  const { user } = useAuthValue()

  const navigate = useNavigate()

  const CreatePostSchema = Yup.object({
    title: Yup.string().max(100, 'Título muito longo.'),
    description: Yup.string()
      .min(10, 'Descrição muito curta.')
      .max(1000, 'Descrição muito longa.')
      .required('Campo obrigatório.'),
  })

  const handleSubmit = (values, resetForm) => {
    const tags = values.tags.split(',').map((tag) => tag.trim().toLowerCase())

    insertDocument({
      title: values.title,
      description: values.description,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
      comments: [],
      likes: 0,
      dislikes: 0,
    })

    !error && resetForm()

    navigate('/')
  }

  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        tags: [],
      }}
      validationSchema={CreatePostSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm)
      }}
    >
      <FormContainer>
        <Form className='form'>
          <label>
            <span>Título</span>
            <Field type='text' name='title' placeholder='Digite o título' />
            <ErrorMessage name='title' className='error-message' component='p' />
          </label>

          <label>
            <span>Descrição</span>
            <Field type='text' name='description' placeholder='Digite a descrição' />
            <ErrorMessage name='description' className='error-message' component='p' />
          </label>

          <label>
            <span>Tags</span>
            <Field type='text' name='tags' placeholder='Digite as tags separadas por vírgula' />
            <ErrorMessage name='tags' className='error-message' component='p' />
          </label>

          <button type='submit'>{!response.loading ? 'Enviar' : 'Carregando...'}</button>
          {response.error && <p>{response.error}</p>}
        </Form>
      </FormContainer>
    </Formik>
  )
}

export default CreatePost

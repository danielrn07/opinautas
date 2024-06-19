import { ErrorMessage, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import Post from '../../components/Post/Post'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useSubmit } from '../../hooks/useSubmit'
import { Button, SinglePostContainer } from './styles'

const SinglePost = () => {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)
  const { user } = useAuthValue()

  const { addComment, response } = useSubmit('posts')

  const [error, setError] = useState('')

  const CommentSchema = Yup.object({
    comment: Yup.string().max(300, 'Comentário muito longo.').required('Campo obrigatório.'),
  })

  const handleSubmit = async (values, resetForm) => {
    await addComment(id, user.uid, user.displayName, values.comment)

    !error && resetForm()
  }

  useEffect(() => {
    setError(response.error)
  }, [response.error])

  return (
    <SinglePostContainer>
      {post && (
        <>
          <Post post={post} />
          <Formik
            initialValues={{ comment: '' }}
            validationSchema={CommentSchema}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values, resetForm)
            }}
          >
            {(formik) => (
              <Form className='form'>
                <textarea
                  type='text'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                  name='comment'
                  placeholder='Adicione um comentário'
                />
                <ErrorMessage name='comment' className='error-message' component='p' />
                <Button type='submit'>Comentar</Button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </SinglePostContainer>
  )
}

export default SinglePost

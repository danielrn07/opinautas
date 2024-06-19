import { ErrorMessage, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import Post from '../../components/Post/Post'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useSubmit } from '../../hooks/useSubmit'
import { Button, Comment, PostContainer } from './styles'

const SinglePost = () => {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)
  const { user } = useAuthValue()

  const { insertDocument, response } = useSubmit(`posts/${id}/comments`)
  const { documents: comments } = useFetchDocuments(`posts/${id}/comments`)

  const [error, setError] = useState('')

  const CommentSchema = Yup.object({
    comment: Yup.string().max(300, 'Comentário muito longo.').required('Campo obrigatório.'),
  })

  const handleSubmit = async (values, resetForm) => {
    if (!user) {
      setError('Você precisa estar logado para realizar esta ação.')
      return
    }

    const comment = {
      postById: post.uid,
      displayName: user.displayName,
      text: values.comment,
      uid: user.uid,
    }

    await insertDocument(comment, 'comment')

    !error && resetForm()
  }

  useEffect(() => {
    setError(response.error)
  }, [response.error])

  return (
    <PostContainer className='container'>
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
                {<span className='error-message'>{error}</span> || (
                  <ErrorMessage name='comment' className='error-message' component='p' />
                )}
                <Button type='submit'>Comentar</Button>
              </Form>
            )}
          </Formik>
          {comments &&
            comments.map((comment, index) => (
              <Comment key={index}>
                <span>{comment.displayName}</span>
                <p>{comment.text}</p>
              </Comment>
            ))}
        </>
      )}
    </PostContainer>
  )
}

export default SinglePost

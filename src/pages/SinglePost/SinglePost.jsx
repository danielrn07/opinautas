import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../../components/Post/Post'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { Button, Input, SinglePostContainer } from './styles'

const SinglePost = () => {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)

  const [comment, setComment] = useState('')
  console.log(post)

  return (
    <SinglePostContainer>
      {post && (
        <>
          <Post post={post} />
          <Input
            placeholder='Adicione um comentário'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button>Comentar</Button>
        </>
      )}
    </SinglePostContainer>
  )
}

export default SinglePost

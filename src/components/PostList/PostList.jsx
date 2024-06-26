import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import Post from '../Post/Post'
import { PostListContainer } from './styles'

const PostList = () => {
  const { documents: posts, loading, error } = useFetchDocuments('posts')

  return (
    <PostListContainer className='container'>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </PostListContainer>
  )
}

export default PostList

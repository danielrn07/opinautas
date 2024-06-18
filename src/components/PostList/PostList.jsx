import Post from '../Post/Post'
import { PostListContainer } from './styles'

const PostList = ({ posts }) => {
  return (
    <PostListContainer>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </PostListContainer>
  )
}

export default PostList

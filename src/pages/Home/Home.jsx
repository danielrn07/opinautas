import PostList from "../../components/PostList/PostList"
import { useFetchDocument } from "../../hooks/useFetchDocuments"

const Home = () => {
  const { documents: posts, loading, error } = useFetchDocument('posts')
  return (
    <PostList posts={posts} />
  )
}

export default Home

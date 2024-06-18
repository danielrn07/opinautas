import PostList from "../../components/PostList/PostList"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

const Home = () => {
  const { documents: posts, loading, error } = useFetchDocuments('posts')
  return (
    <PostList posts={posts} />
  )
}

export default Home

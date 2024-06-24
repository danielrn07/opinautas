import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Post from '../../components/Post/Post'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { NotFound, SearchContainer } from './styles'

const Search = () => {
  const query = useQuery()
  const search = query.get('q')
  const [posts, setPosts] = useState(null)

  const { documents, loading, error } = useFetchDocuments('posts', search)

  console.log(documents)
  useEffect(() => {
    setPosts(documents)
  }, [documents])

  return (
    <SearchContainer className='container'>
      {posts && posts.length === 0 && (
        <NotFound>
          <p>Nenhum post encontrado.</p>
          <Link to='/'>
            <button>Voltar</button>
          </Link>
        </NotFound>
      )}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </SearchContainer>
  )
}

export default Search

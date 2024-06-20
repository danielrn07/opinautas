import { useEffect, useState } from 'react'
import UserRanking from '../../components/UserRanking/UserRanking'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { RankingContainer } from './styles'

const Ranking = () => {
  const { documents, loading, error } = useFetchDocuments('users')

  const [users, setUsers] = useState([])

  useEffect(() => {
    if (documents) {
      const sortedUsers = [...documents].sort((a, b) => b.points - a.points)
      setUsers(sortedUsers)
    }
  }, [documents])

  return (
    <RankingContainer className='container'>
      {users && users.map((user, index) => <UserRanking key={index} user={user} />)}
    </RankingContainer>
  )
}

export default Ranking

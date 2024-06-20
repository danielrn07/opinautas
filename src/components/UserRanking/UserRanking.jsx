import { UserProfileImage, UserRankingContainer } from './styles'

const UserRanking = ({ user }) => {
  return (
    <UserRankingContainer>
      <UserProfileImage />
      <div className='info'>
        <h1>{user.name}</h1>
        <p>Pontos: {user.points}</p>
      </div>
    </UserRankingContainer>
  )
}

export default UserRanking

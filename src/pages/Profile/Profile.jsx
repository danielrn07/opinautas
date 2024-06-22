import { useAuthValue } from '../../context/AuthContext'
import { ProfileContainer, UserProfileImage } from './styles'

const Profile = () => {
  const { user } = useAuthValue()
  return (
    <ProfileContainer className='container'>
      <UserProfileImage />
      <h1>{user && user.displayName}</h1>
    </ProfileContainer>
  )
}

export default Profile

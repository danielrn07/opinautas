import { useEffect, useState } from 'react'
import {
  PiBookmarkSimple,
  PiChatTeardropDots,
  PiHeart,
  PiHeartBreak,
  PiHeartBreakFill,
  PiHeartFill,
} from 'react-icons/pi'

import {
  DataContainer,
  Description,
  PostContainer,
  StatisticsContainer,
  Tag,
  TagsContainer,
  UserInfoContainer,
  UserName,
  UserProfileContainer,
  UserProfileImage,
} from './styles'

import { useAuthValue } from '../../context/AuthContext'
import { database } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useSubmit } from '../../hooks/useSubmit'

const Post = ({ post }) => {
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [error, setError] = useState(null)

  const userName = post.createdBy.split(' ')

  const { toggleLike, response } = useSubmit('posts')
  console.log(response)

  const { user } = useAuthValue()

  useEffect(() => {
    if (user) checkUserLike()      
  }, [])

  const checkUserLike = async () => {
    try {
      const postsRef = doc(database, 'posts', post.id, 'likes', user.uid)
      const likeDoc = await getDoc(postsRef)
      setLike(likeDoc.exists())
    } catch (error) {
      setError('Ocorreu um erro. Tente novamente mais tarde.')
    }
  }

  const handleLike = async () => {
    if (!user) {
      setError('Você precisa estar logado para realizar esta ação.')
      return
    }

    await toggleLike(post.id, user.uid)

    setLike(!like)
    if (dislike) {
      setDislike(false)
    }
  }

  const handleDislike = async () => {
    if (!user) {
      setError('Você precisa estar logado para realizar esta ação.')
      return
    }

    await toggleDislike(post.id, user.uid)

    setDislike(!dislike)
    if (like) {
      setLike(false)
    }
  }

  return (
    <PostContainer>     
      <UserInfoContainer>
        <UserProfileImage />
        <UserName>{`${userName[0]} ${userName[1]}`}</UserName>
      </UserInfoContainer>

      <UserProfileContainer>
        <DataContainer>
          <h1>{post.title}</h1>
          <Description>{post.description}</Description>
        </DataContainer>
        <TagsContainer>
          {post.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>

        <StatisticsContainer>
          <span onClick={handleLike}>
            {!like ? <PiHeart size={24} /> : <PiHeartFill color='red' size={24} />}
            {post.likes}
          </span>

          <span onClick={handleDislike}>
            {!dislike ? <PiHeartBreak size={24} /> : <PiHeartBreakFill color='purple' size={24} />}
            {post.dislikes}
          </span>

          <span>
            <PiChatTeardropDots size={24} />
            {post.comments.length}
          </span>

          <PiBookmarkSimple className='bookmark-icon' size={24} />
        </StatisticsContainer>
      </UserProfileContainer>
    </PostContainer>
  )
}

export default Post

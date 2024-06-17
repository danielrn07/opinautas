import { PiBookmarkSimple, PiChatTeardropDots, PiHeart, PiHeartBreak } from 'react-icons/pi'
import {
  DataContainer,
  Description,
  PostContainer,
  StatisticsContainer,
  Tag,
  UserInfoContainer,
  UserName,
  UserProfileContainer,
  UserProfileImage,
  TagsContainer
} from './styles'

const Post = ({ post }) => {
  const userName = post.createdBy.split(' ')

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
          <span>
            <PiHeart size={24} />
            {post.likes}
          </span>

          <span>
            <PiHeartBreak size={24} />
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

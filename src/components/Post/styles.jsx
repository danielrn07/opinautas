import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  margin-bottom: 0.8rem;
  padding: 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;

  span {
    display: flex;
  }

  h1 {
    font-size: 1.4rem;
  }
`

export const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`

export const Tag = styled.p`
  background-color: rgb(234, 234, 234);
  color: rgb(128, 128, 128);
  padding: 0.4rem;
  border-radius: 0.4rem;
`

export const UserName = styled.div`
  display: flex;
  font-weight: 600;
`

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const UserProfileImage = styled.img`
  min-width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: red;
`

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const StatisticsContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  .bookmark-icon {
    align-self: flex-end;
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
  }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

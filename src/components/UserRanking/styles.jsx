import styled from 'styled-components'

export const UserRankingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 1.6rem;
  font-size: 1.4rem;
  color: inherit;

  .info {
    display: flex;
    flex-direction: column;
  }

  .info h1 {
    font-size: 1.8rem;
  }

  .info p {
    font-size: 1.4rem;
  }
`

export const UserProfileImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: red;
`

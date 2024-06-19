import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  textarea {
    resize: none;
  }
`

export const Input = styled.input`
  width: 100%;
`

export const Button = styled.button`
  align-self: flex-end;
  width: 100%;
`

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  background-color: rgb(255, 255, 255);
  font-size: 1.4rem;
  padding: 1.6rem;

  span {
    font-weight: 600;
  }
`

import styled from 'styled-components'

export const SinglePostContainer = styled.div`
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

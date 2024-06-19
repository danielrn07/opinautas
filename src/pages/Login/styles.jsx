import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  
  .form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 3.2rem;
    gap: 1.6rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
  }

  p {
    font-size: 1.4rem;
  }
`

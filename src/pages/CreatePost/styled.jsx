import styled from 'styled-components'

export const FormContainer = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
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

  #description {
    min-width: 100%;
    max-width: 100%;
    min-height: 16rem;
  }
`

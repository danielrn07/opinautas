import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <p>Não possui conta? <Link to='/register'>Registre-se</Link></p>
    </>
  )
}

export default Login

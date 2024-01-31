import { Button, Form } from "rsuite"
import "../assets/css/logins.css"
import { Link } from "react-router-dom"
import PageIcon from '@rsuite/icons/Page';

const Login = () =>{
    return (
      <>  
      <h1 style={{margin:20}}><PageIcon/>LearnMate</h1>
      <div className="login">
        <h4>Log in</h4>
        <br/>
      <Form layout="vertical">
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control placeholder="Email" name="email" />
        </Form.Group>
  
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" />
        </Form.Group>
  
        <Button><Link to={`/home`}>Login</Link></Button>

        <Button style={{marginLeft:200}}><Link to={`/adlogin`}>Admin</Link></Button>
      </Form>
      <br/>
      <p>New User? <Link to={`/signup`}>Register here</Link></p>
      </div> 
    </>
    )
}
export default Login
import { Button, Form } from "rsuite"
import "../assets/css/logins.css"
import { Link } from "react-router-dom"
import PageIcon from '@rsuite/icons/Page';

const AdLogin = () =>{
    return (
      <>  
      <h1 style={{margin:20}}><PageIcon/>LearnMate</h1>
      <div className="login">
        <h4>Admin Log-in</h4>
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
  
        <Button><Link to={`/dash`}>Login</Link></Button>
        <Button style={{marginLeft:200}}><Link to={`/`}>Back</Link></Button>
      </Form>
      
      </div> 
    </>
    )
}
export default AdLogin
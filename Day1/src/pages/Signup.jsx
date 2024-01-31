import { Button, Form, Message, SelectPicker, useToaster } from "rsuite"
import "../assets/css/logins.css"
import { Link } from "react-router-dom"
import PageIcon from '@rsuite/icons/Page';

const data = ['Admin','User'].map(
  item => ({ label: item, value: item })
);
const Signup = () =>{
  const toaster = useToaster();
  
  const message = (
    <Message showIcon type='success' closable > 
      Registration successful!
    </Message>
  );
    return (
      <>  
      <h1 style={{margin:20}}><PageIcon/>LearnMate</h1>
      <div className="login">
        <h4>Register</h4>
        <br/>
      <Form layout="vertical">
        <Form.Group controlId="username">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control placeholder="Username" name="username" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control placeholder="Email" name="email" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" />
        </Form.Group>
        <Form.Group controlId="cpassword">
          <Form.ControlLabel>Confirm Password</Form.ControlLabel>
          <Form.Control placeholder="Again Password" name="cpassword" type="password" autoComplete="off" />
        </Form.Group>
        <Form.Group controlId="mobile">
          <Form.ControlLabel>Mobile Number</Form.ControlLabel>
          <Form.Control placeholder="Mobile Number" name="mobile" type="number" autoComplete="off" />
        </Form.Group>
        <Form.Group controlId="role">
        <Form.ControlLabel>Role</Form.ControlLabel>
        <SelectPicker
          data={data}
          searchable={false}
          style={{ width: 300 }}
          placeholder="Role"
        />
        </Form.Group>
        <Form.Group>
          <Button onClick={() => toaster.push(message, {  duration: 5000 })}> <Link to={`/`}>Register</Link> </Button>
          <Button className="back"> <Link to={`/`}>Back</Link> </Button>
        </Form.Group>
      </Form>
      </div> 
    </>
    )
}
export default Signup
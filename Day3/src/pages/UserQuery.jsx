import { Button, Form, Message, useToaster } from "rsuite"
import "../assets/css/logins.css"
import CustomNavbar from "../components/customNavbar";
import { Link } from "react-router-dom";

const UserQuery = () => {
    
  const toaster = useToaster();
  
  const message = (
    <Message showIcon type='success' closable > 
      Your query has been submitted!
    </Message>
  );
    return(
        <div>
        <header>
            <CustomNavbar/>
        </header>
        <div className="login">
        <h4>Query</h4>
        <br/>
        <Form layout="vertical">
            <Form.Group controlId="email">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control placeholder="Email" name="email" />
            </Form.Group>

            <Form.Group controlId="course">
            <Form.ControlLabel>Course</Form.ControlLabel>
            <Form.Control placeholder="Course" name="course" />
            </Form.Group>
    
            <Form.Group controlId="query" >
            <Form.ControlLabel>Query</Form.ControlLabel>
            <Form.Control placeholder="Your Query" name="query" type="text" autoComplete="off" />
            </Form.Group>
    
            <Button onClick={() => toaster.push(message, {  duration: 5000 })}><Link to={`/home`}>Submit</Link></Button>
        </Form>
    </div> 
    </div>
    )
}
export default UserQuery
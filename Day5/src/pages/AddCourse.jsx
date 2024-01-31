import { Button, Form } from "rsuite"
import "../assets/css/addcourse.css"
import CustomNavbar from "../components/customNavbar"

const AddCourse = () => {
    return(
        <div>
            <header>
                <CustomNavbar />
            </header>
        <div className="course">
            <Form layout="vertical">
                <Form.Group controlId="cname">
                <Form.ControlLabel>Course Name</Form.ControlLabel>
                <Form.Control placeholder="Course Name" name="cname" />
                </Form.Group>
        
                <Form.Group controlId="description">
                <Form.ControlLabel>Description</Form.ControlLabel>
                <Form.Control placeholder="Description" name="description" type="text" autoComplete="off" />
                </Form.Group>

                <Form.Group controlId="duration">
                <Form.ControlLabel>Duration</Form.ControlLabel>
                <Form.Control placeholder="Duration" name="duration" type="text" autoComplete="off" />
                </Form.Group>

                <Form.Group controlId="fee">
                <Form.ControlLabel>Fees Amount</Form.ControlLabel>
                <Form.Control placeholder="0" name="fee" type="number" autoComplete="off" />
                </Form.Group>
        
                <Button>Add Course</Button>
            </Form>
        </div>
        </div>
    )
}

export default AddCourse
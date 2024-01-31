import { Button, Input, InputGroup, Panel, PanelGroup, Placeholder } from "rsuite"
import "../assets/css/addcourse.css";
import SearchIcon from '@rsuite/icons/Search';
import CustomNavbar from "../components/customNavbar";
const ViewCourse = () =>{
    return(
       <div>
            <header>
                <CustomNavbar />
            </header>
        <div className="search">
            <InputGroup inside>
                <SearchIcon style={{ margin:10}}/>
                <Input placeholder="Search" />
            </InputGroup>
    </div>
        <div className="courselist">
            <PanelGroup accordion bordered>
                <Panel header="Course 1" defaultExpanded>
                <p>Course Description</p>
                <Button style={{marginLeft:1000}}>Enroll</Button>
                <Placeholder.Paragraph />
                </Panel>
                <Panel header="Course 2">
                <p>Course Description</p>
                <Button style={{marginLeft:1000}}>Enroll</Button>
                <Placeholder.Paragraph />
                </Panel>
                <Panel header="Course 3">
                <p>Course Description</p>
                <Button style={{marginLeft:1000}}>Enroll</Button>
                <Placeholder.Paragraph />
                </Panel>
            </PanelGroup>
        </div>
       </div>
    )
}
export default ViewCourse
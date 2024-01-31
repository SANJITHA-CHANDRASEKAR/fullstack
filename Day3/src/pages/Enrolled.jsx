import { Panel, Progress } from "rsuite";
import CustomNavbar from "../components/customNavbar";

const Enrolled = () => {
  return (
    <div className="enroll">
      <header>
        <CustomNavbar />
      </header>
      <h1 style={{ margin: 20 }}>My Course</h1>
      <div className="panel-container">
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, margin: 20 }}>
          <div style={{ padding: 20 }}>
            <Progress.Circle percent={30} strokeColor="#007bff" />
          </div>
          <Panel header="Course 1">
            <p>
              <small>
                A suite of React components, sensible UI design, and a friendly development experience.
              </small>
            </p>
          </Panel>
        </Panel>

        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240, margin: 20 }}>
          <div style={{ padding: 20 }}>
            <Progress.Circle percent={50} strokeColor="#007bff" />
          </div>
          <Panel header="Course 2">
            <p>
              <small>
                A suite of React components, sensible UI design, and a friendly development experience.
              </small>
            </p>
          </Panel>
        </Panel>
      </div>
    </div>
  );
};

export default Enrolled;

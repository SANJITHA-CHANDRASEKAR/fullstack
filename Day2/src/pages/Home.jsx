import CustomNavbar from "../components/customNavbar";
import "../assets/css/home.css"; 
import { Link } from "react-router-dom";
import PageIcon from '@rsuite/icons/Page';

const Home = () => {
  return (
    <div className="container">
      <header>
        <CustomNavbar />
      </header>
      <main>
      <section className="hero">
          <h1>Welcome to   <PageIcon/>LearnMate</h1>
          <h5>Your one-stop solution for managing courses, student inquiries, and doubts.</h5>
        </section>
        <section className="card__wrapper">
          <div className="card">
            <h3>Explore New Courses</h3>
            <p>Discover exciting new courses that cover a wide range of subjects. Stay ahead in your field by enrolling in our latest offerings.</p>
            <Link to={`/viewcourse`}>Browse Courses</Link>
          </div>
         
          <div className="card">
            <h3>Your Course Journey</h3>
            <p>View all the courses you are currently enrolled in. Keep track of your progress, assignments, and upcoming lectures.</p>
            <Link to={`/enrolled`}>View Your Courses</Link>
          </div>
          
          <div className="card">
            <h3>Get Assistance</h3>
            <p>Have questions or need help? Our support team is here for you. View and respond to your inquiries and get the assistance you need.</p>
            <Link to={`/userquery`}>Contact Support</Link>
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default Home;

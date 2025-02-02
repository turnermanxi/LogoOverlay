import './Testpage.css';

const SocialCard = () => {
  return (
    <div className="social-card">
      <h3 className="social-card-title">Full Stack Developer</h3>
      <p className="social-card-text">Accepting all web development and full stack inquiries.</p> 
      <p className="social-card-text">You can also DM me on social media as well!</p>
    </div>
  );
};

const ScheduleCard = () => {
  return (
    <div className="schedule-card">
      <h3 className="schedule-card-title">Schedule</h3>
      <p className="social-card-text">Tuesday - Thursday 7:00pm - 11:00pm</p>
      <p className="social-card-text">Saturday 12:00pm - PASSOUT</p>
      <p className="social-card-text">Sometimes I get busy and thats OKAY</p>
    </div>
  );
}; 

const TestPage = () => {
  return (
    <div className="overlay-container">
      <SocialCard />
      <ScheduleCard />
    </div>
  );
};

export default TestPage;

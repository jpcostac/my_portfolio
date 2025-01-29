import './Hackathon.css';

function Hackathon() {
  return (
    <div className="projects">
        <div className="hackathon01">
            <h3>Hackathon SENAI</h3>
            <img src="images/img_hackathon.jpg" alt="Hackathon SENAI"/>
            <p>This project was developed during a Hackathon at SENAI, as part of a group effort,<br/> 
              simulating an activity management system for a fictional school.<br/> 
              The application allows teachers to create, edit, and delete classes and activities directly from a MySQL database.<br/> 
              Additionally, it features login authentication for teachers and a password recovery function,<br/> 
              ensuring security and accessibility.<br/> 
              The project was developed using HTML, CSS, JavaScript, and MySQL.</p>

            <a href="https://github.com/jpcostac/frontend_Hackathon">View Project on GitHub</a>
        </div>
    </div>
  );
}

export default Hackathon;
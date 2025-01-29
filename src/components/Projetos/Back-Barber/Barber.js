import './Barber.css';

function Barber() {
    return(
        <div className="projects">
            <div class="barbearia">
            <h3>Back-End for Barber Shop</h3>
            <img src="images/img_backbarber.jpg" alt="Back-End for Barber Shop"/>
            <p>This project is a management system for a barbershop, developed with a Node.js back-end and a MySQL database.<br/> 
                The application allows clients to schedule appointments, manage customer data, and view available services.<br/> 
                It also features functionalities such as service booking, appointment reminders, and tracking client history.<br/> 
                The main focus of this project was to build a scalable and efficient solution to address the operational needs of a barbershop business,<br/> 
                ensuring smooth management and providing a high-quality user experience.<br/> 
                The back-end system ensures secure data handling and smooth integration with other business processes.</p>

            <a href="https://github.com/jpcostac/back_barber">View Project on GitHub</a>
            </div>
        </div>
    )
}

export default Barber;
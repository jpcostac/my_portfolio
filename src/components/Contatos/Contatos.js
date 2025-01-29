import './Contatos.css';

function Contatos() {
    return(
        <section id="contact">
            <h2>Contact</h2>
            <p>Get in touch with me through the links below:</p>
            <div className="icons">
                <a href="https://linkedin.com/in/joaopedrocostacavalcante/" title="LinkedIn">
                    <img src="images/linkedin.png" alt="LinkedIn" className="icon"/>
                </a>
                <a href="https://wa.me/5585997308423" title="WhatsApp">
                    <img src="images/social.png" alt="WhatsApp" className="icon"/>
                </a>
                <a href="https://github.com/jpcostac" title="GitHub">
                    <img src="images/github.png" alt="GitHub" className="icon"/>
                </a>
            </div>
        </section>
    )
}

export default Contatos;

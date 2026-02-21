import '../styles/Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">I'd love to hear from you! Feel free to reach out.</p>

            <div className="contact-details">
                <p><strong>Email:</strong> <a href="mailto:bhumikap754@gmail.com">bhumikap754@gmail.com</a></p>
                <p><strong>Phone:</strong> +91 8433035889</p>
                <p><strong>Location:</strong> Haldwani, Uttarakhand, India</p>
            </div>

            <div className="contact-socials">
                <a href="https://github.com/bhumikap1" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/bhumika-pawar-286024250/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    )
}

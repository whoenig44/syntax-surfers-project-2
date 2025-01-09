import "./footer.css";
import logo from "../assets/smanticsurferimage.jpg"

const Footer: React.FC = () => {

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="column">
                        <h3>Contributors</h3>
                        <ul>
                            <li>Shelia Bradford</li>
                            <li>Amy Griffith</li>
                            <li>William Hoenig</li>
                            <li>Shannon Taylor</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Contact us</h3>
                        <ul>
                            <li><a href="mailto:test@email.com">test@email.com</a></li>
                            <li><a href="tel:+123456789">+123456789</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <a href="https://github.com/whoenig44/syntax-surfers-project-2/tree/landing-page">
                        <img src={logo} alt="Semantic Surfer" />
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; {(new Date().getFullYear())}, All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
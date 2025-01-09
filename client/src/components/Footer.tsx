import "./footer.css";
import "../assets/smanticsurferimage.jpg"

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
                        <img src="../assets/smanticsurferimage.jpg" alt="Semantic Surfer" />
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
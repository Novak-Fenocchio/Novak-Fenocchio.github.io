import "../../assets/sass/contact.scss";
import GithubProfile from "../../assets/images/github.png";

function ContactScreen() {
  return (
    <div className="contact-screen" id="contact">
      <h2 className="title">Contact</h2>
      <div className="container">
        <div className="socials">
          <div className="social email">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" />
            <p className="subtitle">fenomartin6@gmail.com</p>
          </div>
          <div className="social github">
            <img src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" />
            <p className="subtitle">
              <a href="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png">
                GitHub
              </a>
            </p>
          </div>
          <div className="social linkedin">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" />
            <p className="subtitle">
              <a href="https://www.linkedin.com/in/mart%C3%ADn-fenocchio-b507a31b2/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <img src={GithubProfile} />
      </div>
    </div>
  );
}

export default ContactScreen;

import '../styles/Certifications.css';
export default function Certifications() {
    return(
        <div className="certifications-container">
            <h1 className="certifications-title">Certifications</h1>
            <div className="certifications-list">
                <div className="certification-item">
                    <h2 className="certification-name">Exam Prep: AWS Certified solutions architect - Associate</h2>
                    <p className="certification-issuer">Coursera</p>
                    <p className="certification-date">Issued: March 6,2023</p>
                    <a className="certification-link" href="https://www.coursera.org/account/accomplishments/verify/J6N6DCD4D3J8" target="_blank" rel="noopener noreferrer">View Credential</a>
                </div>
                <div className="certification-item">
                    <h2 className="certification-name">AWS Certified solutions architect: Associate</h2>
                    <p className="certification-issuer">Amazon Web Services (AWS)</p>
                    <p className="certification-date">Issued: April 24</p>
                    <p className="certification-expiry">Expires: April 27</p>
                    <p className='certification-id'>Certification ID: 65aa055969904659a7813efcfeb44505</p>
                    <a className="certification-link" href="https://cp.certmetrics.com/amazon/en/public/verify/credential/" target="_blank" rel="noopener noreferrer">View Credential</a>
                </div>
                <div className="certification-item">
                    <h2 className="certification-name">Cloud Orerations On AWS</h2>
                    <p className="certification-issuer">Coursera</p>
                    <p className="certification-date">Issued: Jan 25,2023</p>
                    <a className="certification-link" href="https://www.coursera.org/account/accomplishments/verify/UE6CHX7BU8CJ" target="_blank" rel="noopener noreferrer">View Credential</a>
                </div>
                <div className="certification-item">
                    <h2 className="certification-name">Amazon S3 Basics</h2>
                    <p className="certification-issuer">Coursera</p>
                    <p className="certification-date">Issued: Feb 3, 2024</p>
                    <a className="certification-link" href="https://www.coursera.org/account/accomplishments/verify/4YCKS97BZP85" target="_blank" rel="noopener noreferrer">View Credential</a>
                </div>
                <div className="certification-item">
                    <h2 className="certification-name"> Introduction to CSS in Web Development</h2>
                    <p className="certification-issuer">Coursera</p>
                    <p className="certification-date">Issued: Feb 2024</p>
                    <a className="certification-link" href="https://www.coursera.org/account/accomplishments/verify/DW29VKTZHJ46"target="_blank" rel="noopener noreferrer">View Credential</a>
                </div>
            </div>
        </div>
    )
}
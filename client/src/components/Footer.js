import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <footer className="text-center text-lg-start bg-dark text-muted sticky-bottom">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer sticky-bottom page-footer mt-5"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on our social networks</span>
                    </div>
                    <div>
                        
                        <a href="https://www.facebook.com/TheRVCJMedia/" target="_blank" className="me-4 ">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/DM_Jhansi" target="_blank" className="me-4 ">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/sandy_chaudhary_._" target="_blank" className="me-4 ">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yashraj-mishra31/" target="_blank" className="me-4 ">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 ">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-4 col-lg-5 col-xl-4 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>DOCUMENT SUBMISSION SYSTEM
                                </h6>

                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Help
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">How it works</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none">Terms and Conditions</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset text-decoration-none ">Support Policy</a>

                                </p>
                            </div>
                            
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Daddy Town </p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>

                                </p>
                                <p><i className="fas fa-phone me-3"></i>8009416262</p>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: "rgba(100, 500, 500,2.05)" }}>
                    ©2024 <b>Copyright</b> : 
                    <a className="text-reset text-decoration-none fw-bold" href=""> Daddy's</a>
                </div>
            </footer>
        </div>




    )
}

export default Footer
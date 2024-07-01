import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';





function AdminLogin() {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);


    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('new');
        if (auth) {
            navigate('/UserProfile');
        }
        const auth2 = localStorage.getItem('admin');
        if (auth2) {
            navigate('/AdminProfile');
        }

    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        axios.post("http://localhost:3001/loginadmin", {
            username: formValues.username,
            password: formValues.password,

        }).then((response) => {
            console.log(response)
            if (response.data.status === "success") {
                swal("Congrats! " + formValues.username, "logged in Successfully ", "success");
                localStorage.setItem("admin", JSON.stringify(response.data.result[0]));
                navigate('/AdminProfile');



            }
            else if (response.data === "plz fill the data properly") {
                swal("Hey! Fill all the details properly", "", "error")

            }
            else {
                console.log(response);
                swal('wrong Username/password', "", "error");
            }

        });

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);

        }
    }, [formErrors]);
    const validate = (values) => {

        const errors = {};

        if (!values.username) {
            errors.username = "Username is required";
        }

        if (!values.password) {
            errors.password = "Password is required";
        }

        return errors;

    };
    return (
        <div className="">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <script src="sweetalert.min.js"></script>

            <section style={{backgroundColor:"#c5aa6a"}}className="text-center m-2 mt-2 p-2 d-flex aligns-items-center justify-content-md-center ">

                <h4 className="p-2 mt-5"style={{color:"#741b47"}}>WELCOME TO ADMIN LOGIN PAGE</h4>

            </section>
            <div class="container mt-5 ">
                <div className="row aligns-items-center justify-content-center">
                    <div className="col-sm-4">
                        <form onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' className='required-field'/>
                                <input
                                    className='form-control text-center'
                                    type="text"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={formValues.username}
                                    onChange={handleChange} />
                            </div>
                            <p className='text-center alert-danger'>{formErrors.username}</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="lock me-3" size='lg' className='required-field'/>
                                <input
                                    className='form-control text-center'
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={formValues.password}
                                    onChange={handleChange} />
                            </div>
                            <p className='text-center justify-content alert-danger'>{formErrors.password}</p>


                            <div className='mb-3 m-2 text-center form-group'>
                                <button className="btn text-center"style={{backgroundColor:"#741b47",color:"#c5aa6a",fontWeight: 'bold'}}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>




            </div >

        </div>





    )
}

export default AdminLogin;
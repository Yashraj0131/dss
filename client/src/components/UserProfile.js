import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import pg2 from './pg2.avif';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBIcon, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import image16 from './image16.avif';
import back4 from './back4.jpeg';
import swal from '@sweetalert/with-react';
const UserProfile = () => {
    const auth = localStorage.getItem('new');
    const handleEdit = async () => {

        swal({
            text: "Edit is in progress...",
            buttons: {
              cancel: "Close",
            },
            content: (
              <div>
                <svg class="circle-svg" height="200" width="200">
                  <circle cx="100" cy="100" r="50"></circle>
                </svg>
              </div>
            )
          });
    }
    const src = `http://localhost:3001/public/upload/${JSON.parse(auth).file}`;
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('new');
        if (auth) {
            navigate('/UserProfile');
        }

    }, []);
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

            <section style={{ backgroundColor: "#c5aa6a" }} className="text-center m-2 mt-2 p-2 d-flex aligns-items-center justify-content-md-center ">
                <h4 style={{ color: "#741b47" }} className="p-2 mt-5">WELCOME TO YOUR PROFILE PAGE</h4>
            </section>

            <div className="vh-100" style={{ backgroundImage: `url(${image16})` }}>
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol md="9" lg="7" xl="5" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">
                                    <div className="d-flex text-black">
                                        <div className="flex-shrink-0">
                                            <MDBCardImage
                                                style={{ width: '180px', borderRadius: '10px' }}
                                                src={src}
                                                alt='Generic placeholder image'
                                                fluid />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <MDBCardTitle>{JSON.parse(auth).firstName}</MDBCardTitle>
                                            <MDBCardTitle>{JSON.parse(auth).lastName}</MDBCardTitle>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item >{JSON.parse(auth).gender}</ListGroup.Item>
                                                <ListGroup.Item >{JSON.parse(auth).email}</ListGroup.Item>
                                            </ListGroup>
                                            <div className="text-center">
                                                <MDBIcon fas icon="pen me-1" />
                                                <button onClick={handleEdit} className="flex-grow-1 p-2 bg-blue-200 rounded-xl">Edit</button>

                                            </div>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    )
}





export default UserProfile;

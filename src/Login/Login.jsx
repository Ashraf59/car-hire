import React, { useState } from 'react'
import {Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../../src/Style/login.css'
import login from '../assets/login/login.svg'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config'
import { toast } from 'react-hot-toast'

const auth = getAuth(app);

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('Successfully login');
            navigate('/')
        })
        .catch(error=> {
            console.error(error)
            toast.error('Your login info is wrong')
        })

       

    }
    const handleEmailBlur = event => {
        
        const email = event.target.value;
        setUserEmail(email);
        console.log(email)
    }
    const handleForgetPassword = () => {
        if(!userEmail){
            toast.error('Please enter your email address')
        }
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
            toast.success('Password reset email sent, please check your email')
        })
        .catch(error => {
            console.error(error);
        })
    }
  return (
    <Helmet title='Login'>
        <CommonSection title='Login'/>
        <section>
            <Container>
                <Row className='d-flex align-items-center justify-content-between ms-5'>
                    <Col lg='6' md='6' className='login__form-style p-5'>
                    <h6 className="fw-bold fs-2 text-center">Login Now! </h6>
                    <Form onSubmit={handleLogin}>
                       
                        <FormGroup className='register__form'>
                            <Label>Email</Label>
                            <Input onBlur={handleEmailBlur} placeholder='Your Email' name='email' type='email'/>
                        </FormGroup>
                        <FormGroup className='register__form'>
                            <Label>Password</Label>
                            <Input placeholder='Your Password' name='password' type='password'/>
                        </FormGroup>
                        <button className='btn register__btn' type='submit'>Login</button>
                        
                    </Form>

                  
                    <p className='mt-2 text-center'>New to Car Hire? Please <Link to='/signup'>Register</Link></p>
                    <p className='text-center'>Forget Password? Please<button type="button" onClick={handleForgetPassword} className="btn btn-link reset">Reset</button></p>

                    </Col>

                    <Col lg='6' md='6'>
                        <img src={login} alt="Sign Up" className='img__size' />
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
  )
}

export default Login
import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../../src/Style/signup.css'
import signup from '../assets/signup/signup.svg'
import { Link } from 'react-router-dom'
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { toast } from 'react-hot-toast'

const auth = getAuth(app)

const SignUp = () => {
    const [passwordError, setPasswordError] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        if(!/(?=(.*[a-z]){2,})/.test(password)){
            setPasswordError('Please provide atleast two lowercase')
            return;
        }

        if(!/(?=(.*[A-Z]){2,})/.test(password)){
            setPasswordError('Please provide atleast two upercase')
            return;
        }
        if(!/(?=(.*[0-9]){2,})/.test(password)){
            setPasswordError('Please provide atleast two digits')
            return;
        }
        if(password.length < 6){
            setPasswordError('Please provide atleast six character')
            return;
        }

        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success('Sign Up successful')
            updateUserName(name)
        })
        .catch(error => {
            console.error(error)
            toast.error('Sign Up info is wrong')
            setPasswordError(error.message)
            
        });
        
    }

    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(() => {
            console.log('display name updated')
        })
        .catch(error => console.error(error))
    }

  return (
    <Helmet title='Register'>
        <CommonSection title='Register'/>
        <section>
            <Container>
                <Row className='d-flex align-items-center justify-content-between ms-5'>
                    <Col lg='6' md='6' className='form__style p-5'>
                    <h6 className="fw-bold fs-2 text-center">Register Now! </h6>
                    <Form onSubmit={handleRegister}>
                        <FormGroup className='register__form'>
                            <Label>Name</Label>
                            <Input placeholder='Your Name' name = 'name' type='text'/>
                        </FormGroup>
                        <FormGroup className='register__form'>
                            <Label>Email</Label>
                            <Input placeholder='Your Email' name = 'email' type='email' required/>
                        </FormGroup>
                        <FormGroup className='register__form'>
                            <Label>Password</Label>
                            <Input placeholder='Your Password' name = 'password' type='password' required/>
                        </FormGroup>
                        <FormGroup className='register__form'>
                            <Label>Confirm Password</Label>
                            <Input placeholder='Confirm Your Password' name = 'confirm' type='password'/>
                        </FormGroup>
                        <p className='text-danger'>{passwordError}</p>

                        <button className='btn register__btn' type='submit'>Register</button>
                    </Form>

                   
                    <p className='mt-2 text-center'>Already have an account? Please <Link to='/login'>Login</Link></p>

                    </Col>

                    <Col lg='6' md='6'>
                        <img src={signup} alt="Sign Up" className='img__size' />
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
  )
}

export default SignUp
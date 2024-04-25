import React, { useState, useRef } from 'react';
import Navbar from "../Components/Navbar";
import emailjs from '@emailjs/browser';



const Registration = () => {
    const [name, setName] = useState('');
    const [regNo, setRegNo] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [event, setEvent] = useState('');
    const [errors, setErrors] = useState({});
    const form = useRef();

    const events = [
        { name: "Guitarist" },
        { name: "Drummer" },
        { name: "Vocalist" },
        { name: "Audio Mixer" },
        { name: "Keyboard" },
        { name: "Others" }
    ];

    const generateEventOptions = () => {
        return events.map((event, index) => (
            <option key={index} value={`${event.name}`}>
                {`${event.name}`}
            </option>
        ));
    };

    const validateForm = () => {
        const errors = {};

        // Name validation
        if (!/^[a-zA-Z ]+$/.test(name)) {
            errors.name = "Name should only contain letters and spaces.";
        }

        // Email validation
        if (!email.endsWith("@vitstudent.ac.in")) {
            errors.email = "Email should end with @vitstudent.ac.in.";
        }

        // Registration number validation
        if (!/^\d{2}[A-Z]{3}\d{4}$/.test(regNo)) {
            errors.regNo = "Registration number should be in the format ##$$$####.";
        }


        if (!/^\d{10}$/.test(phone)) {
            errors.phone = "Phone number should be exactly 10 digits.";
        }

        else {

        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form.current)
        if (validateForm()) {
            emailjs
                .sendForm('service_84h3y8s', 'template_o7fylms', form.current, {
                    publicKey: 'iOKTuFLfxKfYdbGko',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <>
            <Navbar />
            <div className="form_container">
                <div className="container">
                    <form id="registrationForm" ref={form} onSubmit={handleSubmit}>
                        <h2>Registration Form</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required />
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="regNo">Register Number:</label>
                            <input type="text" id="regNo" name="regNo" value={regNo} onChange={(e) => setRegNo(e.target.value)} required />
                            {errors.regNo && <p className="error">{errors.regNo}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">VIT Email ID:</label>
                            <input type="email" id="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="event">What do you play?</label>
                            <select id="event" name="message" value={event} onChange={(e) => setEvent(e.target.value)} required>
                                <option value="">Talents</option>
                                {generateEventOptions()}
                            </select>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registration;

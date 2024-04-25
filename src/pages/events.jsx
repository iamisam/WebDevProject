import React, { useState, useRef } from 'react'
import Navbar from "../Components/Navbar";
import EventsCSS from "../Styling/events.module.css"
import emailjs from "@emailjs/browser"

const EventsPage = () => {
    const form = useRef()
    const [events, setEvents] = useState([
        { name: 'Musical Chairs', time: '4:00 PM to 7:30 PM, 4th June - 5th June', price: 'Free' },
        { name: 'Rock Band Competition', time: '5:00 PM to 8:00 PM, 10th June - 12th June', price: 'Rs. 1200' },
        { name: 'Acoustic Night', time: '5:00 PM to 8:00 PM, 10th June - 12th June', price: 'Rs. 750' },
        { name: 'Jazz Festival', time: '5:00 PM to 8:00 PM, 10th June - 12th June', price: 'Free' },
        { name: 'Battle of Bands', time: '5:00 PM to 8:00 PM, 10th June - 12th June', price: 'Rs. 1000' },
    ]);

    const [showModal, setShowModal] = useState(false);
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewEvent((prevEvent) => ({
    //         ...prevEvent,
    //         [name]: value,
    //     }));
    // };

    const handleRegisterEvent = (e) => {
        setEvents((prevEvents) => [...prevEvents]);
        e.preventDefault();
        console.log(form.current)

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
        setShowModal(false);
    };

    return (
        <>
            <Navbar />
            <div className={EventsCSS.eventscontainer}>
                <div className="events-header">
                    <h1>Events</h1>
                    <div className={EventsCSS.underline}>____________________________________</div>
                </div>
                <br />
                <br />
                <div className="events-list">
                    <div className={EventsCSS.eventcolumn}>
                        {events.map((event, index) => (
                            <table>
                                <br />
                                <tr>
                                    <div key={index} className={EventsCSS.event}>
                                        <td>
                                            <div className={EventsCSS.left}>
                                                <h2>{event.name}</h2>
                                                <p>{event.time}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={EventsCSS.mid}>
                                                <h4>{event.price === 'Free' ? 'Open' : event.price}</h4>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={EventsCSS.right}>
                                                <button className={EventsCSS.regbutton} onClick={() => setShowModal(true)}>Register</button>
                                            </div>
                                        </td>
                                    </div>
                                </tr>
                                <br />
                                <hr />
                            </table>
                        ))}
                    </div>
                </div>

                <button className={EventsCSS.regbutton} onClick={() => setShowModal(true)}>Register</button>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <br />
                            <span className="close" onClick={() => setShowModal(false)} style={{ backgroundColor: 'aliceblue', color: 'red', fontSize: '30px', cursor: 'pointer' , borderRadius: '20%'}}>&times;</span>
                            <h2>Enter your details with the email and name.</h2>
                            <form ref={form} onSubmit={handleRegisterEvent}>
                                <input type="text" name="message" placeholder="Event Name" />
                                <input type="text" name="user_name" placeholder="Name" />
                                <input type="text" name="user_email" placeholder="Email" />
                                <button onClick={handleRegisterEvent}>Register</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EventsPage;
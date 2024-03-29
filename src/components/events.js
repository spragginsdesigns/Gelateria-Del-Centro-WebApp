import React, { useState } from 'react';
import './events.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Events = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const name = data.get('name');
        const email = data.get('email');
        const date = data.get('date');
        const message = data.get('message');
        console.log(name, email, date, message);
    }
    return (
        <>
            <div id="private-events" className="title">
                <h1>Private Events</h1>
            </div>
            <div className="events-container">
                <div className="grid">
                    <section className="overview" style={{ gridArea: 'overview' }}>
                        <h2>Overview of Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna sit amet nunc ultricies ultricies. Nullam at ligula vestibulum, ultricies tellus nec, vehicula nunc. Integer vestibulum, nunc nec vehicula fermentum, nulla turpis fermentum odio, nec dictum odio ex ac mi. Integer et.</p>
                    </section>
                    <section className="gallery" style={{ gridArea: 'gallery' }}>
                        <h2>Image Gallery</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna sit amet nunc ultricies ultricies. Nullam at ligula vestibulum, ultricies tellus nec, vehicula nunc. Integer vestibulum, nunc nec vehicula fermentum, nulla turpis fermentum odio, nec dictum odio ex ac mi. Integer et.</p>
                    </section>
                    <section className="benefits" style={{ gridArea: 'benefits' }}>
                        <h2>Benefits</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna sit amet nunc ultricies ultricies. Nullam at ligula vestibulum, ultricies tellus nec, vehicula nunc. Integer vestibulum, nunc nec vehicula fermentum, nulla turpis fermentum odio, nec dictum odio ex ac mi. Integer et.</p>
                    </section>
                    <section className="inquiry-form" style={{ gridArea: 'inquiry' }}>
                        <h2>Inquiry Form</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>Name:</span>
                                <input type="text" name="name" />
                            </label>
                            <label>
                                <span>Email:</span>
                                <input type="email" name="email" />
                            </label>
                            <label>
                                <span>Date:</span>
                                <DatePicker name="date" selected={startDate} onChange={date => setStartDate(date)} />
                            </label>
                            {/* Label for a message with a limit of 1000 characters */}
                            <label>
                                <span>Message:</span>
                                <textarea name="message" maxLength="1000" />
                            </label>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Events;
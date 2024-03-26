import React, { useState } from 'react';
import './events.css';
import DatePicker from 'react-datepicker';

const Events = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <div className="title">
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
                        <form>
                            <label>
                                Name:
                                <input type="text" name="name" />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Date:
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </label>
                            {/* Add the rest of your form fields here */}
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Events;
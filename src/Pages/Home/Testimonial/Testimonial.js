import './Testimonial.css';

import React from 'react';

const Testimonial = () => {
    return (
        <div className='cards'>
            <div className="container">
                <h2 className='love text-center text-light'>CLIENTS LOVE</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                    alt="" className="profile" />
                                    <div className="pt-3 text-uppercase name">
                                        Robert Garrison
                                    </div>
                                    <div className="designation">CLIENT</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                They cleaned up after they were done and left my shop cleaner than what it was before they started, and finished sooner than expected! You just don’t run across that type of service much anymore in today’s world. I just wanted to pass along my thanks.
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                    alt="" className="profile" />
                                    <div className="pt-3 text-uppercase name">
                                        Jeffery Kennan
                                    </div>
                                    <div className="designation">CLIENT</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                    Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                                    man, this thing is getting better and better as I learn more about it.
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt="" className="profile" />
                                    <div className="pt-3 text-uppercase name">
                                        Issac Maxwell
                                    </div>
                                    <div className="designation">CLIENT</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                The installation crew is hard working and reliable. They start on time and are out as quick as possible. The sales staff is ready to go one step further. Even when one sales person had a baby and was out of the office, they were more than helpful.
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;
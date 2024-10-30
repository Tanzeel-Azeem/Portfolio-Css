import React from 'react'

const Contact = () => {
    return (
        <div id='contact-btn'>
            <div id='contact'>
                <main className='contact-sec'>
                    <div className='contact'>
                        <h1>Contact <span>.</span></h1>
                    </div>
                    <div className='contact-text '>
                        <p>Drop me an <span>Email</span> , give me a <span>call</span> or send me <span>message</span> using the form below <span><b>.</b></span></p>
                        <br /><b><span>Email </span> :</b><a href="mailto:azeemtanzeel39@gmail.com">azeemtanzeel39@gmail.com</a><br />
                        <b> <span>Contact Number </span> :</b><a href="tel:03102162237">03102162237</a><br /><br />
                        <div className='forms'>
                            <form action="">
                                <legend>Name</legend>
                                <input type="text" required width={100} />
                            </form><br />
                            <form action="">
                                <legend>Email</legend>
                                <input type='email' required />
                            </form><br />
                            <form action="">
                                <legend>Message</legend>
                                <textarea rows={8} cols={32} placeholder='Write your Messages'></textarea>

                            </form><br />
                            <form action="">
                                <input className='button' type="submit" value='Send ' />
                            </form>


                        </div>

                    </div>
                </main>

            </div>

        </div>


    )
}

export default Contact
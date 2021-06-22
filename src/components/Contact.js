const Contact = () => {
    return ( 
        <section>
            <div className="flex-article">
            <article className="experience">
                <h4>Contact Us</h4>
                <h1>Experience 
                    <span>the 1920's</span> 
                    <span>Prohibition</span>
                </h1>
                <p>Want to get in touch? Drop us a dime or shoot us an email using the form below.</p>
            </article>
            <article className="pic-bar"></article>
            </div>
            <article className="map">
                <h1>132 9TH AVENUE NEW YORK</h1>
            </article>
            <div className="contact-input">
                <article>
                <h3>GET IN TOUCH</h3>
                <p>132 9th Avenue <br />
                    New York, NY 100 11 <br />
                    646-559-1671 <br />
                    info@btgnyc.com
                </p>
                <table>
                        <tr>
                            <th>Hours of Operation</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>8am — 4pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday - Friday</td>
                            <td>8am — 10pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>9am — 10pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>9am — 4pm</td>
                        </tr>
                    </table>
                </article>
                <form>
                    <input type="text" name="name" id="name" placeholder="Name" /> <br />
                    <input type="email" name="mail" id="mail" placeholder="Email Address" /> <br />
                    <input type="tel" name="mobile" id="mobile" placeholder="Mobile" placeholder="Mobile" /> <br />
                    <textarea name="message" id="message" cols="58" rows="7" placeholder="Message"></textarea> <br />
                    <input type="button" value="Submit" />
                </form>
            </div>
        </section>
        
        
     );
}
 
export default Contact;
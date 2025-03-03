export default function ContactMe() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form["first-name"].value;
    const lastName = form["last-name"].value;
    const email = form["email"].value;
    const phone = form["phone-number"].value;
    const message = form["message"].value;

    const subject = encodeURIComponent("Connect request from portfolio website");
    const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );

    window.location.href = `mailto:shashankchandgude@gmail.com?subject=${subject}&body=${body}`;
  };
    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
          </p>
        </div>
        <form className="contact--form--container" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
          </div>
        </form>
      </section>
    );
  }
  
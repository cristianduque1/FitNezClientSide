const ContactUsPage = () => {
  return (
    <main>
      <section className="hero hero--contact">
        <h1 className="hero__title">Contact Us</h1>
        <p className="hero__subtitle">
          Got a question or feedback? We'd love to hear from you.
        </p>
      </section>

      <section className="contact-form">
        <form action="#" method="POST">
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required></input>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
};

export default ContactUsPage;

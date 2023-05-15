const ContactUsPage = () => {
  return (
    <main>
      <section class="hero">
        <h1>Contact Us</h1>
        <p>Got a question or feedback? We'd love to hear from you.</p>
      </section>

      <section class="contact-form">
        <form action="#" method="POST">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required></input>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div>
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

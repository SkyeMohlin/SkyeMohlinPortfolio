import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <input
        className="name-input"
        type="text"
        name="contact-name"
        id=""
        placeholder="Name"
      />
      <input
        className="email-input"
        type="email"
        name="contact-email"
        id=""
        placeholder="Email"
      />
      <textarea
        className="message-input"
        name="contact-message"
        id=""
      ></textarea>
    </div>
  );
};

export default ContactForm;

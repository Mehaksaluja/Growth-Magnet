import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96c827f7-9c36-42ef-b7f7-97e650f54491");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out to us for any inquiries, collaborations, or
          assistance! Whether you need expert LinkedIn and Instagram marketing,
          high-quality content creation, or professional website development, we
          are here to help. Our team is dedicated to providing tailored
          solutions that meet your business needs and drive real results. Don't
          hesitate to contact us for a consultation or any questions—you can
          connect with us via email, phone, or social media. We look forward to
          working with you and helping your brand grow! 🚀✨
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            default@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 9999993293
          </li>
          <li>
            <img src={location_icon} alt="" />
            Ghost House, Haryana, India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
export default Contact;

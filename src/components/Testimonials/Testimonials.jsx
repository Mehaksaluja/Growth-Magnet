import "./Testimonials.css";
import { useRef } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Priya Verma</h3>
                  <span>Mumbai, India</span>
                </div>
              </div>
              <p>
                This team transformed my LinkedIn presence! Their expert
                marketing strategies boosted my visibility, engagement, and
                high-quality leads. In just a few months, I saw a significant
                rise in inbound inquiries. Highly recommend their services!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rahul Sharma</h3>
                  <span>Delhi, India</span>
                </div>
              </div>
              <p>
                This team made Instagram growth effortless! Their content
                strategy, profile optimization, and targeted ads boosted my
                reach, engagement, and followers. Now, my brand stands
                out—highly recommend their expertise!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Ankita Mehta</h3>
                  <span>Bangalore, India</span>
                </div>
              </div>
              <p>
                This team revolutionized my content strategy! Their research,
                creativity, and brand alignment attracted the right audience and
                boosted my credibility. Every piece was engaging and
                impactful—highly recommend them!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sneha Kapoor</h3>
                  <span>Pune, India</span>
                </div>
              </div>
              <p>
                This team exceeded my expectations! They built a stunning,
                user-friendly, and SEO-optimized website that boosted my
                business’s online presence. Their expertise made the process
                seamless—highly recommended!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;

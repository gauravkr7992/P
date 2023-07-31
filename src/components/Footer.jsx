import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"../assets/logo2.png"}
          alt="Founder"
        />
        
        <h2>Gaurav Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>
      
      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/@gauravschannel4034" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/gau_rav9525" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/gauravkr7992" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

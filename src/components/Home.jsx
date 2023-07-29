import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight,BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";
const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Gaurav Kumar
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Gamer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:gauravkr7992@gmail.com">Hire Me</a>
            <a href="#work">
              Projects
              <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +<span>100</span>
            </p>
            <span>Client WorldWide</span>
          </article>

          <aside>
          <article>
            <p>
              +<span>500</span>
            </p>
            <span>Projects Done</span>
          </article>
          </aside>

          <article data-special>
            <p>
              +<span>Contact</span>
            </p>
            <span>gauravkr7992@gmail.com</span>
          </article>
        </div>
      </section>
      <section>
          <img src={me} alt="Gaurav"/>
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;

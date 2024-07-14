import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_pnlem3r      template id
// service_p9f1ftt       service id
// XxSYjwhEwgMT083ET     public key

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isloading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_p9f1ftt",
        "template_pnlem3r",
        {
          from_name: form.name,
          to_name: "Prem",
          from_email: form.email,
          to_email: "373premthatikonda@gmail.com",
          message: form.message,
        },
        "XxSYjwhEwgMT083ET"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I'll get to you ASAP.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);

          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubTex}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-12 gap-8"
        >
          <label htmlFor="" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name : </span>
            <input
              type="text"
              name="name"
              autoComplete="falsef"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary borded-none font-medium caret-violet-500"
            />
          </label>
          <label htmlFor="" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email : </span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary borded-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message : </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you have to say?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg outlined-none placeholder:text-secondary borded-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white-100 font-bold shadow-md shadow-primary rounded-xl"
          >
            {" "}
            {isloading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md-h-[550px] h-[35px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import {
  comfortaa,
  exo_2,
  josefin_Sans,
  majorMonoDisplay,
  marcellus,
  oxygen,
} from "../fonts";

function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Let's Connect";

  // ************************************************************
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };
  // ************************************************************

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1, ease: "easeIn" }}
        className="h-full"
      >
        {/************************** CONTAINER **************************/}
        <main className={`text-white text-xl pb-14  ${marcellus.className}`}>
          <div className="form-container">
            {/* // **************** IMG CONATINER **************** */}
            <div className="img-container"></div>

            {/* // **************** TEXT-CONATINER **************** */}
            <div className="text-container py-20 flex justify-center items-center">
              <div className="text-5xl relative">
                <motion.span
                  className="h-[0.5px] inline-block bg-white absolute left-0 -bottom-2 transition-[width] ease duration-300 w-full hover:flex "
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  &nbsp;
                </motion.span>
                {text.split("").map((letter, index) => (
                  <motion.span
                    className={`${marcellus.className}`}
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* // **************** FORM CONATINER **************** */}

            <div className="fields-container">
              <form
                onSubmit={sendEmail}
                action=""
                ref={formRef}
                className="rounded-xl backdrop-blur-[1.5px] mx-10 px-8 py-10 flex flex-col gap-8 border-white border"
              >
                <label htmlFor="">Name: </label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-transparent border-b-2 border-white outline-none px-2 pb-2 opacity-50 focus:opacity-100"
                />
                <label htmlFor="">Email: </label>
                <input
                  type="text"
                  name="user_email"
                  className="bg-transparent border-b-2  border-white outline-none px-2 pb-2 opacity-50 focus:opacity-100"
                />
                <label htmlFor="">Message: </label>
                <textarea
                  name="user_message"
                  id=""
                  rows={6}
                  className="bg-transparent border-b-2  border-white outline-none resize-none opacity-50 focus:opacity-100"
                ></textarea>
                <button
                  className={`bg-black border rounded-full my-10 p-4 border-black hover:border-white text-2xl`}
                >
                  Connect
                </button>

                <div className="flex justify-center items-center flex-col w-full">
                  {success && (
                    <span className="text-green-600 font-semibold flex justify-center items-center flex-col">
                      <p>Message sent successfully</p>
                      <p className="text-center">
                        Now seat back and Relax. We will reach you soon !
                      </p>
                    </span>
                  )}
                  {error && (
                    <span className="text-red-600 font-semibold">
                      Something Went wrong!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}

export default ContactPage;

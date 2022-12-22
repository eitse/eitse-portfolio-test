import { motion } from "framer-motion";
import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid/";
import { useForm } from "react-hook-form";

type Props = {};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    window.location.href = `mailto:ewumiitse@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}, ${data.message} (${data.email}) `;

    // window.location.href = `mailto:ewumiitse@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello`;
    // window.location.href = "mailto:ewumiitse@gmail";
    console.log("it worked");
  });

  return (
    <motion.div
      id="contactUs"
      initial={{
        opacity: 0,
      }}
      //use ViewPoint to animate only once but whileInView to repetitively animate
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className="h-screen mx-auto max-w-full z-0 flex flex-col relative justify-center items-center text-center md:text-left "
    >
      <h3 className="absolute top-20  uppercase font-[600] tracking-[15px] text-[gray] text-4xl text-center">
        Contact
      </h3>

      <div className=" w-full mt-20 flex flex-col justify-center items-center">
        <div className=" xs:w-[100%] w-[80%] flex flex-col items-center md:mx-2 xs:space-y-2">
          <h4 className="mt-8 md:mt-0  xs:text-sm text-lg md:text-xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="underline docoration-[#F7AB0A]">Lets talk.</span>
          </h4>

          <div className=" flex justify-between w-[90%] m-2">
            <div className="flex flex-col justify-center items-center">
              <PhoneIcon className="animate-pulse h-4 w-4 text-[#F7AB0A]" />
              <span className="text-[9px] md:text-lg tracking-wider">
                +2347063170244
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <EnvelopeIcon className="animate-pulse h-4 w-4 text-[#F7AB0A]" />
              <span className="text-[9px] md:text-lg tracking-wider ">
                ewumiitse@gmail.com
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MapPinIcon className="xs:mr-6 mr-3 md:mr-0 animate-pulse h-4 w-4 text-[#F7AB0A]" />
              <span className="text-[9px] md:text-lg tracking-wider">
                2 Alfred Yesin Street Ubeji, <br /> Egbokodo, Warri.
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="  mt-4 md:mt-0 flex flex-col  w-[80%]  space-y-2  md:w-fit mx-auto"
        >
          <div className=" h-10 md:h-12   flex justify-center space-x-2 ">
            <input
              required
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              required
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            required
            {...register("subject")}
            placeholder="Subject"
            className="contactInput h-10 md:h-12"
            type="text"
          />
          <textarea
            required
            {...register("message")}
            placeholder="Message"
            className="contactInput max-h-40"
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB0A] flex justify-center items-center h-10 md:h-12 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;

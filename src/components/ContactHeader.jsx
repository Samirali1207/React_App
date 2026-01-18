import React from 'react';

const ContactHeader = () => {
  const h1 = "We Love to hear";
  const p =
    "If you have any queries on our product or services, feel free to contact us or drop your info in the form below. Our team will get in touch with you shortly!";

  return (
    <section className="w-full bg-[#f2f1ec] flex flex-col items-center justify-center py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 gap-4">
      
      <button
        style={{ background: "rgb(205, 166 , 85)" }}
        className="text-xs sm:text-sm md:text-base px-4 py-1 font-medium rounded-xl"
      >
        CONTACT US
      </button>

      <h1 className="text-blue-950 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-snug">
        {h1}{" "}
        <span
          style={{
            textDecoration: "underline overline",
            color: "rgb(205, 166 , 85)",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          From You
        </span>
      </h1>

      <p className="text-gray-600 text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-full sm:max-w-xl md:max-w-2xl px-2">
        {p}
      </p>
    </section>
  );
};

export default ContactHeader;

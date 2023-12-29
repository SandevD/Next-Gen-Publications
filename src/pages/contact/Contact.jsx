import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage";
import ContactForm from "../../components/contact/ContactForm";
import ContactGrid from "../../components/contact/ContactGrid";
import ContactHeader from "../../components/contact/ContactHeader";

const Contact = () => {
  return (
    <AnimatedPage>
      <div className="py-12 lg:py-20">
        <ContactHeader />
        <ContactGrid />
        <ContactForm />
      </div>
    </AnimatedPage>
  );
};

export default Contact;

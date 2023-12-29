import React, { useEffect, useState } from "react";
import AnimatedPage from "./../../components/AnimatedPage";
import Business from "../../components/about/Business";
import Mission from "../../components/about/Mission";
import axios from "axios";

const About = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const res = await axios.get(window.host + `/api/general-info`);
    setInfo(res.data);
  };
  return (
    <AnimatedPage>
      <div className="">
        <Business data={info} />
        <Mission data={info} />
      </div>
    </AnimatedPage>
  );
};

export default About;

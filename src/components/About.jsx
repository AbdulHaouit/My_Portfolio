import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="about w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>

        <p className="text-xl mt-5">
        I received my BSc 2:1 Honours Degree in Computer Science & Software Engineering from the National University of Ireland Maynooth, as well as an 82% on my Final Year Project.
         I'm excited to learn new technologies and to develop my soft and technical abilities.
        </p>

        <br />

        <p className="text-xl">
        I've always had a passion for technology and how it worked. Growing up, I was always interested by the complex way computers operated and how they could be applied to solve issues encountered in daily life. Working with the internet and the web/mobile is something I'm particularly interested in. 
        I am constantly intrigued by the ever-changing landscape of the online world and how it can be leveraged to create innovative solutions. 
        I have experience using React to develop web/mobile applications, and I find the process of creating dynamic and interactive interfaces to be both challenging and rewarding.<br /> <br />
        In my pursuit of knowledge and expertise in the field, I discovered my aptitude for algorithms and improved my problem-solving skills. I am driven by a desire to solve problems and achieve the goals I set for myself.
        Outside of my academic pursuits, I love exploring new cultures and traveling with friends. <br/> <br/>
        Over the years, I have visited more than 10 different countries, each with its own unique experiences and memories. Additionally, I have a deep love for football and staying active. Whether it's joining a gym or taking my dog for a walk, I always find a way to keep myself active and engaged.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;

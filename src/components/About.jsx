import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
            Hello! I'm Dharun, a passionate and versatile developer with expertise in web development and Android app development. Over the years, I've honed my skills in creating dynamic and user-friendly web applications and building engaging mobile experiences on the Android platform.
            </p>
            
            <br/>
            <p className="text-xl mt-20">
            In both web and Android development, I believe in the power of collaboration and open communication. Understanding clients' needs and user requirements is essential to delivering successful projects. I am committed to providing high-quality work, meeting deadlines, and exceeding expectations. My dedication to continuous learning and improving my skills drives me to tackle new challenges and innovate with each project I undertake.
Feel free to explore my portfolio and the projects I've worked on. If you have a project in mind or want to discuss how I can contribute to your development needs, don't hesitate to get in touch. I'm excited to hear about your ideas and bring them to life!

Thank you for visiting, and I look forward to connecting with you!
            </p>
      </div>
    </div>
  );
};
export default About
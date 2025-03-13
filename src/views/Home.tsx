// import StyledButton from "../components/button/StyledButton";
import Hero from "../sections/Home/Hero";
import TechStack from "../sections/Home/TechStack";
import Projects from "../sections/Home/Projects";
import Contact from "../sections/Home/Contact";

const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      {/* <div className="text-lg font-semibold text-gray-700">Home</div> */}
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">버튼</button> */}
      {/* <StyledButton>TEST</StyledButton> */}
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;

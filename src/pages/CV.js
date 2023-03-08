import Profile from "../components/cv/Profile";
import Skills from "../components/cv/Skills";
import XP from "../components/cv/XP";

const CV = () => {
  return (
    <>
      <section className="container my-5 d-flex flex-column justify-content-center align-items-center">
        <Profile />
      </section>

      <section className="container d-flex align-items-center">
        <XP />
      </section>

      <section className="container d-flex align-items-center">
        <Skills />
      </section>
    </>
  );
};

export default CV;

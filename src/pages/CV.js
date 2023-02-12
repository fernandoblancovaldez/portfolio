import Profile from "../components/Profile";
import Skills from "../components/Skills";
import XP from "../components/XP";

const CV = () => {
  return (
    <>
      <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
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

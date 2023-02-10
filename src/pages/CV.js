import Profile from "../components/Profile";
import Skills from "../components/Skills";
import XP from "../components/XP";

const CV = () => {
  return (
    <>
      <section>
        <Profile />
      </section>

      <section>
        <XP />
      </section>

      <section>
        <Skills />
      </section>
    </>
  );
};

export default CV;

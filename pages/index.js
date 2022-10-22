import Contact from "../sections/contact/Contact";
import Intro from "../sections/intro/Intro";
import Problems from "../sections/problems/Problems";
import Questions from "../sections/questions/Questions";
import Softwere from "../sections/softwere/Softwere";

export default function Home() {
  return (
    <>
      <Intro />
      <Contact />
      <Problems />
      <Softwere />
      <Questions />
    </>
  );
}

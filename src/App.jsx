import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Hero_img from "./components/heroImg";
import Mission from "./components/missionState";
import Classes from "./components/classes";
import ClassCard from "./components/classCard";
import Testimonials from "./components/testimonials";
import ReviewCard from "./components/reviewCard";
import Footer from "./components/footer";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Hero />
        <Hero_img />
      </div>
      <Mission />
      <Classes />
      <div className="flex flex-wrap justify-center gap-8">
        <ClassCard
          title="Beginner Classes"
          disc="New to yoga? View our Beginner friendly classes!"
          img="src/assets/beginner.jpg"
        />
        <ClassCard
          title="Advanced Classes"
          disc="Familiar with yoga? Grow with our Advance classes!"
          img="src/assets/advanced.jpg"
        />
        <ClassCard
          title="1-on-1 Training"
          disc="Want specialized training? 
          Pick one of our qualified trainers!"
          img="src/assets/training.jpg"
        />
      </div>
      <Testimonials />
      <div className="flex flex-wrap justify-center my-28 gap-3">
        <ReviewCard
          name="Trish A."
          disc="The trainers were so nice and helpful!"
          img="src/assets/review-1.jpg"
        />

        <ReviewCard
          name="Kate S."
          disc="Very easy and beginner friendly"
          img="src/assets/review-3.jpg"
        />
        <ReviewCard
          name="Ken M."
          disc="Such a welcoming community"
          img="src/assets/review-2.jpg"
        />
        <ReviewCard
          name="Mike D."
          disc="10/10, the traienrs motivate me so much!"
          img="src/assets/review-4.jpg"
        />
      </div>
      <div className="bg-footer flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default App;

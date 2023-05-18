import { Link } from "react-router-dom";
const AboutUsPage = () => {
  return (
    <main>
      <section className="hero">
        <h1>
          About{" "}
          <Link className="fit-nezlink" to="/">
            FIT-NEZ
          </Link>
        </h1>
        <p>
          At FIT-NEZ, we believe that fitness is not just a goal to be achieved,
          but a way of life. Our program was founded in 2023 by Cristian D, a
          renowned fitness health coach with a passion for helping others live
          their best lives. Drawing on over 20 years of experience in the
          industry, Cris has developed a revolutionary approach to fitness that
          is designed to be accessible to everyone, regardless of their
          background or fitness level. Our program is rooted in science-backed
          methods and personalized training, with a focus on promoting not just
          physical fitness, but also mental and emotional well-being. Our team
          of dedicated fitness professionals is committed to providing
          personalized attention and support to each member of our program, so
          they can achieve their goals and transform their lives. Whether you're
          looking to lose weight, build muscle, or just improve your overall
          health and wellness, we're here to help you every step of the way.
          Join us today and discover the power of FIT-NEZ for yourself!
        </p>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          Founded in 2023 by Cristian D, a renowned fitness health coach with
          over 20 years of experience in the industry. Born out of a desire to
          create a fitness program that is accessible to everyone, regardless of
          their background or fitness level. Developed through years of research
          and testing, with a focus on science-backed methods and personalized
          training.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p className="mission-p">
          Our mission is to help people of all ages and fitness levels achieve
          their health and fitness goals in a safe and effective way. To promote
          a holistic approach to fitness that includes not just physical
          exercise, but also nutrition, mental health, and overall well-being.
          To create a supportive community that encourages and motivates each
          other to reach their full potential.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>
          Comprised of a diverse group of fitness professionals, including
          personal trainers, nutritionists, and mental health experts.
          Passionate about helping others and dedicated to staying up-to-date on
          the latest research and trends in the fitness industry. Committed to
          providing personalized attention and support to each member of our
          program, so they can achieve their goals and transform their lives.
        </p>
      </section>
    </main>
  );
};

export default AboutUsPage;

import Hero from '../components/Hero/Hero';
import CreateTrip from '../components/CreateTrip/CreateTrip';
import ViewTrips from '../components/ViewTrips/ViewTrips';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Particles from "react-tsparticles";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <Particles
          params={{
            "particles": {
                "number": {
                  "value": 90,
                  "density": {
                      "enable": true,
                      "value_area": 500
                  }
                },
                "color": {
                  "value": "#ffbf69"
                },
                "move": {
                  "enable": true,
                  "direction": "none",
                  "speed": 0.8,
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                },
                "size": {
                  "value": 2
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                }
            },
            "interactivity": {
                "events": {
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "resize": true
                }
            },
            "retina_detect": true
        }} />
      </Section>
      <CreateTrip />
      <ViewTrips />
    </Layout>
  );
};

export default Home;

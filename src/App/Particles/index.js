import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ options }) => {
  const particlesInit = async () => {
    await loadFull(tsParticles);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesBackground;
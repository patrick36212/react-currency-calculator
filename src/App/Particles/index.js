import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesConfig from "./particles-config";

const ParticlesBackground = () => {
  const particlesInit = async () => {
    await loadFull(tsParticles);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;
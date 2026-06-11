import { Metadata } from 'next';
import Landing from "./components/sections/Landing";
import AboutUs from "./components/sections/AboutUs";
import Project from "./components/sections/Project";
import Industries from "./components/sections/Industries";
import Service from "./components/sections/Service";
import Partner from "./components/sections/Partner";
import OurTeam from "./components/sections/OurTeam";

export const metadata: Metadata = {
    title: 'SusaLabs | AI, Software & App Development Company',
    description: 'SusaLabs is a leading AI and software development company offering custom solutions, mobile apps, IoT, blockchain, and scalable tech services.',
};

export default function Home() {
  return (
    <>
      <Landing />
      <AboutUs />
      <Project />
      <Industries />
      <Service />
      <Partner />
      <OurTeam />
    </>
  );
}

import Hero from "@/components/home/Hero";
import EditorialIntro from "@/components/home/EditorialIntro";
import ExperienceJawai from "@/components/home/ExperienceJawai";
import SignatureLeopard from "@/components/home/SignatureLeopard";
import HowWeShape from "@/components/home/HowWeShape";
import StayInJawai from "@/components/home/StayInJawai";
import JawaiWithinRajasthan from "@/components/home/JawaiWithinRajasthan";
import OurStory from "@/components/home/OurStory";
import GuestStories from "@/components/home/GuestStories";
import Journal from "@/components/home/Journal";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialIntro />
      <ExperienceJawai />
      <SignatureLeopard />
      <HowWeShape />
      <StayInJawai />
      <JawaiWithinRajasthan />
      <OurStory />
      <GuestStories />
      <Journal />
      <FinalCTA />
    </>
  );
}

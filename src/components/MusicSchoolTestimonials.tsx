"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "The mixing and mastering classes were transformative. My final product quality has improved tenfold.",
    name: "Marcus Lee",
    title: "Aspiring DJ/Producer",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
  {
    quote:
      "Fantastic instruction and state-of-the-art facilities. Truly the best place to learn the craft of songwriting.",
    name: "Sarah Chen",
    title: "Songwriting Workshop Participant",
  },
  {
    quote:
      "I started with zero experience, and now I'm composing my own tracks. The mentorship was invaluable!",
    name: "David Ramirez",
    title: "Beginner Composer",
  },
  {
    quote:
      "A deeply practical approach to business in the music industry. Highly relevant and immediately applicable.",
    name: "Emily White",
    title: "Music Business Professional",
  },
  {
    quote:
      "Incredible networking opportunities and a supportive community. It truly felt like a family of creators.",
    name: "Nicole Alami",
    title: "Vocal Performance Trainee",
  },
  {
    quote:
      "The instructors are working professionals who bring real-world knowledge. Best decision I made for my career.",
    name: "Ben Carter",
    title: "Filmmaking Score Student",
  },
  {
    quote:
      "From theory to practice, every lesson was meticulously planned and delivered. Exceptional value for money.",
    name: "Olivia Rodriguez",
    title: "Advanced Guitar Player",
  },
  {
    quote:
      "They helped me overcome my creative block and develop a unique artistic voice. A life-changing experience.",
    name: "Jack Evans",
    title: "Creative Development Client",
  },
  {
    quote:
      "Learning about sound design for games was exactly what I needed. The technical depth was perfect.",
    name: "Priya Singh",
    title: "Game Audio Specialist",
  },
];

const MusicSchoolTestimonials = () => {
  return (
    <div className="h-160 w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestimonials;

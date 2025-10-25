import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  const featuredWebnars: any = [
    {
      title: "Introduction to Data Science",
      description:
        "Learn the core concepts, tools, and methodologies of data science and analysis.",
      slug: "introduction-to-data-science",
      isFeatured: true,
    },
    {
      title: "Effective Public Speaking",
      description:
        "Techniques and strategies to overcome fear and deliver compelling presentations.",
      slug: "effective-public-speaking",
      isFeatured: false,
    },
    {
      title: "Modern Web Design Principles",
      description:
        "Explore the latest trends and essential principles for creating user-friendly and aesthetically pleasing websites.",
      slug: "modern-web-design-principles",
      isFeatured: true,
    },
    {
      title: "Financial Planning for Beginners",
      description:
        "Understand the basics of budgeting, saving, and investing to secure your financial future.",
      slug: "financial-planning-for-beginners",
      isFeatured: false,
    },
    {
      title: "Advanced React Hooks",
      description:
        "Go beyond the basics with custom hooks, performance optimization, and complex state management in React.",
      slug: "advanced-react-hooks",
      isFeatured: true,
    },
    {
      title: "The Art of Digital Photography",
      description:
        "A comprehensive guide to camera settings, composition, and post-processing for stunning photos.",
      slug: "the-art-of-digital-photography",
      isFeatured: false,
    },
    {
      title: "Cloud Computing Fundamentals (AWS)",
      description:
        "Get started with Amazon Web Services (AWS) and understand the core concepts of cloud infrastructure.",
      slug: "cloud-computing-fundamentals-aws",
      isFeatured: true,
    },
    {
      title: "Creative Writing Workshop",
      description:
        "Develop your storytelling skills, learn about plot structure, and create memorable characters.",
      slug: "creative-writing-workshop",
      isFeatured: false,
    },
    {
      title: "Project Management with Scrum",
      description:
        "An introductory session on the Scrum framework and its application for agile project delivery.",
      slug: "project-management-with-scrum",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect items={featuredWebnars} />
        </div>

        <div className="mt-10 text-center">
          <Link
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            href={"/"}
          >
            {" "}
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;

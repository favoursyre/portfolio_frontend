///This handles the home page

///Libraries -->
import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero"
import About from "@/components/about/About"
//import Expertise from "@/components/expertise/Expertise"
const Expertise = dynamic(() => import("@/components/expertise/Expertise"), { ssr: false })
import Experience from "@/components/experience/Experience"
//import Project from "@/components/project/Project"
const Project = dynamic(() => import("@/components/project/Project"), { ssr: false })
import Hire from "@/components/hire/Hire"
//import HireModal from "./components/modal/hire/Hire"
//import Testimony from "@/components/testimonial/Testimony"

///Commencing the code

///This function gets all testimonials
// async function getTestimonials() {
//   try {
//     const response = await fetch(
//         `${backend}/testimonies`,
//         {
//           next: {
//             revalidate: 60,
//           },
//         }
//       );
    
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
    
//       const quotes = await response.json();
//       return quotes;
//   } catch (error) {
//       console.log(`Testimony: ${error}`);
//   }
// }

/**
 * @title Homepage
 */
export default async function Home() {
  //const testimonials = shuffleArray(await getTestimonials())
  //console.log('Testimony: ', <Hero />)
 
  return (
    <main className="home_page">
      {/* <Social /> */}
      {/* <HireModal /> */}
      <Hero />
      <About /> 
      <Expertise />
      <Experience />
      <Project />
      <Hire />
      {/* <Testimony testimonial_={testimonials} />  */}
    </main>
  )
}

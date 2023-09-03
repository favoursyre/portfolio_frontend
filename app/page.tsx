///This handles the home page

///Libraries -->
import Hero from "./components/hero/Hero"
// import ProductGrid from "./components/product/productGrid/ProductGrid"
import About from "./components/about/About"
import Expertise from "./components/expertise/Expertise"
import Experience from "./components/experience/Experience"
import Project from "./components/project/Project"
import Hire from "./components/hire/Hire"
//import HireModal from "./components/modal/hire/Hire"
import { backend, shuffleArray } from "./utils/utils"
import Testimony from "./components/testimonial/Testimony"

///This function gets all the products

///This function gets all the expertise
async function getExpertise() {
  console.log("fetching expertise")
  try {
      const response = await fetch(
          `${backend}/expertises`,
          {
            next: {
              revalidate: 60,
            },
          }
        );
      
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
      
        const quotes = await response.json();
        return quotes;
  } catch (error) {
    
      console.log(`Expertise: ${error}`);
  }
}

///This function gets all the projects
async function getProjects() {
  try {
      const response = await fetch(
          `${backend}/projects`,
          {
            next: {
              revalidate: 60,
            },
          }
        );
      
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
      
        const quotes = await response.json();
        return quotes;
  } catch (error) {
      console.log(`Project: ${error}`);
  }
}

///This function gets all testimonials
async function getTestimonials() {
  try {
    const response = await fetch(
        `${backend}/testimonies`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
    
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
    
      const quotes = await response.json();
      return quotes;
  } catch (error) {
      console.log(`Testimony: ${error}`);
  }
}

/**
 * @title Homepage
 */
export default async function Home() {
  const expertise = shuffleArray(await getExpertise())
  const projects = shuffleArray(await getProjects())
  const testimonials = shuffleArray(await getTestimonials())
  //console.log('Testimony: ', <Hero />)
 
  return (
    <main className="home_page">
      {/* <Social /> */}
      {/* <HireModal /> */}
      <Hero />
      <About /> 
      <Expertise expertise_={expertise} />
      <Experience />
      <Project project_={projects} />
      <Hire />
      <Testimony testimonial_={testimonials} /> 
    </main>
  )
}

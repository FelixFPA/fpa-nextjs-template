
import Hero from "../molecules/Hero";
import Controller from "../Controller";

  
const Homepage = () => {
    return (
        <div>
        <Controller></Controller>
 <Hero
          src="/haierhomehero.png"
          alt="Hero image"
          title="SMART HOME COMFORT"
          description="Home heating and cooling that is efficient, climate friendly and connected."
          buttonText="Get a quote"
        /> 
        
        </div>

    );
};

export default Homepage;
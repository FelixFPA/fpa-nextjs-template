
import Hero from "../molecules/Hero";

async function getData() {
    const res = await fetch('http://localhost:1337/api/homepage' )
    res = res.data.attributes

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
console.log(getData())
  
const Homepage = () => {
    return (
        <div>

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
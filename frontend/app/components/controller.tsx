const Controller = () => {
  return (
     <div>{getData()}</div>
    );
  };
  async function getData() {
    const res = await fetch('http://localhost:1337/api/homepage' )
  

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
export default Controller;
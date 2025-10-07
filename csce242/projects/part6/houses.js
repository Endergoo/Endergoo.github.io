const getHouses = async() => 
{
    const url = "";

    try
    {
        const repsonse = await fetch(url);
        return response.json();
    }
    catch(error)
    {
        console.log("BADBADBAD");
    }
   
};

const showHouses = async() =>
{
    const houses = await getHouses();
    console.log(houses);
};

showHouses();
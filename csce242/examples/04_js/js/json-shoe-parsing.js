const getShoes = async() =>
{
    const url = "https://portiaportia.github.io/json/shoes.json";

    try
    {
        const response = await fetch(url);
        return response.json();
    }
    catch(error)
    {
        console.log("you suck");
    }
};

const showShoes = async() =>
{
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe)=>
    {
       const section = document.createElement("section");
       section.classList.add("shoe");

       const h3 = document.createElement("h3");
       section.append(h3);  
       h3.innerHTML = shoe.name;
    
       const ul = document.createElement("ul");
       section.append(ul);

       shoe.reviews.forEach((review) =>
    {
        const li = document.createElement("li")
        li.innerHTML = review;
        ul.append(li);
    })
       shoeListDiv.append(section); 
    });
};

showShoes();
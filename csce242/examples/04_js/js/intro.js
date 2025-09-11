/*
const sayHello = () =>
{
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) =>
{
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked");
};

document.getElementById("happy-button").onclick = () =>
    {
        const pFeel = document.getElementById("p-feeling");
        pFeel.innerHTML = "This is HAPPY";
        pFeel.classList.add("hclicked");
        pFeel.classList.remove("sclicked");
    };

document.getElementById("sad-button").onclick = () =>
    {
        const pFeel = document.getElementById("p-feeling");
        pFeel.innerHTML = "This is SAD";
        pFeel.classList.add("sclicked");
        pFeel.classList.remove("hclicked");
    };

document.getElementById("clear-button").onclick = () =>
    {
        const pFeel = document.getElementById("p-feeling");
        pFeel.innerHTML="";
        pFeel.classList.remvove("sclicked");
        pFeel.classList.remove("hclicked");
    };
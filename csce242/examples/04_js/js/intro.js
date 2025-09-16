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

    document.getElementById("txt-emotion").onkeyup = (event) =>
    {
        const userInput = event.currentTarget.value;
        document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`
        document.getElementById("img-emotion").classList.remove("hidden");
    };

    document.getElementById("btn-mood").onclick = () =>
    {
        const color = document.getElementById("txt-color").value.trim().toLowerCase();
        const p = document.getElementById("color-result");
        p.innerHTML = "";
        const error = document.getElementById("error-color");
        error.innerHTML = "";
        let mood = "";

        if(color == "")
        {
            error.innerHTML = "* blank";
            return;
        }

        if(color == "red")
        {
            mood = "angry";
        }
        else if(color == "blue")
        {
            mood = "sad";
        }

        if(mood == "")
        {
            error.innerHTML = "* Invalid color";
            return;
        }

        p.innerHTML= `You choose ${color}, so you are feeling ${mood}`;
    }

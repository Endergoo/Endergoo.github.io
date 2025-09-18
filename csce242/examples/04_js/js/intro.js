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

    /* counter */
    let counter = 0;
    let counterInterval;
    const countP = document.getElementById("p-count");
    const btnStartCount = document.getElementById("btn-count-start");
    const btnPauseCount = document.getElementById("btn-count-pause");
    const btnResetCount = document.getElementById("btn-count-reset");
    btnPauseCount.disabled = true;

    document.getElementById("btn-count-start").onclick = () =>
    {
        btnStartCount.disabled = true;
        btnPauseCount.disabled = false;

        counterInterval = setInterval(()=>
        {
            counter++;
            countP.innerHTML = counter;
        }, 1000);
    }

    document.getElementById("btn-count-pause").onclick = () =>
    {
        btnStartCount.disabled = false;
        btnPauseCount.disabled = true;
        clearInterval(counterInterval);
    }

    document.getElementById("btn-count-reset").onclick = () =>
    {
        clearInterval();
    }

    /* Donation stuff */
    const goal = 10000;
    document.getElementById("goal-span").innerHTML = goal;

    document.getElementById("btn-donation").onclick = () =>
    {
        const donation = document.getElementById("txt-donations").value;
        const errorSpan = document.getElementById("donation-error");
        const donoMessage = document.getElementById("dono-message");
        errorSpan.innerHTML = "";
        donoMessage.innerHTML = "";

        if(isNaN(donation) || donation <= 0)
        {
            errorSpan.innerHTML = "* Invalid Amount."
            return;
        }

        const donationPercent = donation / goal * 100;

        if(donationPercent >= 100)
        {
            donoMessage.innerHTML = "goal reached";
        }
        else if(donationPercent >= 50)
        {
            donoMessage.innerHTML = "half way there";
        }
        else
        {
            donoMessage.innerHTML = "get going";
        }

        document.querySelector(":root").style.setPropery("--donation-percent",donationPercent + "%");
    }
    

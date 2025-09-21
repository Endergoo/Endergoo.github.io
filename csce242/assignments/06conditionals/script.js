// Switch funtion with the help of W3schools
function showSection(sectionId) 
{
  document.querySelectorAll(".content-section").forEach(sec => 
{
    sec.classList.add("hidden");
});

  document.getElementById(sectionId).classList.remove("hidden");
}

// Plant section
const rangeInput = document.getElementById("daysRange");
const plantMessage = document.getElementById("plantMessage");
const plantImage = document.getElementById("plantImage");

// Used Ai to generate plant images
function updatePlantStatus(days) 
{
  if (days >= 1 && days <= 2) 
  {
    plantMessage.textContent = `It's been ${days} days since watering your plant. Your plant is healthy and happy.`;
    plantImage.src = "images/healthy.png";
  } 
  else if (days >= 3 && days <= 5) 
  {
    plantMessage.textContent = `It's been ${days} days since watering your plant. Your plant needs watering.`;
    plantImage.src = "images/watering.png";
  } 
  else if (days >= 6 && days <= 9) 
  {
    plantMessage.textContent = `It's been ${days} days since watering your plant. Leaves are drooping, water soon.`;
    plantImage.src = "images/drooping.png";
  } 
  else 
  {
    plantMessage.textContent = `It's been ${days} days since watering your plant. Sadly, your plant has dried up.`;
    plantImage.src = "images/dead.jpg";
  }
}

rangeInput.addEventListener("input", () => 
{
  updatePlantStatus(parseInt(rangeInput.value));
});

// Open with default value
updatePlantStatus(parseInt(rangeInput.value));

// Clock with the help of W3schools (didnt implement seconds)
function updateClock() 
{
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("clockTime").textContent = `${hours}:${minutes}`;
}

// Update clock when opened and then every minute
updateClock();
setInterval(updateClock, 60000);

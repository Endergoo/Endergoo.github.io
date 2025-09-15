// JavaScript with the help of W3Schools

const sunnyContent = document.getElementById('sunnyContent');
const lyrics = document.getElementById('lyrics');
const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');
const weatherImage = document.getElementById('weatherImage');

// Used Ai to get a 200 x 200 simple cloud and sunny pictures, also used in the html
const cloudyImage = "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='skyGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2387CEEB;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23191970;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23skyGrad)'/%3E%3Ccircle cx='160' cy='40' r='15' fill='white' opacity='0.8'/%3E%3Ccircle cx='170' cy='50' r='12' fill='white' opacity='0.6'/%3E%3Ccircle cx='150' cy='55' r='10' fill='white' opacity='0.7'/%3E%3Cg transform='translate(30,120)'%3E%3Cellipse cx='60' cy='30' rx='40' ry='25' fill='white' opacity='0.9'/%3E%3Cellipse cx='45' cy='25' rx='25' ry='18' fill='white' opacity='0.8'/%3E%3Cellipse cx='75' cy='35' rx='30' ry='20' fill='white' opacity='0.7'/%3E%3C/g%3E%3Cg transform='translate(0,160)'%3E%3Crect width='200' height='40' fill='%23191970'/%3E%3Ccircle cx='30' cy='10' r='3' fill='white' opacity='0.6'/%3E%3Ccircle cx='80' cy='15' r='2' fill='white' opacity='0.5'/%3E%3Ccircle cx='150' cy='8' r='2.5' fill='white' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E";

const sunnyImage = "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='sunnyGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2387CEEB;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%234169E1;stop-opacity:1' /%3E%3C/linearGradient%3E%3CradialGradient id='sunGrad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFD700;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FFA500;stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='200' height='200' fill='url(%23sunnyGrad)'/%3E%3Ccircle cx='100' cy='80' r='35' fill='url(%23sunGrad)'/%3E%3Cg stroke='%23FFD700' stroke-width='3' fill='none'%3E%3Cline x1='100' y1='20' x2='100' y2='35'/%3E%3Cline x1='100' y1='125' x2='100' y2='140'/%3E%3Cline x1='40' y1='80' x2='55' y2='80'/%3E%3Cline x1='145' y1='80' x2='160' y2='80'/%3E%3Cline x1='58.8' y1='42.4' x2='69.4' y2='53'/%3E%3Cline x1='130.6' y1='107' x2='141.2' y2='117.6'/%3E%3Cline x1='58.8' y1='117.6' x2='69.4' y2='107'/%3E%3Cline x1='130.6' y1='53' x2='141.2' y2='42.4'/%3E%3C/g%3E%3Cg transform='translate(20,150)'%3E%3Cellipse cx='40' cy='20' rx='30' ry='15' fill='white' opacity='0.8'/%3E%3Cellipse cx='25' cy='18' rx='20' ry='12' fill='white' opacity='0.9'/%3E%3Cellipse cx='55' cy='22' rx='25' ry='13' fill='white' opacity='0.7'/%3E%3C/g%3E%3Cg transform='translate(120,160)'%3E%3Cellipse cx='30' cy='15' rx='25' ry='12' fill='white' opacity='0.8'/%3E%3Cellipse cx='18' cy='13' rx='15' ry='8' fill='white' opacity='0.9'/%3E%3Cellipse cx='42' cy='17' rx='20' ry='10' fill='white' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E";

// Arrow function for lyrics
const toggleLyrics = () => 
{
    lyrics.classList.toggle('show');
    const hint = sunnyContent.querySelector('.click-hint');
    hint.style.display = lyrics.classList.contains('show') ? 'none' : 'block';
};

// Arrow function color change
const handleColorChange = () => 
{
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.textContent = `Selected Color: ${selectedColor.toUpperCase()}`;
};

// Arrow function for changing image
const changeWeatherImage = () => 
{
    const currentSrc = weatherImage.src;
    const newSrc = currentSrc === cloudyImage ? sunnyImage : cloudyImage;
    const newAlt = currentSrc === cloudyImage ? "Sunny weather" : "Cloudy weather";
    
    weatherImage.src = newSrc;
    weatherImage.alt = newAlt;
};

sunnyContent.addEventListener('click', toggleLyrics);
colorPicker.addEventListener('input', handleColorChange);
weatherImage.addEventListener('click', changeWeatherImage);

// Initialize color display
handleColorChange();
// All arrays are made with the help of W3schools

//PHOTOS FROM NASA
const spaceObjects = 
{
    "Milky Way Galaxy": 
    {
        before: "https://cdn.mos.cms.futurecdn.net/hCXYB5YKXzdq2WEHYEe36d.jpg",
        after: "https://cdn.mos.cms.futurecdn.net/hCXYB5YKXzdq2WEHYEe36d.jpg",
        description: "The galaxy we all are in.",
        details: 
        {
            "Type": "Spiral Galaxy",
            "Distance": "Inside",
            "Diameter": "105,700 light-years",
            "Stars": "~400 billion"
        }
    },
    "Orion Nebula": 
    {
        before: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1200px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",
        after: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/1200px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",
        description: "A nebula that is visible to the naked eye in the Orion constellation.",
        details: 
        {
            "Type": "Diffuse Nebula",
            "Distance": "1,344 light-years",
            "Diameter": "24 light-years",
            "Age": "3 million years"
        }
    },
    "Saturn": 
    {
        before: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2023/12/STScI-01HGXC6PRGG2D1WGQE4XXXK9JX.tif?w=1755&h=987&fit=crop&crop=faces%2Cfocalpoint",
        after: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2023/12/STScI-01HGXC6PRGG2D1WGQE4XXXK9JX.tif?w=1755&h=987&fit=crop&crop=faces%2Cfocalpoint",
        description: "The sixth planet from the Sun.",
        details: 
        {
            "Type": "Gas Giant",
            "Distance from Sun": "1.4 billion km",
            "Diameter": "116,460 km",
            "Moons": "83 confirmed"
        }
    },
    "Jupiter": 
    {
        before: "https://media.istockphoto.com/id/1482783826/photo/artist-view-of-the-jupiter-planet.jpg?s=612x612&w=0&k=20&c=fUUMgfBpMqD3KXOeGIOK_OcnwULLo_zQvNYvuK77tzI=",
        after: "https://media.istockphoto.com/id/1482783826/photo/artist-view-of-the-jupiter-planet.jpg?s=612x612&w=0&k=20&c=fUUMgfBpMqD3KXOeGIOK_OcnwULLo_zQvNYvuK77tzI=",
        description: "The largest planet in our solar system.",
        details: 
        {
            "Type": "Gas Giant",
            "Distance from Sun": "778 million km",
            "Diameter": "139,820 km",
            "Moons": "95 confirmed"
        }
    }
};

const spaceGallery = document.getElementById('spaceGallery');
const popupOverlay = document.getElementById('popupOverlay');
const popupTitle = document.getElementById('popupTitle');
const popupImage = document.getElementById('popupImage');
const popupText = document.getElementById('popupText');
const popupDetails = document.getElementById('popupDetails');
const closePopup = document.getElementById('closePopup');

// Create and display all the objects (w3schools for the sets)
function initializeGallery() 
{
    for (const objectName in spaceObjects) 
    {
        const spaceCard = document.createElement('div');
        spaceCard.className = 'space-card';
        spaceCard.dataset.name = objectName;
        
        const spaceImg = document.createElement('img');
        spaceImg.className = 'space-image';
        spaceImg.src = spaceObjects[objectName].before;
        spaceImg.alt = `${objectName}`;
        
        const spaceOverlay = document.createElement('div');
        spaceOverlay.className = 'space-overlay';
        
        const nameElement = document.createElement('div');
        nameElement.className = 'space-name';
        nameElement.textContent = objectName;
        
        const exploreElement = document.createElement('div');
        exploreElement.className = 'explore-text';
        exploreElement.textContent = 'Click to explore details';
        
        spaceOverlay.appendChild(nameElement);
        spaceOverlay.appendChild(exploreElement);
        
        spaceCard.appendChild(spaceImg);
        spaceCard.appendChild(spaceOverlay);
        

        spaceCard.addEventListener('click', function() 
        {
            showPopup(objectName);
        });
        
        spaceGallery.appendChild(spaceCard);
    }
}

// Show popup with info
function showPopup(objectName) 
{
    const object = spaceObjects[objectName];
    popupTitle.textContent = objectName;
    popupImage.src = object.after;
    popupImage.alt = `${objectName}`;
    popupText.textContent = object.description;
    
    // Clear previous details
    popupDetails.innerHTML = '';
    
    // Add details
    for (const [key, value] of Object.entries(object.details)) 
    {
        const detailItem = document.createElement('div');
        detailItem.className = 'detail-item';
        detailItem.innerHTML = `<span class="detail-label">${key}:</span> ${value}`;
        popupDetails.appendChild(detailItem);
    }
    
    popupOverlay.classList.remove('hidden');
}

// Close popup
closePopup.addEventListener('click', function() 
{
    popupOverlay.classList.add('hidden');
});

// Close popup when clicking outside content
popupOverlay.addEventListener('click', function(event) 
{
    if (event.target === popupOverlay) 
    {
        popupOverlay.classList.add('hidden');
    }
});

// Initialize the gallery when the page loads
window.addEventListener('DOMContentLoaded', initializeGallery);
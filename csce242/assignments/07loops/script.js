// Help of W3schools for the image drawing/spacing, appending, createElement, and the things I missed in class

document.getElementById("drawBtn").onclick = () => 
{
    const scene = document.getElementById('scene');
    const body = document.body;
    
    // Get time for day or night
    const now = new Date();
    const hour = now.getHours();
    const isNight = hour >= 18 || hour < 6;
    
    // Set scene based on time
    if (isNight) 
    {
        body.className = 'night';
        scene.className = 'scene night';
    } 
    else 
    {
        body.className = 'day';
        scene.className = 'scene day';
    }
    
    // Create sun or moon based on time of day
    const sunOrMoon = document.createElement('div');
    if (isNight) 
    {
        sunOrMoon.className = 'moon';
    } 
    else 
    {
        sunOrMoon.className = 'sun';
    }
    scene.appendChild(sunOrMoon);
    
    // Create clouds container
    const cloudsContainer = document.createElement('div');
    cloudsContainer.className = 'clouds-container';
    scene.appendChild(cloudsContainer);
    
    // Create 6 clouds using loop
    for (let i = 0; i < 6; i++) 
    {
        const cloud = document.createElement('div');
        cloud.className = 'cloud cloud-small';
        cloud.style.left = (i * 15 + 10) + '%';
        cloudsContainer.appendChild(cloud);
    }
    
    // Create trees container
    const treesContainer = document.createElement('div');
    treesContainer.className = 'trees-container';
    scene.appendChild(treesContainer);
    
    // Create 6 trees using loop
    for (let i = 0; i < 6; i++) 
    {
        const tree = document.createElement('div');
        tree.className = 'tree';
        tree.style.left = (i * 13 + 15) + '%';
        
        const trunk = document.createElement('div');
        trunk.className = 'tree-trunk';
        
        const foliage = document.createElement('div');
        foliage.className = 'tree-foliage';
        
        // Make tree
        trunk.appendChild(foliage);
        tree.appendChild(trunk);
        treesContainer.appendChild(tree);
    }
};
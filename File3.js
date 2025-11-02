// --- Balloon Configuration ---
const balloonColors = [
    '#ff7f7f', // Light Red/Pink
    '#ffb3ff', // Pastel Pink/Purple
    '#aaffaa', // Light Green
    '#a0cfff', // Light Blue
    '#ffffa0'  // Light Yellow
];

// Function to get a random number between a min and max
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to create a single balloon element
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Pick a random color
    const color = balloonColors[random(0, balloonColors.length - 1)];
    balloon.style.backgroundColor = color;
    
    // Random starting position (horizontal)
    const startX = random(0, window.innerWidth - 60); // 60 is balloon width
    balloon.style.left = ${startX}px;
    
    // Start the balloon off-screen at the bottom
    balloon.style.top = ${window.innerHeight + 10}px; 

    // Random duration for the animation (for varied speed)
    const duration = random(8, 15); // 8 to 15 seconds
    
    // Apply the animation properties
    balloon.style.animation = floatUp ${duration}s ease-in forwards;
    
    // Append the new balloon to the body
    document.body.appendChild(balloon);

    // Remove the balloon once it's finished floating up (to keep the DOM clean)
    setTimeout(() => {
        balloon.remove();
    }, duration * 1000); 
}

// Function to start the continuous balloon creation
function startBalloons() {
    // Create a new balloon every 1.5 seconds
    setInterval(createBalloon, 1500); 
    
    // Create an initial burst of balloons
    for (let i = 0; i < 5; i++) {
        setTimeout(createBalloon, i * 300); // 5 balloons with a short delay
    }
}

// --- Add the 'floatUp' Keyframe CSS dynamically ---
// We do this here because the duration is random, but the animation path is fixed.
const style = document.createElement('style');
style.innerHTML = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-${window.innerHeight * 1.5}px) scale(0.5); 
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// Wait for the entire page to load before starting the animation
window.onload = startBalloons;
// Show hug message on homepage
function showHug() {
    const hug = document.getElementById("hug");
    const heartsContainer = document.getElementById("heartsContainer");
  
    if (hug) hug.style.display = "block";
  
    // Generate hearts
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 90 + "%";
      heart.style.animationDuration = (1.5 + Math.random()).toFixed(2) + "s";
      heartsContainer.appendChild(heart);
  
      // Remove after animation
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }
  }document.addEventListener("click", function (event) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 1000);
  });
  
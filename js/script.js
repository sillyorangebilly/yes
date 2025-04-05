let hugCounter = 0;

// Initialize Firebase if not already done in HTML
// firebase.initializeApp(firebaseConfig); 
// const database = firebase.database();

// ⭐ Function to add a star to Firebase (for the Constellation Builder)
function addStar(type) {
  const star = {
    type: type,
    x: Math.random() * 100,
    y: Math.random() * 100,
    timestamp: Date.now()
  };
  firebase.database().ref("stars").push(star);
}

// 🤗 HUG BUTTON
function showHug() {
  const hug = document.getElementById("hug");
  const hugCount = document.getElementById("hugCount");
  const heartsContainer = document.getElementById("heartsContainer");

  hug.style.display = "block";
  hugCounter++;
  hugCount.textContent = `You've been hugged ${hugCounter} time${hugCounter > 1 ? 's' : ''} 🤗`;

  // Add to constellation
  addStar("hug");

  // Floating hearts
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.animationDuration = (1.5 + Math.random()).toFixed(2) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

// 😘 KISS BUTTON
function giveKiss() {
  const kissMsg = document.getElementById("kissMessage");
  kissMsg.innerHTML = "💋 MUAH!!! For LYBU only 💋";
  kissMsg.style.display = "block";
  kissMsg.style.animation = "popIn 0.4s ease forwards";

  // Add to constellation
  addStar("kiss");

  setTimeout(() => {
    kissMsg.style.display = "none";
  }, 2000);
}

  
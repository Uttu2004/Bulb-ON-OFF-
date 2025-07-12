let isOn = false; // bulb shuru mein off hai

function toggleBulb() {
  const bulb = document.getElementById("bulb");

  if (isOn) {
    bulb.src = "bulbof.png";
    isOn = false;
  } else {
    bulb.src = "bulbon.png";
    isOn = true;
  }
}

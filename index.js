let counter = 0;
let interval = null;
function getPussy() {
  const pussyImg = document.getElementById("pussy-image");
  counter++;
  if (counter === 5) {
    counter = 0;
    pussyImg.src =
      "https://avatars.mds.yandex.net/i?id=d7765ab4b6502df4c682094a947d5e5f_l-13084016-images-thumbs&n=13";
    return;
  }
  const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
  // WARN: I know that API key shouldn't be here, for this particular api and project I simply don't care.
  const api_key =
    "live_GrNa9FbE1soLglWmkvU2USjFfP1Pjqx8E2eoCvvLW286RzSiB4ZBskU0qQ26VyKW";
  fetch(url, {
    headers: {
      "x-api-key": api_key,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      pussyImg.src = data[0].url;
    });
}

getPussy();
if (interval === null) {
  interval = setInterval(() => getPussy(), 3000);
}
window.addEventListener("click", () => {
  if (interval === null) {
    interval = setInterval(() => getPussy(), 3000);
  } else {
    alert("Cats paused");
    clearInterval(interval);
    interval = null;
  }
});

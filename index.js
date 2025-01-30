let counter = 0;
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
setInterval(() => getPussy(), 3000);

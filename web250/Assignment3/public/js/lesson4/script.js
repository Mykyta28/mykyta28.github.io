const [startForm] = [document.querySelector("#startForm")];

const backButton = document.querySelector(".back-button");

startForm?.addEventListener("submit", sendData);

function sendData(e) {
  e.preventDefault();

  const data = new URLSearchParams();

  for (const pair of new FormData(e.target)) {
    data.append(pair[0], pair[1]);
  }
  data.append("submit", e.target.querySelector("button[type=submit]").value);
  fetch(e.target.action, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((json) => {
      document
        .querySelectorAll(".expression input.result")
        .forEach((input, index) =>
          input.classList.add(json[index] ? "success" : "error")
        );
      document.getElementById("new-game").style.display = "block";
    });
}

backButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.location = "/";
});

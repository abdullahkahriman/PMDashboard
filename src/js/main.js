function getTime() {
  const date = new Date();

  var dateContainer = document.querySelector(".date");
  dateContainer.firstChild.nextSibling.innerHTML = `${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;

  dateContainer.lastChild.previousSibling.innerHTML = `${date.getUTCDate()} ${date.toLocaleString(
    "en-US",
    { month: "long" }
  )}`;
}

getTime();

setInterval(() => {
  getTime();
}, 1000);

function progress() {
  document.querySelectorAll("progress").forEach((val, key) => {
    var nextEl = val.nextElementSibling;
    const per = parseInt(
      (parseInt(nextEl.innerHTML.split("/")[0]) /
        parseInt(nextEl.innerHTML.split("/")[1])) *
        100
    );

    val.setAttribute("value", per);
  });
  console.log(document.querySelectorAll("progress"));
}
progress();

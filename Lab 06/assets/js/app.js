// gallery
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const image = document.querySelector(".image");

const container = document.querySelector(".slides");

let currentIndex = 0;

let max = currentIndex;

function addImage() {
  return fetchImageWithNumber((currentIndex += 1)).then((data) => {
    hideall();
    cloneImage = image.cloneNode(true);
    img = document.createElement("img");
    img.classList.add("img");
    console.log("data: ", data);
    img.src = data;
    cloneImage.style = "display:block";
    cloneImage.setAttribute("index", currentIndex);
    cloneImage.appendChild(img);
    container.appendChild(cloneImage);
    max = currentIndex;
  });
}

function fetchImageWithNumber(i) {
  return fetch(`https://picsum.photos/seed/${i}/600/600`).then((response) => {
    return response.url;
  });
}

function hideall() {
  document.querySelectorAll("[index]").forEach((ele) => {
    ele.style = "display:none";
  });
}
document.addEventListener("DOMContentLoaded", () => {
  addImage();
  next.addEventListener("click", (e) => {
    if (max == currentIndex) {
      addImage();
    } else {
      hideall();
      document.querySelector(`[index="${(currentIndex += 1)}"]`).style =
        "display:block";
      max = currentIndex;
    }
  });

  prev.addEventListener("click", () => {
    length = document.querySelectorAll(".img");
    if (currentIndex == 1) {
      hideall();
      currentIndex = max;
      document.querySelector(`[index="${currentIndex}"]`).style =
        "display:block;";
    } else {
      hideall();
      document.querySelector(`[index="${currentIndex - 1}"]`).style =
        "display:block;";
      currentIndex -= 1;
    }
  });
});

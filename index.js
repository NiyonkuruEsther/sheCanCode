const dogContainer = document.getElementById("dog-container");
const imgElement = document.createElement("img");

const loadImage = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  const imgUrl = data.url;

  if (imgUrl.includes(".mp4")) {
    loadImage();
  } else {
    imgElement.src = imgUrl;
    imgElement.style.width = "300px";
    imgElement.style.height = "300px";
    imgElement.style.objectFit = "cover";
    imgElement.style.objectPosition = "center";

    dogContainer.appendChild(imgElement);
  }
};

document.getElementById("btn").addEventListener("click", loadImage);

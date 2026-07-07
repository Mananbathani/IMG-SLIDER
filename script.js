const img = [
      "img-1.jpg",
      "img-2.jpg",
      "img-3.jpg",
      "img-4.jpg",
      "img-5.jpg"
    ];
var index = 0;

document.querySelector(".right").onclick = function () {

    index++;
    if (index >= img.length) {
        index=0;
    }
        document.querySelector('img').attributes.src.value = `${img[index]}`

};

document.querySelector(".left").onclick = function () {

    index--;
        document.querySelector('img').attributes.src.value = `${img[index]}`

    if (index <0 ) {
        index = img.length-1;

    }
    document.querySelector('img').src = img[index];

};
import gardenImage1 from '/my-garden-1.jpg';
import gardenImage2 from '/my-garden-2.jpg';
import gardenImage3 from '/my-garden-3.jpg';
import gardenImage4 from '/my-garden-4.jpg';
import gardenImage5 from '/my-garden-5.jpg';

function randomImage() {
  const imgArray = [gardenImage1, gardenImage2, gardenImage3, gardenImage4, gardenImage5];
  const randomNumber = Math.floor(Math.random() * (4 - 0 + 1) + 0);
  return imgArray[randomNumber];
}

export default randomImage;

import { printf } from "./utils";
class Butterfly {
  private static starPrintingFunc(number_of_stars: number) {
    for (let star = 1; star <= number_of_stars; star++) {
      printf("*");
    }
    return 0;
  }

  static draw(numberOfRows: number) {
    let numberOfStars = 1,
      numberOfSpaces = numberOfRows - 1,
      breakPoint = Math.ceil(numberOfRows / 2);

    for (let i = 1; i <= numberOfRows; i++) {
      Butterfly.starPrintingFunc(numberOfStars);

      for (let s = 1; s <= numberOfSpaces; s++) {
        printf(" ");
      }

      Butterfly.starPrintingFunc(numberOfStars);

      if (i < breakPoint) {
        numberOfStars++;
        numberOfSpaces -= 2;
      } else {
        numberOfStars--;
        numberOfSpaces += 2;
      }

      printf("\n");
    }

    return 0;
  }
}

export default Butterfly.draw;

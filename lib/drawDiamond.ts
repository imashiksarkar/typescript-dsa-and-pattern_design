import { printf } from "./utils";
const drawDiamond = (numberOfRows: number) => {
  let numberOfSpacesToPrint = Math.ceil(numberOfRows / 2) * 2 - 2,
    numberOfStarsToPrint = 1;

  for (let i = 1; i <= numberOfRows; i++) {
    for (let s = 1; s <= numberOfSpacesToPrint; s++) {
      printf(" ");
    }

    for (let j = 1; j <= numberOfStarsToPrint; j++) {
      printf("* ");
    }

    if (i <= numberOfRows / 2) {
      numberOfSpacesToPrint -= 2;
      numberOfStarsToPrint += 2;
    } else {
      numberOfSpacesToPrint += 2;
      numberOfStarsToPrint -= 2;
    }

    printf("\n");
  }
};

export default drawDiamond;

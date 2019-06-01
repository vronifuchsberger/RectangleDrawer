function drawRectangle(width, height) {
  if (typeof width !== "number" || typeof height !== "number") {
    throw new Error("Input must be a number.");
  } else if (!Number.isInteger(width) || !Number.isInteger(height)) {
    throw new Error("Input must be an integer.");
  } else if (width < 2 || height < 2) {
    throw new Error("width and height must be at least 2 to draw a rectangle.");
  }

  let result = "";
  for (x = 1; x <= height; x++) {
    for (y = 1; y <= width; y++) {
      //upper left corner
      if (x === 1 && y === 1) {
        result += "┌";
      } // upper right corner
      else if (x === 1 && y === width) {
        result += "┐\n";
      } // lower left corner
      else if (x === height && y === 1) {
        result += "└";
      } // lower right corner
      else if (x === height && y === width) {
        result += "┘";
      } // top && bottom border
      else if (x === 1 || x === height) {
        result += "-";
      } // left border
      else if (y === 1) {
        result += "|";
      } // right border
      else if (y === width) {
        result += "|\n";
      } else {
        result += " ";
      }
    }
  }
  return result;
}

if (process.argv.length > 3) {
  console.log(
    drawRectangle(parseInt(process.argv[2]), parseInt(process.argv[3]))
  );
} else {
  throw new Error("Two arguments required.");
}

module.exports = drawRectangle;

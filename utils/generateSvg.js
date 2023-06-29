
// TODO: Create a function to generate markdown for README
function generateSvg(data) {
  let shapeCode = ''
  if (data.shape == "circle") {
    shapeCode = `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />`
  }

  if (data.shape == "square") {
    shapeCode = `<rect x="50" y="20" width="200" height="200" fill="${data.shapeColor}" />`
  }

  if (data.shape == "triangle") {
    shapeCode = ` <polygon points="60,160,250,160,150,20" fill="${data.shapeColor}" />`
  }
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shapeCode}
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  
  </svg>`;
}


module.exports = generateSvg;

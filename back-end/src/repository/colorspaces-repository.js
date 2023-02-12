const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.cvtColor = async (imageBase64, code, dstCn) => {

  installDOM();
  await loadOpenCV();

  const buffer = Buffer.from(imageBase64, 'base64');
  writeFileSync('inst.jpg', buffer);

  const imagem = await loadImage('inst.jpg');
  const src = cv.imread(imagem);
  let dst = new cv.Mat();

  if (src) {

    if (code = 'COLOR_RGB2RGBA') {
      cv.cvtColor(src, dst, cv.COLOR_RGB2RGBA, parseInt(dstCn));
    }
    if (code = 'COLOR_RGBA2RGB') {
      cv.cvtColor(src, dst, cv.COLOR_RGBA2RGB, parseInt(dstCn));
    }
    if (code = 'COLOR_BGR2RGBA') {
      cv.cvtColor(src, dst, cv.COLOR_BGR2RGBA, parseInt(dstCn));
    }
    if (code = 'COLOR_RGB2BGRA') {
      cv.cvtColor(src, dst, cv.COLOR_RGB2BGRA, parseInt(dstCn));
    }
    if (code = 'COLOR_RGBA2BGR') {
      cv.cvtColor(src, dst, cv.COLOR_RGBA2BGR, parseInt(dstCn));
    }
    if (code = 'COLOR_BGR2RGB') {
      cv.cvtColor(src, dst, cv.COLOR_BGR2RGB, parseInt(dstCn));
    }
    if (code = 'COLOR_RGB2BGR') {
      cv.cvtColor(src, dst, cv.COLOR_RGB2BGR, parseInt(dstCn));
    }
    if (code = 'COLOR_BGR2GRAY') {
      cv.cvtColor(src, dst, cv.COLOR_BGR2GRAY, parseInt(dstCn));
    }
    if (code = 'COLOR_RGB2GRAY') {
      cv.cvtColor(src, dst, cv.COLOR_RGB2GRAY, parseInt(dstCn));
    }
    if (code = 'COLOR_RGBA2GRAY') {
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, parseInt(dstCn));
    }
    if (code = 'COLOR_GRAY2BGR') {
      cv.cvtColor(src, dst, cv.COLOR_GRAY2BGR, parseInt(dstCn));
    }
    if (code = 'COLOR_GRAY2RGB') {
      cv.cvtColor(src, dst, cv.COLOR_GRAY2RGB, parseInt(dstCn));
    }
    if (code = 'COLOR_GRAY2RGBA') {
      cv.cvtColor(src, dst, cv.COLOR_GRAY2RGBA, parseInt(dstCn));
    }
  } else{
    console.log("imagem nula")
  }


  const canvas = createCanvas(src.width, src.height);
  cv.imshow(canvas, dst);
  writeFileSync('outputCvtColor.jpg', canvas.toBuffer('image/jpeg'));
  src.delete();
  dst.delete();

};

exports.inRange = async (imageBase64) => {

  installDOM();
  await loadOpenCV();

  const buffer = Buffer.from(imageBase64, 'base64');
  writeFileSync('inst.jpg', buffer);

  const imagem = await loadImage('inst.jpg');
  const src = cv.imread(imagem);

  let dst = new cv.Mat();

  let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
  let high = new cv.Mat(src.rows, src.cols, src.type(), [150, 150, 150, 255]);

  cv.inRange(src, low, high, dst);

  const canvas = createCanvas(src.width, src.height);
  cv.imshow(canvas, dst);
  writeFileSync('outputInRange.jpg', canvas.toBuffer('image/jpeg'));
  src.delete();
  dst.delete();

};

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

  var texto = '{ "imagem" : { ' +
    '"nomeArquivo": "imagem.png", ' +
    '"base64": ' + dataURL + ' } }';
}

function loadOpenCV() {
  return new Promise(resolve => {
    global.Module = {
      onRuntimeInitialized: resolve
    };
    global.cv = require('./js/opencv.js');
  });
}

function installDOM() {
  const dom = new JSDOM();
  global.document = dom.window.document;
  // The rest enables DOM image and canvas and is provided by node-canvas
  global.Image = Image;
  global.HTMLCanvasElement = Canvas;
  global.ImageData = ImageData;
  global.HTMLImageElement = Image;
}

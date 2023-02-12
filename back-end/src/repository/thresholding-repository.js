const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.threshold = async (imageBase64, thresh, maxval, type) => {

  installDOM();
  await loadOpenCV();

  const buffer = Buffer.from(imageBase64, 'base64');
  writeFileSync('inst.jpg', buffer);

  const imagem = await loadImage('inst.jpg');
  const src = cv.imread(imagem);

  let dst = new cv.Mat();

  if (type == 'THRESH_BINARY') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_BINARY);

  } else if (type == 'THRESH_BINARY_INV') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_BINARY_INV);

  } else if (type == 'THRESH_TRUNC') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_TRUNC);

  } else if (type == 'THRESH_TOZERO') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_TOZERO);

  } else if (type == 'THRESH_TOZERO_INV') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_TOZERO_INV);

  } else if (type == 'THRESH_MASK') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_MASK);

  } else if (type == 'THRESH_OTSU') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_OTSU);

  } else if (type == 'THRESH_TRIANGLE') {

    cv.threshold(src, dst, thresh, maxval, cv.THRESH_TRIANGLE);

  }

  const canvas = createCanvas(src.width, src.height);
  cv.imshow(canvas, dst);
  writeFileSync('outputThreshold.jpg', canvas.toBuffer('image/jpeg'));
  src.delete();
  dst.delete();

}

exports.adaptiveThreshold = async (imageBase64, valMax, adaptiveMethod, type, blockSize, c) => {

  installDOM();
  await loadOpenCV();

  const buffer = Buffer.from(imageBase64, 'base64');
  writeFileSync('inst.jpg', buffer);

  const imagem = await loadImage('inst.jpg');
  const src = cv.imread(imagem);

  let dst = new cv.Mat();

  /*AVALIAR*/
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

  if (adaptiveMethod == 'ADAPTIVE_THRESH_MEAN_C') {

    if (type == 'THRESH_BINARY') {

      cv.adaptiveThreshold(src, dst, valMax, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY, blockSize, c);

    } else if (type == 'THRESH_BINARY_INV') {

      cv.adaptiveThreshold(src, dst, valMax, cv.ADAPTIVE_THRESH_MEAN_C, cv.THRESH_BINARY_INV, blockSize, c);

    }

  } else if (adaptiveMethod == 'ADAPTIVE_THRESH_GAUSSIAN_C') {

    if (type == 'THRESH_BINARY') {

      cv.adaptiveThreshold(src, dst, valMax, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, blockSize, c);

    } else if (type == 'THRESH_BINARY_INV') {

      cv.adaptiveThreshold(src, dst, valMax, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, blockSize, c);

    }

  }

  const canvas = createCanvas(src.width, src.height);
  cv.imshow(canvas, dst);
  writeFileSync('outputAdaptiveThreshold.jpg', canvas.toBuffer('image/jpeg'));
  src.delete();
  dst.delete();

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
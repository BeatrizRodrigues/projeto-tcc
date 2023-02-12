const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.resize = async (imageBase64, size1, size2, fx, fy, type) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();

    let dsize = new cv.Size(size1, size2);

    if (type == 'INTER_LINEAR') {

        cv.resize(src, dst, dsize, fx, fy, cv.INTER_LINEAR);

    }
    if (type == 'INTER_AREA') {

        cv.resize(src, dst, dsize, fx, fy, cv.INTER_AREA);

    }
    if (type == 'INTER_CUBIC') {

        cv.resize(src, dst, dsize, fx, fy, cv.cv.INTER_CUBIC);

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    writeFileSync('outputresize.jpg', canvas.toBuffer('image/jpeg'));
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
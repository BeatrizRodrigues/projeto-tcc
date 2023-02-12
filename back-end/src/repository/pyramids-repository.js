const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.pyrUp = async (imageBase64, x, y, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();

    if (borderType == 'BORDER_CONSTANT') {

        cv.pyrUp(src, dst, new cv.Size(x, y), cv.BORDER_CONSTANT);

    }
    if (borderType == 'BORDER_REPLICATE') {

        cv.pyrUp(src, dst, new cv.Size(x, y), cv.BORDER_REPLICATE);

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.pyrUp(src, dst, new cv.Size(x, y), cv.BORDER_REFLECT);

    }
    if (borderType == 'BORDER_WRAP') {

        cv.pyrUp(src, dst, new cv.Size(x, y), cv.BORDER_WRAP);

    }
    if (borderType == 'BORDER_DEFAULT') {

        cv.pyrUp(src, dst, new cv.Size(x, y), cv.BORDER_DEFAULT);

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.pyrUp(src, dst, new cv.Size(x, y), cv.BORDER_ISOLATED);

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.pyrDown = async (imageBase64, x, y, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();

    if (borderType == 'BORDER_REPLICATE') {

        cv.pyrDown(src, dst, new cv.Size(x, y), cv.BORDER_REPLICATE);

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.pyrDown(src, dst, new cv.Size(x, y), cv.BORDER_REFLECT);

    }
    if (borderType == 'BORDER_WRAP') {

        cv.pyrDown(src, dst, new cv.Size(x, y), cv.BORDER_WRAP);

    }
    if (borderType == 'BORDER_DEFAULT') {

        cv.pyrDown(src, dst, new cv.Size(x, y), cv.BORDER_DEFAULT);

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.pyrDown(src, dst, new cv.Size(x, y), cv.BORDER_ISOLATED);

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

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
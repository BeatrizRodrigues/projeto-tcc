const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.sobel = async (imageBase64, dx, dy, ksize, scale, delta, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();

    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);

    if (borderType == 'BORDER_CONSTANT') {

        cv.Sobel(src, dst, cv.CV_8U, dx, dy, ksize, scale, delta, cv.BORDER_CONSTANT);

    }
    if (borderType == 'BORDER_REPLICATE') {

        cv.Sobel(src, dst, cv.CV_8U, dx, dy, ksize, scale, delta, cv.BORDER_REPLICATE);

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.Sobel(src, dst, cv.CV_8U, dx, dy, ksize, scale, delta, cv.BORDER_REFLECT);

    }
    if (borderType == 'BORDER_WRAP') {

        cv.Sobel(src, dst, cv.CV_8U, dx, dy, ksize, scale, delta, cv.BORDER_WRAP);

    }
    if (borderType == 'BORDER_DEFAULT') {

        cv.Sobel(src, dst, cv.CV_8U, dx, dy, ksize, scale, delta, cv.BORDER_DEFAULT);

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.Sobel(src, dst, cv.CV_8U, dx, dy, ksize, scale, delta, cv.BORDER_ISOLATED);

    }
    
    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    writeFileSync('outputresobel.jpg', canvas.toBuffer('image/jpeg'));
    src.delete();
    dst.delete();

}

exports.scharr = async (imageBase64, dx, dy, scale, delta, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();

    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
    if (borderType == 'BORDER_CONSTANT') {

        cv.Scharr(src, dst, cv.CV_8U, dx, dy, scale, delta, cv.BORDER_CONSTANT);

    }
    if (borderType == 'BORDER_REPLICATE') {

        cv.Scharr(src, dst, cv.CV_8U, dx, dy, scale, delta, cv.BORDER_REPLICATE);

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.Scharr(src, dst, cv.CV_8U, dx, dy, scale, delta, cv.BORDER_REFLECT);

    }
    if (borderType == 'BORDER_WRAP') {

        cv.Scharr(src, dst, cv.CV_8U, dx, dy, scale, delta, cv.BORDER_WRAP);

    }
    if (borderType == 'BORDER_DEFAULT') {

        cv.Scharr(src, dst, cv.CV_8U, dx, dy, scale, delta, cv.BORDER_DEFAULT);

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.Scharr(src, dst, cv.CV_8U, dx, dy, scale, delta, cv.BORDER_ISOLATED);

    }
    
    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    writeFileSync('outputrescharr.jpg', canvas.toBuffer('image/jpeg'));
    src.delete();
    dst.delete();

}

exports.laplacian = async (imageBase64, ksize, scale, delta, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();

    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
    if (borderType == 'BORDER_CONSTANT') {

        cv.Laplacian(src, dst, cv.CV_8U, ksize, scale, delta, cv.BORDER_CONSTANT);

    }
    if (borderType == 'BORDER_REPLICATE') {

        cv.Laplacian(src, dst, cv.CV_8U, ksize, scale, delta, cv.BORDER_REPLICATE);

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.Laplacian(src, dst, cv.CV_8U, ksize, scale, delta, cv.BORDER_REFLECT);

    }
    if (borderType == 'BORDER_WRAP') {

        cv.Laplacian(src, dst, cv.CV_8U, ksize, scale, delta, cv.BORDER_WRAP);

    }
    if (borderType == 'BORDER_DEFAULT') {

        cv.Laplacian(src, dst, cv.CV_8U, ksize, scale, delta, cv.BORDER_DEFAULT);

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.Laplacian(src, dst, cv.CV_8U, ksize, scale, delta, cv.BORDER_ISOLATED);

    }
    
    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    writeFileSync('outputrelaplacian.jpg', canvas.toBuffer('image/jpeg'));
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
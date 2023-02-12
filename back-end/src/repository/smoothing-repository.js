const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.filter2D = async (imageBase64, size1, size2, point1, point2, delta, type) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();
    let M = cv.Mat.eye(size1, size2, cv.CV_32FC1);
    let anchor = new cv.Point(point1, point2);

    if (type == 'BORDER_CONSTANT') {

        cv.filter2D(src, dst, cv.CV_8U, M, anchor, delta, cv.BORDER_CONSTANT);

    }
    if (type == 'BORDER_REPLICATE') {

        cv.filter2D(src, dst, cv.CV_8U, M, anchor, delta, cv.BORDER_REPLICATE);

    }
    if (type == 'BORDER_REFLECT') {

        cv.filter2D(src, dst, cv.CV_8U, M, anchor, delta, cv.cv.BORDER_REFLECT);

    }
    if (type == 'BORDER_WRAP') {

        cv.filter2D(src, dst, cv.CV_8U, M, anchor, delta, cv.BORDER_WRAP);

    }
    if (type == 'BORDER_DEFAULT') {

        cv.filter2D(src, dst, cv.CV_8U, M, anchor, delta, cv.BORDER_DEFAULT);

    }
    if (type == 'BORDER_ISOLATED') {

        cv.filter2D(src, dst, cv.CV_8U, M, anchor, delta, cv.cv.BORDER_ISOLATED);

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.blur = async (imageBase64, size1, size2, point1, point2, type) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();
    let ksize = new cv.Size(size1, size2);
    let anchor = new cv.Point(point1, point2);

    if (type == 'BORDER_CONSTANT') {

        cv.blur(src, dst, ksize, anchor, cv.BORDER_CONSTANT);

    }
    if (type == 'BORDER_REPLICATE') {

        cv.blur(src, dst, ksize, anchor, cv.BORDER_REPLICATE);

    }
    if (type == 'BORDER_REFLECT') {

        cv.blur(src, dst, ksize, anchor, cv.cv.BORDER_REFLECT);

    }
    if (type == 'BORDER_WRAP') {

        cv.blur(src, dst, ksize, anchor, cv.BORDER_WRAP);

    }
    if (type == 'BORDER_DEFAULT') {

        cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);

    }
    if (type == 'BORDER_ISOLATED') {

        cv.blur(src, dst, ksize, anchor, cv.cv.BORDER_ISOLATED);

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.boxFilter = async (imageBase64, size1, size2, point1, point2, ddepth, normalize, type) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();
    let ksize = new cv.Size(size1, size2);
    let anchor = new cv.Point(point1, point2);

    if (type == 'BORDER_CONSTANT') {

        cv.boxFilter(src, dst, ddepth, ksize, anchor, normalize, cv.BORDER_CONSTANT);

    }
    if (type == 'BORDER_REPLICATE') {

        cv.boxFilter(src, dst, ddepth, ksize, anchor, normalize, cv.BORDER_REPLICATE);

    }
    if (type == 'BORDER_REFLECT') {

        cv.boxFilter(src, dst, ddepth, ksize, anchor, normalize, cv.cv.BORDER_REFLECT);

    }
    if (type == 'BORDER_WRAP') {

        cv.boxFilter(src, dst, ddepth, ksize, anchor, normalize, cv.BORDER_WRAP);

    }
    if (type == 'BORDER_DEFAULT') {

        cv.boxFilter(src, dst, ddepth, ksize, anchor, normalize, cv.BORDER_DEFAULT);

    }
    if (type == 'BORDER_ISOLATED') {

        cv.boxFilter(src, dst, ddepth, ksize, anchor, normalize, cv.cv.BORDER_ISOLATED);

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.GaussianBlur = async (imageBase64, size1, size2, sigmaX, sigmaY, type) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();
    let ksize = new cv.Size(size1, size2);

    if (type == 'BORDER_CONSTANT') {

        cv.GaussianBlur(src, dst, ksize, sigmaX, sigmaY, cv.BORDER_CONSTANT);

    }
    if (type == 'BORDER_REPLICATE') {

        cv.GaussianBlur(src, dst, ksize, sigmaX, sigmaY, cv.BORDER_REPLICATE);

    }
    if (type == 'BORDER_REFLECT') {

        cv.GaussianBlur(src, dst, ksize, sigmaX, sigmaY, cv.cv.BORDER_REFLECT);

    }
    if (type == 'BORDER_WRAP') {

        cv.GaussianBlur(src, dst, ksize, sigmaX, sigmaY, cv.BORDER_WRAP);

    }
    if (type == 'BORDER_DEFAULT') {

        cv.GaussianBlur(src, dst, ksize, sigmaX, sigmaY, cv.BORDER_DEFAULT);

    }
    if (type == 'BORDER_ISOLATED') {

        cv.GaussianBlur(src, dst, ksize, sigmaX, sigmaY, cv.cv.BORDER_ISOLATED);

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.medianBlur = async (imageBase64, ksize) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();

    cv.medianBlur(src, dst, ksize);

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.bilateralFilter = async (imageBase64, d, sigmaColor, sigmaSpace, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);
    cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);

    let dst = new cv.Mat();

    if (borderType == 'BORDER_CONSTANT') {

        cv.bilateralFilter(src, dst, d, sigmaColor, sigmaSpace, cv.BORDER_CONSTANT);

    }
    if (borderType == 'BORDER_REPLICATE') {

        cv.bilateralFilter(src, dst, d, sigmaColor, sigmaSpace, cv.BORDER_REPLICATE);

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.bilateralFilter(src, dst, d, sigmaColor, sigmaSpace, cv.cv.BORDER_REFLECT);

    }
    if (borderType == 'BORDER_WRAP') {

        cv.bilateralFilter(src, dst, d, sigmaColor, sigmaSpace, cv.BORDER_WRAP);

    }
    if (borderType == 'BORDER_DEFAULT') {

        cv.bilateralFilter(src, dst, d, sigmaColor, sigmaSpace, cv.BORDER_DEFAULT);

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.bilateralFilter(src, dst, d, sigmaColor, sigmaSpace, cv.cv.BORDER_ISOLATED);

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
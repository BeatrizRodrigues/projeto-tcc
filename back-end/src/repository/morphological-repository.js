const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.erode = async (imageBase64, size1, size2, point1, point2, val, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    console.log("1");
    let dst = new cv.Mat();
    let M = cv.Mat.ones(size1, size2, cv.CV_8U);
    console.log("2");
    let anchor = new cv.Point(point1, point2);

    console.log(M);
    if (borderType == 'BORDER_CONSTANT') {

        cv.erode(src, dst, M, anchor, val, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_REPLICATE') {

        cv.erode(src, dst, M, anchor, val, cv.BORDER_REPLICATE, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.erode(src, dst, M, anchor, val, cv.BORDER_REFLECT, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_WRAP') {

        cv.erode(src, dst, M, anchor, val, cv.BORDER_WRAP, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_DEFAULT') {
        console.log("aq")
        cv.erode(src, dst, M, anchor, val, cv.BORDER_DEFAULT, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.erode(src, dst, M, anchor, val, cv.BORDER_ISOLATED, cv.morphologyDefaultBorderValue());

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.dilate = async (imageBase64, size1, size2, point1, point2, val, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    let dst = new cv.Mat();
    let M = cv.Mat.ones(size1, size2, cv.CV_8U);
    let anchor = new cv.Point(point1, point2);

    if (borderType == 'BORDER_CONSTANT') {

        cv.dilate(src, dst, M, anchor, val, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_REPLICATE') {

        cv.dilate(src, dst, M, anchor, val, cv.BORDER_REPLICATE, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_REFLECT') {

        cv.dilate(src, dst, M, anchor, val, cv.BORDER_REFLECT, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_WRAP') {

        cv.dilate(src, dst, M, anchor, val, cv.BORDER_WRAP, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_DEFAULT') {

        cv.dilate(src, dst, M, anchor, val, cv.BORDER_DEFAULT, cv.morphologyDefaultBorderValue());

    }
    if (borderType == 'BORDER_ISOLATED') {

        cv.dilate(src, dst, M, anchor, val, cv.BORDER_ISOLATED, cv.morphologyDefaultBorderValue());

    }

    const canvas = createCanvas(src.width, src.height);
    cv.imshow(canvas, dst);
    var img = canvas.toDataURL("image");
    src.delete();
    dst.delete();
    return img;

}

exports.MorphologyEx = async (imageBase64, size1, size2, point1, point2, val, morphType, borderType) => {

    installDOM();
    await loadOpenCV();

    const buffer = Buffer.from(imageBase64, 'base64');
    writeFileSync('inst.jpg', buffer);

    const imagem = await loadImage('inst.jpg');
    const src = cv.imread(imagem);

    console.log("1");
    let dst = new cv.Mat();
    let M = cv.Mat.ones(size1, size2, cv.CV_8U);
    let anchor = new cv.Point(point1, point2);

    console.log("2");
    if (morphType == 'MORPH_OPEN') {

        console.log("3");
        if (borderType == 'BORDER_CONSTANT') {

            cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, val,
                cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

        }
        if (borderType == 'BORDER_REPLICATE') {

            cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, val,
                cv.BORDER_REPLICATE, cv.morphologyDefaultBorderValue());

        }
        if (borderType == 'BORDER_REFLECT') {

            cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, val,
                cv.BORDER_REFLECT, cv.morphologyDefaultBorderValue());

        }
        if (borderType == 'BORDER_WRAP') {

            cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, val,
                cv.BORDER_WRAP, cv.morphologyDefaultBorderValue());

        }
        if (borderType == 'BORDER_DEFAULT') {

            cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, val,
                cv.BORDER_DEFAULT, cv.morphologyDefaultBorderValue());

        }
        if (borderType == 'BORDER_ISOLATED') {

            cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, val,
                cv.BORDER_ISOLATED, cv.morphologyDefaultBorderValue());

        }
    }
    if (morphType == 'MORPH_CLOSE'){
        cv.morphologyEx(src, dst, cv.MORPH_CLOSE, M);
    }
    if (morphType == 'MORPH_GRADIENT'){
        cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
    }
    if (morphType == 'MORPH_TOPHAT'){
        cv.morphologyEx(src, dst, cv.MORPH_TOPHAT, M);
    }
    if (morphType == 'MORPH_BLACKHAT'){
        cv.morphologyEx(src, dst, cv.MORPH_BLACKHAT, M);
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
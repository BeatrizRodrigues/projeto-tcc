const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { Canvas, createCanvas, Image, ImageData, loadImage } = require('canvas');

exports.canny = async (imageBase64, threshold1, threshold2, apertureSize, gradientL2) => {
    try {
        installDOM();
        await loadOpenCV();

        const buffer = Buffer.from(imageBase64, 'base64');
        writeFileSync('inst.jpg', buffer);

        const imagem = await loadImage('inst.jpg');
        const src = cv.imread(imagem);

        let dst = new cv.Mat();
        cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0)

        cv.Canny(src, dst, threshold1, threshold2, apertureSize, gradientL2);

        const canvas = createCanvas(src.width, src.height);
        cv.imshow(canvas, dst);
        writeFileSync('outputCanny.jpg', canvas.toBuffer('image/jpeg'));
        src.delete();

        return canvas.getContext("2d");

    } catch (error) {
        throw error;
    }
    
};

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

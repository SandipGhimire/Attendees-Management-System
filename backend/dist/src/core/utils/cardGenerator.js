"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIdCard = generateIdCard;
const canvas_1 = require("@napi-rs/canvas");
const path_1 = __importDefault(require("path"));
const qrGenerator_1 = require("./qrGenerator");
const CARD_BG = path_1.default.join(process.cwd(), "public", "img", "card.png");
canvas_1.GlobalFonts.registerFromPath(path_1.default.join(process.cwd(), "public", "font", "Montserrat.ttf"), "Montserrat");
canvas_1.GlobalFonts.registerFromPath(path_1.default.join(process.cwd(), "public", "font", "PottaOne.ttf"), "PottaOne");
async function generateIdCard(data) {
    const template = await (0, canvas_1.loadImage)(CARD_BG);
    const canvasWidth = 3543;
    const canvasHeight = 4724;
    const canvas = (0, canvas_1.createCanvas)(canvasWidth, canvasHeight);
    const ctx = canvas.getContext("2d");
    if (data.profilePicBuffer) {
        const profile = await (0, canvas_1.loadImage)(data.profilePicBuffer);
        const fixedWidth = 1200;
        const aspectRatio = profile.height / profile.width;
        const drawWidth = fixedWidth;
        const drawHeight = fixedWidth * aspectRatio;
        const centerX = canvasWidth / 1.97;
        const drawX = centerX - drawWidth / 2;
        const drawY = 2100;
        ctx.drawImage(profile, drawX, drawY, drawWidth, drawHeight);
    }
    ctx.drawImage(template, 0, 0, canvasWidth, canvasHeight);
    const qrBuffer = await (0, qrGenerator_1.generateQRCode)({ text: data.qrCodeText, size: 2000 });
    const qrCode = await (0, canvas_1.loadImage)(qrBuffer);
    ctx.drawImage(qrCode, 2690, 2620, 730, 730);
    ctx.textAlign = "center";
    ctx.font = "500 150px PottaOne";
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(data.name, canvasWidth / 2, 3560);
    ctx.fillStyle = "#d71627";
    ctx.fillText(data.name, canvasWidth / 2, 3560);
    ctx.font = "bold 90px Montserrat";
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(data.position, canvasWidth / 2, 3715);
    ctx.fillStyle = "#03458e";
    ctx.fillText(data.position, canvasWidth / 2, 3715);
    ctx.font = "bold 90px Montserrat";
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#ffffff";
    ctx.strokeText(data.club, canvasWidth / 2, 3815);
    ctx.fillStyle = "#03458e";
    ctx.fillText(data.club, canvasWidth / 2, 3815);
    return Buffer.from(canvas.toBuffer("image/png"));
}
//# sourceMappingURL=cardGenerator.js.map
const PDFDocument = require('pdfkit');
const fs = require('fs');
const express=require('express');

let pdfDoc = new PDFDocument;
generateHeader(pdfDoc);
generateFooter(pdfDoc);
pdfDoc.pipe(fs.createWriteStream('Samplepdf.pdf'));
pdfDoc.text("My Sample PDF Document");
pdfDoc.end();

function generateHeader(pdfDoc) {
    pdfDoc
      .image("logo.jpg", 50, 45, { width: 50 })
      .fillColor("#444444")
      .fontSize(20)
      .text("Lion Inc.", 110, 57)
      .fontSize(10)
      .text("123 Koinange street", 200, 65, { align: "right" })
      .text("Nairobi, 10025", 200, 80, { align: "right" })
      .moveDown();
  }

  function generateFooter(pdfDoc) {
    pdfDoc
      .fontSize(10)
      .text(
        "Great minds think alike",
        50,
        780,
        { align: "center", width: 500 }
      );
  }
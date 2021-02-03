const PDFDocument = require('pdfkit');
const fs = require('fs');
const express=require('express');

let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
pdfDoc.text("My Sample PDF Document");
pdfDoc.end();
# PDF.js [![npm](https://img.shields.io/npm/v/pdfjs-forms-dist.svg?style=flat-square)](https://www.npmjs.com/package/pdfjs-forms-dist)

PDF.js is a Portable Document Format (PDF) library that is built with HTML5.
Our goal is to create a general-purpose, web standards-based platform for
parsing and rendering PDFs.

This is a pre-built version of the PDF.js Forms source code.

**T**o use in webpack first install:

    npm install pdfjs-forms-dist

Then include in your files:

    import pdfjsLib from 'pdfjs-forms-dist';
    import * as pdfjsViewer from 'pdfjs-forms-dist/web/pdf_viewer';
    import 'pdfjs-forms-dist/web/pdf_forms.css';
    
**Y**ou may need to set your pdf worker bundle in your code depending on how you configure your webpack:

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
to

    pdfjsLib.GlobalWorkerOptions.workerSrc = '../../build/webpack/pdf.worker.bundle.js';
    
    
**Y**ou may need to add to your webpack config:

    entry: {
        'pdf.worker': 'pdfjs-forms-dist/build/pdf.worker.entry'
    }    

See https://github.com/mozilla/pdf.js or https://github.com/mainegreen/pdf.js for learning and contributing.


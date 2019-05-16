import pdfjsLib from 'pdfjs-forms-dist';
import * as pdfjsViewer from 'pdfjs-forms-dist/web/pdf_viewer';
import 'pdfjs-forms-dist/web/pdf_forms.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = '../../build/webpack/pdf.worker.bundle.js';

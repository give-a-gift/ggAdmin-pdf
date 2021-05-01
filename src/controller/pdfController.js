import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../pdf/vfs_fonts";
import imageDict from "../pdf/image_dict";
import data from "../data"

pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
    THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew_Bold.ttf',
        italics: 'THSarabunNew_Italic.ttf',
        bolditalics: 'THSarabunNew_BoldItalic.ttf'
    },
    Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
        italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
    },

}
function formatData(payload) {
    return [
        {
            image: imageDict.imageDict.src[data.data.logo],
            width: 150,
            height: 150
        },
        { text: data.data.address, fontSize: 22, style: ['bold'] },
        { text: data.data.sender.header, fontSize: 18, style: ['bold'] },
        { text: payload.name.trim() },
        { text: payload.address.trim() },
        { text: data.data.sender.telHeader + payload.tel.trim() },
    ]
}

function printPDF(payload) {
    var docDefinition = {
        content: formatData(payload),
        defaultStyle: {
            fontSize: 15,
            font: 'THSarabunNew'
        },
        styles: {
            bold: {
                bold: true
            }
        }
    };
    pdfMake.createPdf(docDefinition).open()
}

const PDFController = { printPDF }
export default PDFController;
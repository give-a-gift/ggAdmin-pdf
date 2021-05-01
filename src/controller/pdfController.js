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
            table: {
                widths: [500],
                body: [
                    [
                        {
                            stack: [
                                {
                                    columns: [
                                        {
                                            image: imageDict.imageDict.src[data.data.logo],
                                            width: 110,
                                            height: 110
                                        },
                                        { text: data.data.address, fontSize: 20, style: ['bold'] },
                                    ], style: ['marginTopSender']
                                },
                                { text: data.data.sender.header, fontSize: 18, style: ['bold', 'marginTopLeft'] },
                                { text: payload.name.trim(), style: ['marginLeft'] },
                                { text: payload.address.trim(), style: ['marginLeft'] },
                                { text: data.data.sender.telHeader + " " + payload.tel.trim(), style: ['marginBottomLeft'] },
                            ]
                        }
                    ]
                ]
            }
        },
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
            bold: { bold: true },
            marginTopSender: { margin: [10, 10, 0, 0], },
            marginLeft: { margin: [300, 0, 25, 0], },
            marginTopLeft: { margin: [300, 20, 25, 0], },
            marginBottomLeft: { margin: [300, 0, 25, 20], }
        }
    };
    pdfMake.createPdf(docDefinition).open()
}

const PDFController = { printPDF }
export default PDFController;
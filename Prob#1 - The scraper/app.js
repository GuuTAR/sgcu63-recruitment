const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const baseUrl = 'https://rubnongkaomai.com/baan/'

const baanNameAll = ['abnormal', 'agape', 'buem', 'dork', 'duidui', 'indiana', 'judson', 'khunnoo', 'mheenoi', 'pak-tak-agard',
    'panarak', 'phee', 'rhoy', 'seiyw', 'tem',                                                                                  // size S 15
    'buchayun', 'dung', 'fyo', 'kids', 'koh', 'laijai', 'nhai', 'preaw', 'wang', 'wanted', 'work',                              // size M 11
    'aaum', 'jodeh-huesa', 'koom', 'por', 'sod', 'soeiteelheemouy',                                                             // size L 6
    'indy', 'jo+', 'rang', 'yim']                                                                                               // size XL 4

let baans = []

let baanCount = 0;

function Baan(name, description) {
    this.name = name
    this.description = description
}
for (let i = 0; i < baanNameAll.length; i++) {

    let url = baseUrl + baanNameAll[i]

    request(url, async function (err, response, html) {
        if (!err) {

            html = html.split('<br/>').join('$%#')

            let $ = cheerio.load(html)


            let BaanInfo = $('.baan-info-module--text-wrapper--uuYTz')

            const BaanName = BaanInfo.find('h1').first().text()
            const BaanDescription = BaanInfo.find('h3').first().text().split('$%#').join("<br/>")

            baans[i] = new Baan(BaanName, BaanDescription)
            baanCount++
            if (baanCount == baanNameAll.length) {
                createResultAsHTML()
            }
        }
    })
}

function createResultAsHTML() {
    let resultHtml = `
    <!DOCTYPE html>

    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <title>รายชื่อบ้านรับน้องและรายละเอียด</title>
        <style>
            body {
                background-color : #FFCCFF
            }
            #headTable {
                background-color : yellow
            }
            tr {
                background-color : white
            }
        </style>
    </head>
    <body>
        <center>
            <h1>รายชื่อบ้านรับน้องและสโลแกน</h1>
            <table border="1">
                <tr id="headTable">
                    <th width="200"><center>ชื่อบ้าน</center></th>
                    <th width="600"><center>สโลแกน</center></th>
                </tr>
                <tr>
                    <td>`+ baans[0].name + `</td>          
                    <td>`+ baans[0].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[1].name + `</td>          
                    <td>`+ baans[1].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[2].name + `</td>          
                    <td>`+ baans[2].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[3].name + `</td>          
                    <td>`+ baans[3].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[4].name + `</td>          
                    <td>`+ baans[4].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[5].name + `</td>          
                    <td>`+ baans[5].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[6].name + `</td>          
                    <td>`+ baans[6].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[7].name + `</td>          
                    <td>`+ baans[7].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[8].name + `</td>          
                    <td>`+ baans[8].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[9].name + `</td>          
                    <td>`+ baans[9].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[10].name + `</td>          
                    <td>`+ baans[10].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[11].name + `</td>          
                    <td>`+ baans[11].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[12].name + `</td>          
                    <td>`+ baans[12].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[13].name + `</td>          
                    <td>`+ baans[13].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[14].name + `</td>          
                    <td>`+ baans[14].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[15].name + `</td>          
                    <td>`+ baans[15].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[16].name + `</td>          
                    <td>`+ baans[16].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[17].name + `</td>          
                    <td>`+ baans[17].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[18].name + `</td>          
                    <td>`+ baans[18].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[19].name + `</td>          
                    <td>`+ baans[19].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[20].name + `</td>          
                    <td>`+ baans[20].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[21].name + `</td>          
                    <td>`+ baans[21].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[22].name + `</td>          
                    <td>`+ baans[22].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[23].name + `</td>          
                    <td>`+ baans[23].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[24].name + `</td>          
                    <td>`+ baans[24].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[25].name + `</td>          
                    <td>`+ baans[25].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[26].name + `</td>          
                    <td>`+ baans[26].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[27].name + `</td>          
                    <td>`+ baans[27].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[28].name + `</td>          
                    <td>`+ baans[28].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[29].name + `</td>          
                    <td>`+ baans[29].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[30].name + `</td>          
                    <td>`+ baans[30].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[31].name + `</td>          
                    <td>`+ baans[31].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[32].name + `</td>          
                    <td>`+ baans[32].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[33].name + `</td>          
                    <td>`+ baans[33].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[34].name + `</td>          
                    <td>`+ baans[34].description +`</td>
                </tr>
                <tr>
                    <td>`+ baans[35].name + `</td>          
                    <td>`+ baans[35].description +`</td>
                </tr>
            </table>
        </center>
    </body>
    </html>`
        fs.writeFile('table.html', resultHtml, function (err) {
        if (err) {
            throw err;
        }
    });
}





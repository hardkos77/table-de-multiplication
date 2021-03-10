let lengthTable = 40;
let html = "";

html +='table'

document.write('<table>')
for (i=1; i < lengthTable; i++) {
    document.write('<tr>')
    for(j=1; j < lengthTable; j++) {
        document.write(i==j ? `<td class="focus">`+ i*j + `</td>` : `<td>`+ i*j + `</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')


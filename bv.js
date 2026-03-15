let hexcode1 = document.getElementById("color1")
let hexcode2 = document.getElementById("color2")
let output = document.getElementById("output")

function combineColors() {
    let hex1 = hexcode1.value.toUpperCase()
    let hex2 = hexcode2.value.toUpperCase()
    let r1 = parseInt(hex1.slice(1, 3), 16);
    let g1 = parseInt(hex1.slice(3, 5), 16);
    let b1 = parseInt(hex1.slice(5, 7), 16);

    let r2 = parseInt(hex2.slice(1, 3), 16);
    let g2 = parseInt(hex2.slice(3, 5), 16);
    let b2 = parseInt(hex2.slice(5, 7), 16);

    let totalr = r1 + r2;
    let totalg = g1 + g2;
    let totalb = b1 + b2;
    let total_all = totalr + totalg + totalb

    let rproportion = totalr / 510;
    let gproportion = totalg / 510;
    let bproportion = totalb / 510;
    console.log(rproportion)
    let new_hexcode =
        "#" +
        Math.round(rproportion * 255).toString(16).padStart(2, "0") +
        Math.round(gproportion * 255).toString(16).padStart(2, "0") +
        Math.round(bproportion * 255).toString(16).padStart(2, "0");

    output.style.backgroundColor = new_hexcode

    console.log(hex1)
}


 
const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const yen = document.querySelector("#yen")

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
                som.addEventListener("input", (e) => {
                usd.value = (som.value / data.usd).toFixed(2);
                yen.value = (som.value * data.yen).toFixed(2)
            })
                usd.addEventListener("input", (e) => {
                som.value = (usd.value * data.usd).toFixed(2);
                yen.value = (usd.value * data.usd2).toFixed(3)
            })
            yen.addEventListener("input", (e) => {
                som.value = (yen.value / data.yen).toFixed(2);
                usd.value = (yen.value * data.usd2).toFixed(3)
            })
            elem.value === "" ? (target.value = "") || (target2.value = "") : null
        })
    })
}

convert(som, usd, yen)
convert(usd, som, yen)
convert(yen, som, usd)

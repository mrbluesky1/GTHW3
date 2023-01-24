const block = document.querySelector(".block")

const req = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response).results

        data.map((item) => {
            const block1 = document.createElement("div")
            const price = document.createElement("h3")
            const delivery = document.createElement("p")
            const name = document.createElement("p")
            const review = document.createElement("p")
            const img = document.createElement("img")
            const button = document.createElement("button")
            block1.style.height = "447px"
            block1.style.width = "253px"
            img.style.height = "337px"
            img.style.width = "253px"
            block1.style.margin = "0 22px 0"

            img.src = item.img
            name.innerText = item.name
            price.innerText = item.price
            delivery.innerText = item.delivery
            review.innerText = item.review
            button.innerText = "В корзину"

            block1.append(img)
            block1.append(price)
            block1.append(delivery)
            block1.append(name)
            block1.append(review)
            block1.append(button)
            block.append(block1)
        })
    })
}

req()
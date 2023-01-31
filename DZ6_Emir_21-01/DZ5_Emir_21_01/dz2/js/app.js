const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")


const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}


const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}


hideTabContent()
showTabContent()

let width = 0

function slider() {
    const slide = setInterval(() =>{
        width++
        if (width > 3) {
            width = 0
        }
        hideTabContent()
        showTabContent(width)
    }, 5000)
}

slider()


tabsParent.addEventListener("click", (e)=>{
    const target = e.target

    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item) {
                hideTabContent()
                showTabContent(i)
                width = i
            }
        })
    }
})



const modalTrigger = document.querySelector(".btn_white")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

modalCloseBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        closeModal()
    }
})

window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 3520) {
    openModal()
  }
}

const forms = document.querySelectorAll("form")

const serverModal = document.querySelector(".serverModal")
serverModal.style.display = "none"

const postData = (url) => {
    const res = fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: data
    })
    return res
}

const bindPostData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        // const request = new XMLHttpRequest()
        // request.open("POST", "server.php")
        // request.setRequestHeader("Content-Type", "application/json")

        const formData = new FormData(form)
        const object = {}

        formData.forEach((item, name) => {
            object[name] = item
        })

        const json = JSON.stringify(object)

        postData("server.php", json)
            .then((data) => console.log)
            .catch(() => console.error("error"))
            .finally(() => console.warn("final"))

        // request.send(json)
        //
        // request.addEventListener("load", ()=>{
        //     if (request.status === 200) {
        //         serverModal.style.display = "flex"
        //         const text = document.createElement("p")
        //         text.innerText = "OK :)"
        //         serverModal.append(text)
        //         const closeServer = ()=> {
        //             serverModal.style.display = "none"
        //             text.remove()
        //         }
        //         setTimeout(closeServer, 2000)
        //     } else {
        //         serverModal.style.display = "flex"
        //         const text = document.createElement("p")
        //         text.innerText = "not OK :("
        //         serverModal.append(text)
        //         const closeServer = ()=> {
        //             serverModal.style.display = "none"
        //             text.remove()
        //         }
        //         setTimeout(closeServer, 2000)
        //     }
        // })
    })
}

forms.forEach((item) => {
    bindPostData(item)
})
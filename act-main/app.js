import { func1  } from "./info.js";
import { func2 } from "./img.js";
import { cards, cardsTitle } from "./card.js";

const wrapper = document.querySelector(".wrapper")
const wrapper2 = document.querySelector(".wrapper2")
const wrapper3 = document.querySelector(".wrapper3")

const data = {
    title1: "This User is Designer>>",
    para: "Christian lou Cesar, live in gingoog city misamis oriental. I read in the class 5th in the section B. I read in the school New Era Ghaziabad. I am very punctual and like to do my all works throughout the day at right time. I love to eat simple and healthy food.",
    btn: "Click Here",
    img: "pic12.jpeg",
    proj: "Projects",
    img1: "./R.jpg",
    img2: "./R.jpg",
    img3: "./R.jpg",
    para1: "first card",
    para2: "second card",
    para3: "third card",
    btn1: "Click Here",
    btn2: "Click Here",
    btn3: "Click Here"
}


const { title1, para, btn, img, proj, para1, para2, para3,img1, img2, img3,btn1,btn2,btn3 } = data

wrapper.append(func1(title1, para, btn, img))
wrapper.append(func2(img))
wrapper3.append(cardsTitle(proj))
wrapper2.append(cards(img1, para1,btn1))
wrapper2.append(cards(img2, para2,btn2))
wrapper2.append(cards(img3, para3,btn3))

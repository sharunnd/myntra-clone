

const API = "https://63c642184ebaa80285423134.mockapi.io/products";

let containerEl = document.getElementById("container");
let fetchedData = [];
fetchData()
async function fetchData(){
    try {
        let request = await fetch(API);
        let data = await request.json();
        console.log(data)
        fetchedData = data.map(function (element){
            return {
                image : element.avatar,
                brand : element.brand,
                gender : element.gender,
                price : element.price
            }
        })
        display(fetchedData)
        console.log(fetchedData)
    } catch (error) {
        console.log(error)
    }
}


function display(data){
    containerEl.innerHTML="";
    data.forEach(element => {
        let card = document.createElement("div")


        let image = document.createElement("img")
        let brand = document.createElement("h3")
        let gender = document.createElement("p")
        let price = document.createElement("h4")
        let wishlistbtn = document.createElement("button")
        image.setAttribute("src",element.image)
        brand.innerText = element.brand;
        gender.innerText = element.gender;
        price.innerText = `Rs. ${element.price}`;
        wishlistbtn.innerText = "WISHLIST"
        wishlistbtn.addEventListener("click",(e)=>{
            e.preventDefault();
            alert("wishlist working")
        })
        card.append(image,wishlistbtn,brand,gender,price);
        containerEl.append(card);
    });
}
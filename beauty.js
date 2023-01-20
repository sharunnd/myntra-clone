

const API = "https://63c642184ebaa80285423134.mockapi.io/products";
const sortAPI = "https://63c642184ebaa80285423134.mockapi.io/products?orderBy=price&order=desc";
const categoryAPI = "https://63c642184ebaa80285423134.mockapi.io/products?filter=shampoo";

let containerEl = document.getElementById("container");
let previuosPage = document.querySelector(".next")
let personalCareCount = document.getElementById("personalCare");
let searchFormEl = document.getElementById("searchForm")
let categoryInp = document.getElementById("cat");
let sortEl = document.getElementById("sort")
let fetchedData = [];
fetchData()

searchFormEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    let searchInp = searchFormEl.Search.value;
    let filtered = fetchedData.filter(element=>{
            if(element.gender.toUpperCase().includes(searchInp.toUpperCase())==true){
                return true;
            }else{
                return false;
            }
        
    })
    console.log(filtered)
    display(filtered)

})

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
                price : element.price,
                category : element.category
            }
        })
        display(fetchedData)
        // displayCat(fetchedData)
        console.log(fetchedData)
    } catch (error) {
        console.log(error)
    }
}

async function fetchSortDesc(){
    try {
        let res2 = await fetch(sortAPI);
        res2 = await res2.json();
        console.log(res2)
        res2 = res2.map(function (element){
            return {
                image : element.avatar,
                brand : element.brand,
                gender : element.gender,
                price : element.price,
                category : element.category
            }
        })
        display(res2);
    } catch (error) {
        console.log(error)
    }
}
async function fetchCategory(){
    try {
        let res3 = await fetch(categoryAPI);
        res3 = await res3.json();
        console.log(res3)
        res3 = res3.map(function (element){
            return {
                image : element.avatar,
                brand : element.brand,
                gender : element.gender,
                price : element.price,
                category : element.category
            }
        })
        display(res3);
    } catch (error) {
        console.log(error)
    }
}
sortEl.addEventListener("change",(e)=>{
    e.preventDefault();
    if(sortEl.value==""){
        display(fetchedData)
    }else{
        if(sortEl.value=="highLow"){
            fetchSortDesc()
        }
    }
})
categoryInp.addEventListener("change",(e)=>{
    e.preventDefault();
    // let categoryInpValue = categoryInp.value;
    if(categoryInp.checked){
        fetchCategory()
    }else{
        display(fetchedData)
    }
});

// function displayCat(data){
//     data=data.filter(element=>{
//         if(categoryInp.checked==element.category){
//             return true;
//         }else{
//             display(data)
//         }
//     })
// }




function display(data){
    containerEl.innerHTML="";
    data.forEach(element => {
        let card = document.createElement("div")


        let image = document.createElement("img")
        let brand = document.createElement("h3")
        let gender = document.createElement("p")
        let price = document.createElement("h4")
        let category = document.createElement("h4")

        let wishlistbtn = document.createElement("button")
        image.setAttribute("src",element.image)
        brand.innerText = element.brand;
        gender.innerText = element.gender;
        price.innerText = `Rs. ${element.price}`;
        category.innerText = element.category;
        wishlistbtn.innerText = "WISHLIST"
        personalCareCount.innerText = data.length;
        wishlistbtn.addEventListener("click",(e)=>{
            e.preventDefault();
            alert("wishlist working")
        })



        card.append(image,brand,gender,price);
        containerEl.append(card);
    });
}
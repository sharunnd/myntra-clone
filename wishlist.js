let wishlistLS = JSON.parse(localStorage.getItem("wishlist-data")) || [];
let containerEl = document.getElementById("container");
let mywishlistItems = document.querySelector(".wishlist-items")
display(wishlistLS)
function display(data){
    containerEl.innerHTML="";
    data.forEach((element,index) => {
        let card = document.createElement("div")


        let image = document.createElement("img")
        let brand = document.createElement("h3")
        let gender = document.createElement("p")
        let price = document.createElement("h4")
        let category = document.createElement("h4")
        let removebtn = document.createElement("button")
        // let moveToBag = document.createElement("button")
        image.setAttribute("src",element.image)
        brand.innerText = element.brand;
        gender.innerText = element.gender;
        price.innerText = `Rs. ${element.price}`;
        category.innerText = element.category;
        removebtn.innerText = "X"
        mywishlistItems.innerText=data.length;
     
        // moveToBag.innerText = "MOVE TO BAG"

        removebtn.addEventListener("click",(e)=>{
            e.preventDefault();
            data=data.filter((el,i)=>{
                if(index==i){
                    return false;
                }else{
                    return true;
                }
            })
            localStorage.setItem("wishlist-data",JSON.stringify(data));
            display(data)
        })


        card.append(image,removebtn,brand,gender,price);
        containerEl.append(card);
    });

}
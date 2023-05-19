const fetched=fetch('https://fakestoreapi.com/products')
const items=document.querySelector('.items')
fetched.then(res=>res.json())
.then(data=>{
    data.forEach(el=>{
        console.log(data)
        
        items.innerHTML+=
    `
    <div class="col-3">
    <div class="card" id="${el.id}" style="width: 18rem;">
        <img src="${el.image}"
            class="card-img-top" alt="...">
        <div class="card-body card-main">
            <h5 class="card-title"></h5>
            <p class="card-text">${el.title}</p>
            <span>${el.rating.rate}<iclass="las la-comment-alt"></i>4</span>
            <button class="btn4 rounded">Faizsiz teklif</button>
            <button class="btn5 rounded">Ucuz tapsan,endirimle al</button>
            <button class="btn6 rounded"><i class="las la-home"></i>Stokta var</button>
            <div class="row">
                <div class="col-6">
                    <del>${el.price}</del>
                    <h4>${el.price}</h4>
                </div>
                <div class="col-6">${el.price}</div>
            </div>
            <button class="btn7"><i class="las la-shopping-cart"></i>Sebete elave et</button>
        </div>
    </div>
    </div>
    `
function BasketItem(id,count){
    this.Id = id;
    this.Count = count;
}

let btns = document.querySelectorAll(".btn7");

btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        let dataId = Number(this.parentNode.parentNode.getAttribute("id"));
        console.log(dataId)

        let basket = localStorage.getItem("basket")
        if(!basket){
            basket = []
        }
        else{
            basket = JSON.parse(basket)
        }
        
        let basketItem = basket.find(bi=>bi.Id == dataId)

        if(!basketItem){
            basketItem = new BasketItem(dataId,1)
            basket.push(basketItem);
        }
        else{
            basketItem.Count++;
        }

        localStorage.setItem("basket",JSON.stringify(basket))

    })
})
});
})



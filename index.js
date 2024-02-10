import { menuArray } from './data.js'

const MenuItemEle = document.getElementById('menu-items')
const checkoutEle = document.getElementById('checkout')

document.addEventListener('click', function(e){
    if(e.target.id === 'add-btn'){
        checkoutEle.style.display = 'block'
    }
})



function render(){

   return menuArray.map((dish)=>{
       return `<div class="dish-item">
       <div class="dish-item-inner">
           <img class="item-icon" src="${dish.icon}" alt="${dish.name}">
           <div class="item-inner-content">
               <p class="item-name">${dish.name}</p>
               <p class="item-desc">${dish.ingredients.join(',')}</p>
               <p class="item-price">$${dish.price}</p>
           </div>
           <i class="ri-add-circle-line add-btn" id="add-btn"></i>
       </div>
   </div>`
    }).join(' ')

    

//     <div class="dish-item">
//     <div class="dish-item-inner">
//         <img class="item-icon" src="images/item-pizza.png" alt="">
//         <!-- <p class="item-emoji">🍕</p> -->
//         <div class="item-inner-content">
//             <p class="item-name">Pizza</p>
//             <p class="item-desc">pepperoni,mushrom,mozarella</p>
//             <p class="item-price">$14</p>
//         </div>
//         <i class="ri-add-circle-line add-btn"></i>
//     </div>
// </div>
}


MenuItemEle.innerHTML = render()

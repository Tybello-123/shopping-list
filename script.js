window.addEventListener('load' , () => {
   const form = document.getElementById('form');
   const input = document.getElementById('enter-item');

   // get the list element
   //get the purchases element
   // get the wishlist element
   const listEl = document.querySelector('.row.items');
   const purchaseEl = document.querySelector('.row.purchases');
   const wishlistEl = document.querySelector('.row.wishlist');


   //add a submit event listener to the add item button so once the add item button is clicked
   form.addEventListener('submit', (e) => {
      //prevent the page from relaoding
      e.preventDefault();

      // set item to input value
      const item = input.value;

  //if input section(item) is empty alert a message
      if(!item){
         alert('Please select a item');
         return;
      }

// create a new item element by creating a new div element

      const itemEl = document.createElement('div');

// add the bootstrap class of col and css class of item to it

      itemEl.classList.add('col','item');


// create a new item content element (a direct child of item el)


      const itemContentEl = document.createElement('div');

   // add the bootstrap classes and css class of item to it content
      itemContentEl.classList.add('input-group','my-2','content');

   
// create a new item input element (a direct child of itemContentEl)


const itemInputEl = document.createElement('input');
itemInputEl.classList.add('form-control','text');
itemInputEl.type = "text";
itemInputEl.value = item;
itemInputEl.setAttribute('readonly','readonly');

//add the item input element to the item content element



//create a item edit button and append to item content element
const itemEditBtn = document.createElement('button');
itemEditBtn.innerText = 'Edit';
itemEditBtn.classList.add('btn','btn-warning','fw-bold','edit');

//create a item purchased button and append to item content element

const itemPurchasedBtn = document.createElement('button');
itemPurchasedBtn.classList.add('btn','btn-success','fw-bold', 'purchased');
itemPurchasedBtn.innerText = 'Purchased';


//create a wishlist button and append to item content element

const itemWishlistBtn = document.createElement('button');
itemWishlistBtn.classList.add('btn','btn-light','fw-bold', 'wishlist');
itemWishlistBtn.innerText = '❤';



//create a item delete button and append to item content element

const itemDeleteBtn = document.createElement('button');
itemDeleteBtn.classList.add('btn','btn-danger','fw-bold', 'delete');
itemDeleteBtn.innerText = 'Delete';

//create a wishlist button and append to item content element

const itemReturntBtn = document.createElement('button');
itemReturntBtn.classList.add('btn','btn-danger','fw-bold', 'return');
itemReturntBtn.innerText = 'Return';




//Append all the child to direct parent element
listEl.appendChild(itemEl);


itemEl.appendChild(itemContentEl);

// append these three components to the itemInput button
itemContentEl.appendChild(itemInputEl);
itemContentEl.appendChild(itemEditBtn);
itemContentEl.appendChild(itemPurchasedBtn);
itemContentEl.appendChild(itemWishlistBtn);
itemContentEl.appendChild(itemDeleteBtn);


//clear the input value

input.value = "";


// when the item edit button is clicked
itemEditBtn.addEventListener('click', () => {
   if(itemEditBtn.innerText.toLowerCase() === 'edit') {
      itemInputEl.removeAttribute('readonly');
      itemInputEl.focus();
      itemEditBtn.innerText = "Save";
   
   }else{
      itemInputEl.setAttribute('readonly', "readonly");
      itemEditBtn.innerText = 'Edit';
   }

});

itemWishlistBtn.addEventListener('click',  () => {
   //Append all the child to direct parent element
wishlistEl.appendChild(itemEl);
itemContentEl.appendChild(itemReturntBtn);
itemContentEl.removeChild(itemPurchasedBtn);
itemContentEl.removeChild(itemWishlistBtn);
itemContentEl.removeChild(itemDeleteBtn);
});


//when the delete button is clicked just remove the nearest child and it remvoes the others
itemDeleteBtn.addEventListener('click', () => {
   listEl.removeChild(itemEl);
   purchaseEl.removeChild(itemEl);
   wishlistEl.removeChild(itemEl);
});


//when the purchases button is clicked the first time 
itemPurchasedBtn.addEventListener('click', () => {
   //Append all the child to direct parent element
purchaseEl.appendChild(itemEl);
itemContentEl.appendChild(itemReturntBtn);
itemContentEl.removeChild(itemPurchasedBtn);
itemContentEl.removeChild(itemWishlistBtn);
itemContentEl.removeChild(itemDeleteBtn);


});



itemReturntBtn.addEventListener('click', () => {
   purchaseEl.removeChild(itemEl);
   listEl.appendChild(itemEl);
   itemEl.appendChild(itemContentEl);

// append these three components to the itemInput button
itemContentEl.appendChild(itemInputEl);
itemContentEl.appendChild(itemEditBtn);
itemContentEl.appendChild(itemPurchasedBtn);
itemContentEl.appendChild(itemWishlistBtn);
itemContentEl.appendChild(itemDeleteBtn);
itemContentEl.removeChild(itemReturntBtn);
  
});

itemReturntBtn.addEventListener('click', () => {

   wishlistEl.removeChild(itemEl);
   listEl.appendChild(itemEl);
   itemEl.appendChild(itemContentEl);

// append these three components to the itemInput button
itemContentEl.appendChild(itemInputEl);
itemContentEl.appendChild(itemEditBtn);
itemContentEl.appendChild(itemPurchasedBtn);
itemContentEl.appendChild(itemWishlistBtn);
itemContentEl.appendChild(itemDeleteBtn);
itemContentEl.removeChild(itemReturntBtn);
  
});


})

})

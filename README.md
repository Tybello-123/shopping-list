//
window.addEventListener('load', () => {
   const enterItem = document.getElementById('enter-item');
 
   // const addBtn = document.getElementById('add-btn');
 
 
 
   const form = document.getElementById('form');

   const listElement = document.querySelector('.row.items');
 
   form.addEventListener('submit', (e) => {
     e.preventDefalut();
 
 
     const item = enterItem.value;
 
     if (!item) {
       alert('please enter an item');
     }
 
 
     const listDiv = document.createElement('div');
     listDiv.classList.add('col-md', 'task');
   
     listElement.appendChild(listDiv);
 
     const inputDiv = document.createElement('input');
     inputDiv.classList.add('form-control', 'text');
     inputDiv.type = "text";
     inputDiv.value = "item";
     inputDiv.setAttribute('readonly', 'readonly');
     listDiv.appendChild(inputDiv);
 
 
     const editBtn = document.createElement('button');
     editBtn.classList.add('btn', 'btn-primary');
       listDiv.innerText = 'edit'
     listDiv.appendChild(editBtn);
 
     item = "";
     const deleteBtn = document.createElement('button');
     deleteBtn.classList.add('btn', 'btn-primary');
     listDiv.appendChild(deleteBtn);
        listDiv.innerText = 'delete'
 
 
 
     deleteBtn.addEventListener('click', () => {
       listElement.removeChild(editBtn);
     })

   })

})
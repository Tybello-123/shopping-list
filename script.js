window.addEventListener('load' , () => {
   const form = document.getElementById('form');
   const input = document.getElementById('enter-item');

   // get the list element
   const listEl = document.querySelector('.row.tasks');


   //add a submit event listener to the add item button so once the add item button is clicked
   form.addEventListener('submit', (e) => {
      //prevent the page from relaoding
      e.preventDefault();

      // set task to input value
      const task = input.value;

  //if input section(task) is empty alert a message
      if(!task){
         alert('Please select a task');
         return;
      }

// create a new task element by creating a new div element

      const taskEl = document.createElement('div');

// add the bootstrap class of col and css class of task to it

      taskEl.classList.add('col','task');


// create a new task content element (a direct child of task el)


      const taskContentEl = document.createElement('div');

   // add the bootstrap classes and css class of task to it content
      taskContentEl.classList.add('input-group','my-2','content');

   
// create a new task input element (a direct child of taskContentEl)


const taskInputEl = document.createElement('input');
taskInputEl.classList.add('form-control','text');
taskInputEl.type = "text";
taskInputEl.value = task;
taskInputEl.setAttribute('readonly','readonly');

//add the task input element to the task content element


//create a task edit button and append to task content element
const taskEditBtn = document.createElement('button');
taskEditBtn.innerText = 'Edit';
taskEditBtn.classList.add('btn','btn-warning','fw-bold','edit');

//create a task delete button and append to task content element

const taskDeleteBtn = document.createElement('button');
taskDeleteBtn.classList.add('btn','btn-warning','fw-bold', 'delete');
taskDeleteBtn.innerText = 'Delete';




//Append all the child to direct parent element
listEl.appendChild(taskEl);
taskEl.appendChild(taskContentEl);

// append these three components to the taskInput button
taskContentEl.appendChild(taskInputEl);
taskContentEl.appendChild(taskEditBtn);
taskContentEl.appendChild(taskDeleteBtn);



//clear the input value

input.value = "";

// add the task element button


// when the task edit button is clicked
taskEditBtn.addEventListener('click', () => {
   /*if the task edit button innerText is 'edit'
   remove the read only Attribute*/
   
   if(taskEditBtn.innerText.toLowerCase() === 'edit') {
      taskInputEl.removeAttribute('readonly');
      taskInputEl.focus();
      taskEditBtn.innerText = "Save";
   
   }else{
      taskInputEl.setAttribute('readonly', "readonly");
      taskEditBtn.innerText = 'Edit';
   }
 
})


//when the delete button is clicked just remove the nearest child and it remvoes the others
taskDeleteBtn.addEventListener('click', () => {
   listEl.removeChild(taskEl);
})



   })
})
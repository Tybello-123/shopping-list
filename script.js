window.addEventListener('load' , () => {
   const form = document.getElementById('form');
   const input = document.getElementById('enter-item');

   const listEl = document.querySelector('.row.tasks');

   form.addEventListener('submit', (e) => {
      //prevent the page from relaoding
      e.preventDefault();

      // set task to input value
      const task = input.value;
;
  //if input section(task) is empty alert a message
      if(!task){
         alert('Please select a task');
         return;
      }
// create a new task element by creating a new div element

      const taskEl = document.createElement('div');
      taskEl.classList.add('col','task');

// create a new task content element and add the class content which you will append the input element and div buttons to it
      const taskContentEl = document.createElement('div');

      taskContentEl.classList.add('input-group','my-2','content');


// create a new input element for the task

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

//append the edit btn and deletee btn to the actions element



listEl.appendChild(taskEl);
taskEl.appendChild(taskContentEl);
taskContentEl.appendChild(taskInputEl);
taskContentEl.appendChild(taskEditBtn);
taskContentEl.appendChild(taskDeleteBtn);



//clear the input value

input.value = "";

// add the task element button

taskEditBtn.addEventListener('click', () => {
   if(taskEditBtn.innerText.toLowerCase() === 'edit') {
      taskInputEl.removeAttribute('readonly');
      taskInputEl.focus();
      taskEditBtn.innerText = "Save";
   
   }else{
      taskInputEl.setAttribute('readonly', "readonly");
      taskEditBtn.innerText = 'Edit';
   }
 
})

taskDeleteBtn.addEventListener('click', () => {
   listEl.removeChild(taskEl);
})



   })
})
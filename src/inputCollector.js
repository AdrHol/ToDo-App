import taskManager from './taskManager';

const inputCollector = {

    categoryInput: function(){

       const input = document.querySelector('.new-category');
        let inputValue = input.value;
            if(inputValue != ''){
                taskManager.newCategory(inputValue);
                input.value = '';
            }

    },

    taskInput: function() {
        const input = document.querySelector('.task-input');
        const description = document.querySelector('.description');
        const expDate = document.querySelector('.expDate');
        const priority = document.querySelector('.priority-input');
         let inputValue = input.value;
        
            if(inputValue != ''){
                taskManager.newTask(inputValue, description.value, expDate.value, priority.value);
                input.value = '';
                description.value = '';
                expDate.value = '';
                priority.value = '';
            }
    }

};



export default inputCollector;
import taskManager from './taskManager';

const inputCollector = {

    categoryInput: function(){

       const input = document.querySelector('.new-category');
        let inputValue = input.value;
            if(inputValue != ''){taskManager.newCategory(inputValue);}

    },

    taskInput: function() {
        const input = document.querySelector('.task-input');
         let inputValue = input.value;
            if(inputValue != ''){taskManager.newTask(inputValue);}
    }

};



export default inputCollector;
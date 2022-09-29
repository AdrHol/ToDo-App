import workflow from "./workFlowController";

const render = {

    projectTree: function(array){

        const categoryList = document.querySelector('.category-list');
            categoryList.innerHTML = '';
            const ul = document.createElement('ul');
                array.forEach(project => {
                    const li = document.createElement('li');
                    li.classList.add('list-item');
                const button = document.createElement('button');
                button.textContent = project.name;
                button.setAttribute('value', `${project.id}`);
                    li.appendChild(button);
                        button.addEventListener('click', function(event){
                           let id = event.target.value;
                                workflow.change = id;
                        })
                    ul.appendChild(li);

                });

        categoryList.appendChild(ul);
    },

    taskList: function(array){

        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = '';
        array.forEach(task => {
            const li = document.createElement('li');
                li.classList.add('.task=list-element');
                li.textContent = `Title: ${task.title}`;
            taskList.appendChild(li);
        })
    }

}

export default render;
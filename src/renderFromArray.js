import workflow from "./workFlowController";
import taskControler from './taskControler';

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

        const workflowInfo = document.querySelector('.current-workflow');
            workflowInfo.textContent = `Workflow: ${workflow.getCurrentWorkflow}`;
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = '';
        array.forEach(task => {
            const li = document.createElement('li');
                li.classList.add('.task-list-element');
                li.setAttribute('id', `${task.id}`);
                li.textContent = `Title: ${task.title} || Description: ${task.description} ||
                Expiration date: ${task.expDate}`;
                const statusButton = document.createElement('button');
                    statusButton.classList.add('status-button');
                    statusButton.setAttribute('value', `${task.id}`)
                    statusButton.textContent = 'Done';
                    statusButton.addEventListener('click', function(e){
                        taskControler.changeStat(e.target.value);
                    });
                const removeButton = document.createElement('button');
                    removeButton.classList.add('remove-button');
                    removeButton.setAttribute('value', `${task.id}`);
                    removeButton.addEventListener('click', function(e){
                        taskControler.delete(e.target.value);
                    })
                    removeButton.textContent = 'Delete';
                const dateButton = document.createElement('button');
                    dateButton.classList.add('date-button');
                    dateButton.setAttribute('value', `${task.id}`);
                    dateButton.textContent = 'Change date';
                li.appendChild(statusButton);
                li.appendChild(removeButton);
                li.appendChild(dateButton)
            taskList.appendChild(li);
        })
    }

}

export default render;
import workflow from "./workFlowController";
import taskControler from './taskControler';
import dataObject from "./mainDataStorage";
import expirationControll from './expirationControll';

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
                Expiration date: ${task.expDate} || ${task.expirationMessage}`;
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
    },

    projectCard: function(project){
        const container = document.getElementById('section-right');
            container.innerHTML = '';
            const ul = document.createElement('ul');
                ul.classList.add('project-details-list');
                    const name = document.createElement('li');
                        name.classList.add('project-name');
                        name.textContent = project.name;
                    const description = document.createElement('li');
                        description.classList.add('project-description');
                            if (project.description === null){   
                                const descButton = document.createElement('button');
                                    descButton.classList.add('description-button');
                                    descButton.setAttribute('value', `${project.id}`)
                                        descButton.textContent = 'Add description';
                                    descButton.addEventListener('click', function(e){
                                        description.innerHTML = '';
                                        const inputDescription = document.createElement('input');
                                            inputDescription.setAttribute('id', 'input-description');
                                            inputDescription.setAttribute('type', 'text');
                                        description.appendChild(inputDescription);
                                    })
                                    description.appendChild(descButton);
                            } else {
                                description.textContent = project.description;
                            };

                    const projectDate = document.createElement('li');
                        projectDate.classList.add('date-description');
                        console.log(project.expDate);
                            if(project.expDate === null){
                                const dateButton = document.createElement('button');
                                    dateButton.classList.add('date-button');
                                    dateButton.setAttribute('value', `${project.id}`);
                                    dateButton.textContent = 'Add deadline';
                                        dateButton.addEventListener('click', function(e){
                                            projectDate.innerHTML = '';
                                            const dateInput = document.createElement('input');
                                                dateInput.setAttribute('type', 'datetime-local');
                                                dateInput.setAttribute('id', 'new-date-input');
                                            projectDate.appendChild(dateInput);
                                        })
                                        projectDate.appendChild(dateButton);
                            } else {
                                projectDate.textContent = project.expDate;
                            };

                    const save = document.createElement('li');
                        save.classList.add('button-project'); 
                            const saveButton = document.createElement('button');
                                saveButton.classList.add('save-button');
                                saveButton.textContent = 'Update'
                                    saveButton.addEventListener('click', function(e){
                                        const descriptText = document.getElementById('input-description');
                                        const setDateInput = document.getElementById('new-date-input');

                                        if(descriptText !== null) {
                                            project.description = descriptText.value;
                                        }

                                        if(setDateInput !== null) {
                                            project.expDate = setDateInput.value;
                                        }

                                        render.projectCard(project);
                                    })
                        save.appendChild(saveButton);
                    const deleteProject = document.createElement('li');
                        deleteProject.classList.add('button-project');
                            const deleteButton = document.createElement('button');
                                deleteButton.classList.add('delete-button');
                                deleteButton.textContent = 'Delete project';
                                    deleteButton.addEventListener('click', function(e){
                                        let id = project.getId();
                                        dataObject.deleteProjectById(id);
                                            container.innerHTML = '';
                                            const taskList = document.querySelector('.task-list');
                                                taskList.innerHTML = '';
                                        const projectList = dataObject.print;
                                            render.projectTree(projectList);
                                    })
                        deleteProject.appendChild(deleteButton);
                ul.appendChild(name);
                ul.appendChild(description);
                ul.appendChild(projectDate);
                ul.appendChild(save);
                ul.appendChild(deleteProject);
        container.appendChild(ul);
    }

}

export default render;
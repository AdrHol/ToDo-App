import dataObject from './mainDataStorage';
import render from "./renderFromArray";
import expirationController from './expirationControll';

const workflow = {

    value: 0,

    set change(value) {
        this.value = value;
            if(value == 0){
                const allTasks = dataObject.getAllTasks();
                let allTasksSorted = allTasks.sort(function (a,b){
                    return (Number(a.priority) - Number(b.priority))
                });
                    render.taskList(allTasksSorted);
            } else if (value == 1){
                const allTasks = dataObject.getAllTasks();
                    let sortedByDate = expirationController.getExpiring(allTasks);
                    render.taskList(sortedByDate);
            } else {
                this.changeWorkflowContent(value);
            }
       
    },
    
    changeWorkflowContent: function(value){
       const project = dataObject.findById(value);
       console.log(project);
                let projectTaskList = project.getTasks();
                let filteredProjectTaskList = projectTaskList.sort(function (a,b){
                    return (Number(a.priority) - Number(b.priority))
                });
                render.taskList(filteredProjectTaskList);
                render.projectCard(project);
    },
    
    get getCurrentWorkflow() {
        return this.value;
    },

    get workflowName () {
        let project = dataObject.findById(this.value);
            let output = project.name;
        return output;
    }

}

export default workflow;
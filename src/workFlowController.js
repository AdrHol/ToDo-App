import dataObject from './mainDataStorage';
import render from "./renderFromArray";

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
    },
    
    get getCurrentWorkflow() {
        return this.value;
    }


}

export default workflow;
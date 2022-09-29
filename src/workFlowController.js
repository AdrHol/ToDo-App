import dataObject from './mainDataStorage';
import render from "./renderFromArray";

const workflow = {

    value: 0,

    set change(value) {
        this.value = value;
        this.changeWorkflowContent(value);
    },
    
    changeWorkflowContent: function(value){
       const project = dataObject.findById(value);
       console.log(project);
                let projectTaskList = project.getTasks();
                render.taskList(projectTaskList);
    },
    
    get getCurrentWorkflow() {
        return this.value;
    }


}

export default workflow;
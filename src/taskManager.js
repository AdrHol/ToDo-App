import projectFactory from './projectFactory';
import dataObject from './mainDataStorage';
import render from './renderFromArray';
import workflowController from './workFlowController';
import taskFactory from './taskFactory';

const taskManager = {


    newCategory: function(value){
        const project = new projectFactory(value);
            dataObject.insert = project;
        const projectList = dataObject.print;
        render.projectTree(projectList);
    },

    newTask: function(value){
            const task = new taskFactory(value);
                let projectId = workflowController.getCurrentWorkflow;
                let project = dataObject.findById(projectId);
                    console.log(project);
                    project.addTask(task);
            render.taskList(project.getTasks());
    }

}

export default taskManager;
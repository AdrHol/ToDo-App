import dataObject from "./mainDataStorage";
import render from './renderFromArray';

const taskController = {
    
    changeStat: function(id){
        const field= document.getElementById(id);
            if(field.classList.contains('done')){
                field.classList.remove('done');
            } else {
                field.classList.add('done');
            }
            
    },
    delete: function(id){
        let project = dataObject.findById(id[1]);
            project.removeTaskById(id);
            project.updateTaskId();
        const field = document.getElementById(id);
            field.parentNode.removeChild(field);
            render.taskList(project.getTasks());
    }
}

export default taskController;
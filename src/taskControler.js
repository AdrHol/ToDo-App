import dataObject from "./mainDataStorage";
import render from './renderFromArray';

const taskController = {
    
    changeStat: function(id){
        const field= document.getElementById(id);
            if(field.classList.contains('done')){
                field.classList.remove('done');
                field.style.background = '#c1c1c1';
            } else {
                field.classList.add('done');
                field.style.background = '#bbf3b8';
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
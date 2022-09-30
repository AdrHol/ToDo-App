import dataObject from "./mainDataStorage";

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
        // console.log(project)
            project.removeTaskById(id);
        const field = document.getElementById(id);
            field.innerHTML = '';
    }
}

export default taskController;
const dataObject = {

database: [
    {
        name: 'All',
        id: 0,
    },
    {
        name: 'Upcoming',
        id: 1,
    },
],


get print() {
    return this.database;
},

set insert(value) {
    let idValue = this.database.length;
    value.id = idValue;
this.database.push(value)
},

findById: function(id){
    let result = this.database.find(project => project.id == id);
        return result;
},

getAllTasks: function(){
    let allTasks = []; 
    this.database.forEach(project => {
        if("tasks" in project){
            let test = project.getTasks();
                test.forEach(element => allTasks.push(element));
        }
    })
    console.log(allTasks);
    return allTasks;
},

deleteProjectById: function(id){
    this.database.splice(id, 1);
    this.updateIds();
    
},

updateIds: function(){
    this.database.forEach((element, index) => {
        element.id = index;
    })
}

}

export default dataObject;
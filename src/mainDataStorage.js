import expirationController from "./expirationControll";
const dataObject = {

database: [
    {
        name: 'All (sort by priority)',
        id: 0,
    },
    {
        name: 'Upcoming (sort by date)',
        id: 1,
    },
],


get print() {
    return this.database;
},

set insert(value) {
    // const project = Object.assign(new projectProto(), value);
    console.log(value);
    const project = Object.create(projectProto, value);
    let idValue = this.database.length;
    project.id = idValue;
this.database.push(project);
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
},

saveJSON: function(){
    const data = JSON.stringify(this.database)

    localStorage.setItem('projects', data);

},

getJSON: function(){
    return JSON.parse(localStorage.getItem('projects'));

},

}


const projectProto = {
    
        getTasks: function(){
            let tasklist = this.tasks;
                tasklist.forEach((task => {
                    let expiration = expirationController.checkExpiration(task);
                        task.setExpMessage(expiration);
                }))
                tasklist = tasklist.sort(function(a,b){
                    return (Number(a.priority) - (Number(b.priority)))
                })
            return tasklist;},
    
        getId: function(){
            return this.id
        },
    
        statusChange: function(){
            if (this.status === 'active'){
                this.status = 'unactive';
            } else if (this.status === 'unactive'){
                this.status = 'active'
            };
        },
        addTask: function(task){
            this.tasks.push(task);
            this.updateTaskId();
        },
        removeTaskById: function(id){
            this.tasks.splice(id[0], 1);
        },
        updateTaskId: function(){
            this.tasks.forEach((task, index) => {
                let id = `${index}` + `${this.id}`;
                task.updateId(id);
                
            });
        
        }
}

export default dataObject;
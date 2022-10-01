export default function ProjectFactory(value){
    this.name = value;
    this.type = 'project';
    this.tasks = [];
    this.status = 'active';
    this.expDate = null;
    this.value = null;
    this.id = null;

    this.getTasks = () => {
        let tasklist = this.tasks;
            tasklist = tasklist.sort(function(a,b){
                return (Number(a.priority) - (Number(b.priority)))
            })
        return tasklist;
    };
    this.statusChange = () => {
        if (this.status === 'active'){
            this.status = 'unactive';
        } else if (this.status === 'unactive'){
            this.status = 'active'
        };
    }
    this.addTask = (task) => {
        this.tasks.push(task);
        this.updateTaskId();
    },
    this.removeTaskById = (id) => {
        this.tasks.splice(id[0], 1);
    },
    this.updateTaskId = () => {
        this.tasks.forEach((task, index) => {
            let id = `${index}` + `${this.id}`;
            task.updateId(id);
            
        });
    }


}



// const projectObjTemplate = {
//     type: 'project',
//     name: 'Eating contest',
//     expDate: '19.02.3344',
//     tasks: [],
//     status: 'active',
// }
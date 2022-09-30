export default function ProjectFactory(value){
    this.name = value;
    this.type = 'project';
    this.tasks = [];
    this.status = 'active';
    this.expDate = null;
    this.value = null;

    this.getTasks = () => {
        let tasklist = this.tasks;
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
        let taskId = this.tasks.length;
            task.id = taskId;
        this.tasks.push(task);

    },
    this.removeTaskById = (id) => {
        this.tasks.splice(id[0], 1);
    }


}



// const projectObjTemplate = {
//     type: 'project',
//     name: 'Eating contest',
//     expDate: '19.02.3344',
//     tasks: [],
//     status: 'active',
// }
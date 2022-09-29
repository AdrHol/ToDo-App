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
        this.tasks.push(task);
    };


}



// const projectObjTemplate = {
//     type: 'project',
//     name: 'Eating contest',
//     expDate: '19.02.3344',
//     tasks: [],
//     status: 'active',
// }
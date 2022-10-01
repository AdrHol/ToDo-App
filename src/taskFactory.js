export default function TaskFactory(title, description, expDate, priority){
    this.title = title
    this.description = description,
    this.expDate = expDate, 
    this.priority = priority, 
    this.status = 'active',
    this.id = null,

    this.changeStatus = () => {
        if(this.status == 'active'){
            this.status = 'done';
        } else if (this.status == 'done'){
            this.status = 'active';
        }
    },
    this.updateId = (id) => {
        this.id = id;
    }
}
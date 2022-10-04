import expirationController from "./expirationControll";

export default function ProjectFactory(value){
    this.name = value;
    this.type = 'project';
    this.tasks = [];
    this.status = 'active';
    this.expDate = null;
    this.description = null;
    this.id = null;
}





// const projectObjTemplate = {
//     type: 'project',
//     name: 'Eating contest',
//     expDate: '19.02.3344',
//     tasks: [],
//     status: 'active',
// }
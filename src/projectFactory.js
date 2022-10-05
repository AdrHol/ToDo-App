import expirationController from "./expirationControll";

export default function ProjectFactory(value){
    const obj = {
    name : {value: value},
    type : {value: 'project'},
    tasks: {value: [],
    writable: true,},
    status: {value: 'active',
writable: true},
    expDate: {value: null,
    writable: true},
    description : {value: null},
    id: {value: null,
    writable: true},
}

return obj;
}





// const projectObjTemplate = {
//     type: 'project',
//     name: 'Eating contest',
//     expDate: '19.02.3344',
//     tasks: [],
//     status: 'active',
// }
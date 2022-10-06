import expirationController from "./expirationControll";

export default function ProjectFactory(value){
    const obj= {
        name: value,
        type: 'project',
        tasks: [],
        status: 'active',
        expDate: null,
        description: null,
        id: null,
  
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
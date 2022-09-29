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
}

}

export default dataObject;
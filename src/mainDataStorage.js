const dataObject = {

database: [
    {
        type: 'All',
    },
    {
        type: 'Upcoming',
    },
],


get print() {
    return this.database;
},

set insert(value) {
this.database.push(value)
},

}

export default dataObject;
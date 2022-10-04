import { compareAsc, formatDistance, formatDistanceStrict, parseISO } from "date-fns";

const expirationController = {


checkExpiration: function (element){

    let currentDate = new Date();
    let elementDate = parseISO(element.expDate);

    let result;
    if (compareAsc(currentDate, elementDate) == 1){
        result = `Expired ${formatDistanceStrict(elementDate, currentDate)} ago`;
        element.expired = true;
    } else if (compareAsc(currentDate, elementDate) == 0){
        result = 'today';
    }   else if (compareAsc(currentDate, elementDate) == -1){
        result = `${formatDistanceStrict(elementDate, currentDate)} until expiration`;
    }
    

    return result;

},

getExpiring: function(takslist){
    let output;

    output = takslist.sort((a,b) => {
        return compareAsc(parseISO(a.expDate), parseISO(b.expDate));
    });
    return output;
}

}

export default expirationController;
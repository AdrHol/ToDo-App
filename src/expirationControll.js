import { compareAsc, formatDistance, formatDistanceStrict, parseISO } from "date-fns";

const expirationController = {


checkExpiration: function (element){

    let currentDate = new Date();
    let elementDate = parseISO(element.expDate);

    let result;
    if (compareAsc(currentDate, elementDate) == 1){
        result = `Expired ${formatDistanceStrict(elementDate, currentDate)} ago`;
    } else if (compareAsc(currentDate, elementDate) == 0){
        result = 'today';
    }   else if (compareAsc(currentDate, elementDate) == -1){
        result = `${formatDistanceStrict(elementDate, currentDate)} until expiration`;
    }
    

    return result;

}

}

export default expirationController;
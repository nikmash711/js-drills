// function days(month, leapyear) {
//     if (month === 'February' && leapyear) {
//         result =   `${month} has 29 days!`;
//     } 
//     else if (month === 'February' && !leapyear) {
//         result = `${month} has 28 days!`;
//     }
//     else {
//         switch (month) {
//             case 'January':
//             case 'March':
//             case 'May':
//             case 'July':
//             case 'August':
//             case 'October':
//             case 'December':
//                 result = `${month} has 31 days!`;
//                 break;
//             case 'April':
//             case 'June':
//             case 'September':
//             case 'November':
//                 result = `${month} has 30 days!`;
//                 break;
//     }
//     }
//     return result;
// }

// console.log(days('April'));

function days(month, leapyear) {
        switch (month) {
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December':
                result = `${month} has 31 days!`;
                break;
            case 'April':
            case 'June':
            case 'September':
            case 'November':
                result = `${month} has 30 days!`;
                break;
            case 'February':
                if (leapyear) {
                    result =  `${month} has 29 days!`;
                } 
                else{
                    result = `${month} has 28 days!`;
                }
                break;
            default:
                throw new Error("Must provide a valid month.");
        }
        return result;
    }

    try{
        console.log(days('February', false));
    }
    catch(e){
        console.error(e.message);
    }

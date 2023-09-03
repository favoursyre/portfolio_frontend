///This contains all the utilities

///Libraries --> 

///Commencing the code

//logo = <a href="https://www.flaticon.com/free-icons/letter-f" title="letter f icons">Letter f icons created by arnikahossain - Flaticon</a>
//color = "#83DBB7"

///The backend api point
export const backend = "https://portfolio-web-backend-e4a59a4496db.herokuapp.com"

///This function capitalizes the first letter of every word
export const capitalizeFirstLetter = (str: string | undefined): string | undefined => {
    if (str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }
  }
  
///This function exports a array shuffler function
export const shuffleArray = (array: Array<any>): Array<any> => {
    if (array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    } else {
        return array
    }
    
}


///This function saves a value to localstorage
// export const setItem = (key: string, value: any): void => {
//     if (window.localStorage) {
//         let jsonData = JSON.stringify(value)
//         localStorage.setItem(key, jsonData);
//     } else {
//         null
//     }
// }
  
// export const getItem = (key: string): any => {
//     // Parse the retrieved data string back into an object
//     //console.log('Local: ', localStorage.getItem(key))
//     if (window.localStorage) {
//         const item = localStorage.getItem(key)
//         //console.log('Item New: ', item)
//         if (item === null) {
//             return null
//         } else {
//             if (item === "undefined") {
//                 return null
//             } else {
//                 return JSON.parse(item);
//             }
//         }
//     } else {
//         return null
//     }
// }

// ///This is used to remove the item
// export const removeItem = (key: string) => {
//     if (window.localStorage) {
//         localStorage.removeItem(key);
//     } else {
//         null
//     }
// }

///The hire modal key
export const hireModalKey: string = "syreHireModal"

///The hire modal context


///The function delays the code
export const sleep = (milliseconds: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }


///This has the project category list
export const categoryList: Array<string> = [
    "Web 2",
    "Blockchain",
    "Cyber Security",
    "AI/ML"
]

///This function returns all item with a key in array
export const getItemsByKey = (array: Array<any>, key: string, value: string | null): Array<any> => {
    if (array) {
        if (value) {
            return array.filter((arr) => arr[key] === value);
        } else {
            return array
        }
    } else {
        return array
    }
  }
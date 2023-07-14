///This contains all the utilities

///Libraries --> 

///Commencing the code

//logo = <a href="https://www.flaticon.com/free-icons/letter-f" title="letter f icons">Letter f icons created by arnikahossain - Flaticon</a>
//color = "#83DBB7"

///The backend api point
export const backend = "localhost:4200"

///This function capitalizes the first letter of every word
export const capitalizeFirstLetter = (str: string | undefined): string | undefined => {
    if (str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }
  }
  
///This function exports a array shuffler function
export const shuffleArray = (array: Array<any>): Array<any> => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
    return newArray;
}


///This function saves a value to localstorage
export const setItem = (key: string, value: any): void => {
    if (window.localStorage) {
        let jsonData = JSON.stringify(value)
        localStorage.setItem(key, jsonData);
    } else {
        null
    }
}
  
export const getItem = (key: string): any => {
    // Parse the retrieved data string back into an object
    //console.log('Local: ', localStorage.getItem(key))
    if (window.localStorage) {
        const item = localStorage.getItem(key)
        //console.log('Item New: ', item)
        if (item === null) {
            return null
        } else {
            if (item === "undefined") {
                return null
            } else {
                return JSON.parse(item);
            }
        }
    } else {
        return null
    }
}

///This is used to remove the item
export const removeItem = (key: string) => {
    if (window.localStorage) {
        localStorage.removeItem(key);
    } else {
        null
    }
}

///The hire modal key
export const hireModalKey: string = "syreHireModal"

///The hire modal context


///The function delays the code
export const sleep = (milliseconds: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
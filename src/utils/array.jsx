// En général les fonctions , surtout celles dans utils, doivent être testées auparavant

export const deepClone = (array) => { return JSON.parse(JSON.stringify(array)) }


export const findObjectById = (id, array) => { return array.find((itemInArray)=> itemInArray.id === id )  }


export const findIndexById = (idWithUnknownIndex, array) => { return array.findIndex((itemInArray) => itemInArray.id === idWithUnknownIndex
    ) }

export const removeObjectById = (idOfItemToRemove, array) => {
    return array.filter((item) => item.id !== idOfItemToRemove);
};

export const isEmpty = (array) => {
    return array.length === 0
}


// Exemple de test de la fonction deepClone

// const fruits = [{nom: "Abricot"}, {nom: "Banane"}]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log('fruits: ', fruits)
// console.log('fruitsShallowCopy: ', fruitsShallowCopy)
// console.log('fruitsDeepCopy: ', fruitsDeepCopy)
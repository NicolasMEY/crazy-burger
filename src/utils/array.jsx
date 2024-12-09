// En général les fonctions , surtout celles dans utils, doivent être testées auparavant

export const deepClone = (array) => { return JSON.parse(JSON.stringify(array)) }


export const find = (id, array) => { return array.find((itemInArray)=> itemInArray.id === id )  }


export const findIndex = (idWithUnknownIndex, array) => { return array.findIndex((itemInArray) => itemInArray.id === idWithUnknownIndex
    ) }

export const filter = (idOfItemToRemove, array) => {
    return array.filter((item) => item.id !== idOfItemToRemove);
};




// Exemple de test de la fonction deepClone

// const fruits = [{nom: "Abricot"}, {nom: "Banane"}]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log('fruits: ', fruits)
// console.log('fruitsShallowCopy: ', fruitsShallowCopy)
// console.log('fruitsDeepCopy: ', fruitsDeepCopy)
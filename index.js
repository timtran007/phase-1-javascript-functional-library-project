function arrayCollection(collection){
    if(collection instanceof Array){
        return collection.slice()
    } else{
        return Object.values(collection)
    }
}

const myEach = function(collection, callback){
    let newCollection = arrayCollection(collection)
    for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback){
    let newCollection = arrayCollection(collection)
    let newArray = []
    for (let i = 0; i < newCollection.length; i++){
        newArray.push(callback(newCollection[i]))
    }
    return newArray
}

function myReduce(collection, callback, accumulator){
    let newCollection = arrayCollection(collection)
    if (!accumulator){
        accumulator = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for(let i = 0; i < newCollection.length; i++){
        accumulator = callback(accumulator, newCollection[i], newCollection)
    }
    return accumulator
}

function myFind(collection, predicate){
    let newCollection = arrayCollection(collection)
    for(let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i])){
            return newCollection[i]
        }
    }
    return undefined
}

function myFilter(collection, predicate){
    let newCollection = arrayCollection(collection)
    let newArray = []
    for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
            newArray.push(newCollection[i])
        }
    }
    return newArray
}

function mySize(collection){
    let newCollection = arrayCollection(collection)
    for (let i = 0; i < newCollection.length; i++){
        return newCollection.length
    }
}

function myFirst(array, n){
    if (n){
        return array.slice(array, n)
    } else{
        return array[0]
    }
}


function myLast(array, n){
    if (n){
        return array.slice(array.length - n)
    } else{
        return array[array.length-1]
    }
}

function myKeys(object){
    let keys = []
    for(let key in object){
        keys.push(key)
    }
    return keys
}

function myValues(object){
    let collection = arrayCollection(object)
    let values = []
    for(let i = 0; i < collection.length; i++){
        values.push(collection[i])
    }
    return values
}
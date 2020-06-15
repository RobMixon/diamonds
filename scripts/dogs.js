



let bowWowKennels = [];

const petName = [
    {name: "doug"},
    {name:"steve"},
    {name:"ben"}
]

const petBreed = [
    {breed: "bulldog"},
    {breed: "husky"},
    {breed: "lab"}
]

const createDog = (name, breed) => {
   return {
        name: name.name,
        breed: breed.breed
    }
}

const chuck = createDog(petName[0], petBreed[0])
const doug = createDog(petName[1], petBreed[1])
const dam = createDog(petName[2], petBreed[2])

bowWowKennels.push(chuck, doug, dam)


console.log(bowWowKennels)
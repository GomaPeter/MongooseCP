const mongoose = require('./src/database/MongoDB')
const Person = require('./src/Person/PersonSchema')

// Create and save a new person
const newPerson = new Person({
    name: 'John',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });
  // Save the new person and handle the err if any arise
newPerson.save()
.then(savedPerson => {
  const personId = savedPerson._id;
  console.log('New person saved with ID:', personId);
})
.catch(err => {
  console.error(err);
});

  // Create multiple people using the create method
  const arrayOfPeople = [
    { name: 'Drake', age: 50, favoriteFoods: ['Rice', 'Salad'] },
    { name: 'Josh', age: 40, favoriteFoods: ['Cheieken', 'Steak'] },
    { name: 'Peter', age: 35, favoriteFoods: ['FriedRice', 'ColdSlur'] },
    { name: 'Paul', age: 15, favoriteFoods: ['CottonCandy', 'Steak'] },
    { name: 'Simi', age: 18, favoriteFoods: ['Pasta', 'MeatBall'] },
    { name: 'John', age: 22, favoriteFoods: ['Sushi', 'Steak'] }
  ];
  
  // Save multiple people and handle the errr if any arise
  Person.create(arrayOfPeople)
    .then(savedPeople => {
      console.log('Multiple people saved:', savedPeople);
    })
    .catch(err => {
      console.error(err);
    });

    // Find people with the name 'John'
    Person.find({ name: 'John' })
    .then(people => {
    console.log('People with name John:', people);
    })
    .catch(err => {
    console.error(err);
    });

     // Find one person who likes 'Pizza'
    Person.findOne({ favoriteFoods: 'Pizza' })
    .then(person => {
        console.log('Person who likes Pizza:', person);
    })
    .catch(err => {
        console.error(err);
    });
    
// Use the PersonID that is created in the Previous Step
const personId = '655e7f6005a2c2fd3526c9f7'

// Find a person by ID
Person.findById(personId)
.then(person => {
  console.log('Person by ID:', person);
})
.catch(err => {
  console.error(err);
});

// Update a person by pushing 'Hamburger' to their favoriteFoods
Person.findById(personId)
.then(person => {
  person.favoriteFoods.push('Hamburger');
  return person.save();
})
.then(updatedPerson => {
  console.log('Updated Person:', updatedPerson);
})
.catch(err => {
  console.error(err);
});

 // Update a person by name and set their age to 20
 const personName = 'Drake';
 Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true })
   .then(updatedPerson => {
     console.log('Updated Person by Name:', updatedPerson);
   })
   .catch(err => {
     console.error(err);
   });

  // Delete all people with the name 'Mary'
  Person.deleteMany({ name: 'Mary' })
  .then(result => {
    console.log('Deleted Mary:', result);
  })
  .catch(err => {
    console.error(err);
 });

 // Find people who like 'Burritos', sort, limit, select, and execute the query
 Person.find({ favoriteFoods: 'Burritos' })
 .sort({ name: 1 })
 .limit(2)
 .select({ age: 0 })
 .exec()
 .then(burritoLovers => {
   console.log('Burrito Lovers:', burritoLovers);
 })
 .catch(err => {
   console.error(err);
 });
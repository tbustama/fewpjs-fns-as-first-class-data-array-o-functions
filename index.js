function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(name, breed) {
  console.log(`Leash ${name} the ${breed}`);
  return `Leash ${name} the ${breed}`;
}

function walkToPark(name, breed) {
  const str = `Walk to the park with ${name} the ${breed}`;
  console.log(str);
  return str;
}

function throwFrisbee(name, breed) {
  const str = `Throw the frisbee for ${name} the ${breed}`;
  console.log(str);
  return str;
}
function walkHome(name, breed) {
  const str = `Walk home with ${name} the ${breed}`;
  console.log(str);
  return str;
}
function unleashDog(name, breed) {
  const str = `Unleash ${name} the ${breed}`;
  console.log(str);
  return str;
}
let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];
function exerciseDog(name, breed) {
  let result_arr = [];
  for (const funct of routine) {
    result_arr.push(funct(name, breed));
  }
  return result_arr;
}

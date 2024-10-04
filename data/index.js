const mondayMenu = {
  cheesePlate: {
    soft: "Chèvre",
    semiSoft: "Gruyère",
    hard: "Manchego",
  },
  fries: "Sweet potato",
  salad: "Cobb",
};
console.log(mondayMenu.salad);
function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value; //Why are we using bracket notation here?

  return obj;
}
function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");
const sundayMenu = nondestructivelyUpdateObject(
  tuesdayMenu,
  "fries",
  "Shoestring")
console.log(tuesdayMenu.salad);
console.log(mondayMenu.salad);
console.log(sundayMenu.fries);
////////////////////////////
const wednesdayMenu = {
  cheesePlate: {
    soft: "Brie",
    semiSoft: "Fontina",
    hard: "Provolone",
  },
  fries: "Sweet potato",
  salad: "Southwestern",
};

delete wednesdayMenu.cheesePlate;
//=> true

console.log(wednesdayMenu);



const sum = (a, b, c) => {
    let ntotal = a + b + c;
    console.log("Sum of these numbers is: " + ntotal);
  };
  
  sum(4, 8, 12);
  

  const colorCar = (color) => {
    console.log("a ${color} car");
  };
  
  colorCar("blue");
  

  const vehicleType = (color1, code) => {
    let type = code === 1 ? "car" : "motorbike";
    console.log('a ${color1} ${type}');
  };
  
  vehicleType("red", 2);
  
  
  console.log(3 === 3 ? console.log("yes") : console.log("no"));
  
  
  const vehicle = (color2, code2, age) => {
    let type1 = code2 === 1 ? "car" : "motorbike";
    let status = age <= 1 ? "new" : "used";
    console.log(`a ${color2} ${status} ${type1}`);
  };
  
  vehicle("blue", 1, 5);
  
  
  const vehicles = ["motorbike", "caravan", "bike", "car"];
  console.log(vehicles);
  
  
  console.log(vehicles[2]);
  
  
  const vehicle2 = (color3, code3, age2) => {
    let type2 = vehicles[code3 - 1];
    let status1 = age2 <= 1 ? "new" : "used";
    console.log(`a ${color3} ${status1} ${type2}`);
  };
  
  vehicle2("green", 3, 1);
  
  
  const message = (arr) => {
    let newStr = `"Amazing Joe's Garage, we service `;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i === 0) newStr = newStr + `and ${arr[i]}s."`;
      else {
        newStr = newStr + `${arr[i]}s, `;
      }
    }
    console.log(newStr);
  };
  
  message(vehicles);
  
  
  vehicles.push("truck");
  message(vehicles);
  
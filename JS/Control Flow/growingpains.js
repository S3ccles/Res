const PI= 3.1415;
const radius= 5;
const area= PI * radius * radius;
const minPlantSpace= 0.8;
const intialplantcount= 20;
const weeklyGrowthRate= 2;

// Calculate plant growth
function plantGrowth (weeks:any):any ;
let currentPlantCount = intialplantcount;
for (let i = 0; i < weeks; i++) {currentPlantCount=currentPlantCount * weeklyGrowthRate;
const maximumPlantCapacity = Math.floor(area / minimumPlantSpace);
  const eightyPercentLimit = Math.floor(maximumPlantCapacity * 0.8);
  const fiftyPercentLimit = Math.floor(maximumPlantCapacity * 0.5);
if (plantCount > eightyPercentLimit) {
    console.log('Action: Prune plants');
  } else if (plantCount > fiftyPercentLimit) {
    console.log('Action: Monitor plant growth');
  } else {
    console.log('Action: Plant more seedlings');
  }
}


let RajasthanRoyalsPlayers = [
  {
    name: "Yashasvi Jaiswal",
    role: "Batsman",
  },
  {
    name: "Sanju Samson",
    role: "Captain",
  },
  {
    name: "Dhruv Jurel",
    role: "Wicket Keeper",
  },
  {
    name: "Riyan Parag",
    role: "All Rounder",
  },
  {
    name: "Jofra Archer",
    role: "Bowler",
  },
  {
    name: "Shimron Hetmyer",
    role: "Batsman",
  },
  {
    name: "Tushar Deshpande",
    role: "Bowler",
  },
  {
    name: "Nitish Rana",
    role: "All Rounder",
  },
  {
    name: "Sandeep Sharma",
    role: "Bowler",
  },
  {
    name: "Shubham Dubey",
    role: "Batsman",
  },
  {
    name: "Yudhvir Singh",
    role: "Batsman",
  },
  {
    name: "Kunal Singh Rathore",
    role: "Batsman",
  },
  {
    name: "Ashok Sharma",
    role: "Bowler",
  },
  {
    name: "Kumar Kartikeya",
    role: "Bowler",
  },
  {
    name: "Vaibhav Suryavanshi",
    role: "Bowler",
  },
];

// RajasthanRoyalsPlayers.push({ name: "Rahul", role: "Batsman" });

// console.log(RajasthanRoyalsPlayers);
// RajasthanRoyalsPlayers.pop();
// console.log(RajasthanRoyalsPlayers);
// console.log(
//   RajasthanRoyalsPlayers.sort((a, b) => a.name.localeCompare(b.name))
// );
// console.log(RajasthanRoyalsPlayers);

// console.log(RajasthanRoyalsPlayers.reverse());
// console.log(RajasthanRoyalsPlayers);
// console.log(RajasthanRoyalsPlayers.shift());
// const roleCount = RajasthanRoyalsPlayers.reduce((acc, player) => {
//   acc[player.role] = (acc[player.role] || 0) + 1;
//   return acc;
// }, {});
// console.log(roleCount);

// RajasthanRoyalsPlayers.map((player) => {
//   console.log(`Player name : ${player.name} and role : ${player.role}`);
// });

let additionalPlayers = [
  { name: "Rahul Tewatia", role: "All Rounder" },
  { name: "Chris Morris", role: "All Rounder" },
];
let result = RajasthanRoyalsPlayers.concat(additionalPlayers);
console.log(result);

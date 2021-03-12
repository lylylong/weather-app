const items = [
  {
    id: 1,
    name: "Dan",
    value: 150,
  },
  {
    id: 2,
    name: "Peter",
    value: 300,
  },
  {
    id: 3,
    name: "Mark",
    value: 400,
  },
  {
    id: 4,
    name: "Victor",
    value: 600,
  },
];

const sum = items
  .map((item) => item.value)
  .reduce((prev, curr) => prev + curr, 0);

console.log(sum); // => 1450

// function amount(item) {
//   console.log(item.value);
//   return item.value;
// }
// items.filter(amount);

window.promises = [];
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 5 + 1), Math.random() * 5000))
];

Promise.any(promises)
  .then(result => {
    document.getElementById("output").innerText = `The first resolved promise had a value of ${result}.`;
  })
  .catch(error => {
    console.error(error);
  });
// Do not change the code above this
// add your promises to the array `promises`

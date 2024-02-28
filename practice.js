function x() {
  var a = 10;

  function y() {
    console.log(a);
  }
  y();
}

x();

function a() {
  console.log("a");
}
a();

console.log("end");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = 1;

    if (number >= 10) {
      resolve("This was resolved");
    } else {
      reject("This was rejected");
    }
  }, 1000);
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

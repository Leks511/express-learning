const express = require(`express`);
const app = express();

// const loggMw = (req, res, next) => {
//   if (req.path === `/asd`) {
//     console.log(`some`);
//   } else {
//     console.log(`Logged!`);
//   }
  
//   next()
// };

// const timestampLogger = (req, res, next) => {
//   req.requestTime = new Date();
//   next();
// }

const newMw = (options) => (req, res, next) => {
  const {dad, mom} = options;
  res.send(`My dad is ${dad.name}. He is ${dad.age} old. My mom is ${mom.name}. She is ${mom.age} old`);
};

// app.use(loggMw);
app.use(newMw({dad: {name: `Alex`, age: 27}, mom: {name: `Aline`, age: 29}}));
// app.use(timestampLogger);

app.get(`/`, (req, res) => {
  res.send(`Hello, world! Now is ${req.requestTime} time!`);
});

app.listen(3000)
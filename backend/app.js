const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const projectsRoutes = require('./routes/projects');
const tasksRoutes = require('./routes/tasks');

const app = express();
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb+srv://atif:68u4LL3mexy9XqFL@cluster0-p5zzg.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to monogoDB');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/api/projects", projectsRoutes);
app.use("/api/tasks", tasksRoutes);
module.exports = app;

const express = require('express');
const Task = require('../model/task');
const auth = require('../middleware/authenticate');

const router = express.Router();

router.post('/:projectId', auth, (req, res, next) => {
  console.log(req.body);
  const tasks = new Task({
    title: req.body.title,
    content: req.body.content,
    _projectId: req.params.projectId
  }); //req.body;
  tasks.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Task added successfully',
      taskId: result._id
    });
  });
});

router.put("/:id", auth, (req, res, next) => {
  Task.findOneAndUpdate({_id: req.params.id}, {
    _id: req.params.id,
    title: req.body.title,
    content: req.body.content
  }).then(() => {
    res.status(200).json({message: "Updated successfully!"});
  });
});


router.get('/:id', (req, res, next) => {
  console.log(req.params);
  Task.findById(req.params.id).then(task => {
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({
        message: 'Task not found!!',
      });
    }
  });
});

router.delete('/:id', auth, (req, res, next) => {
  console.log(req.params.id);
  Task.deleteOne({_id: req.params.id}).then(
    result => {
      console.log(result);
      res.status(200).json({message: 'Task deleted!'});
    }
  );
})

module.exports = router;

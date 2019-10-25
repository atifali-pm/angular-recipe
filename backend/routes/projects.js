const express = require('express');
const Project = require('../model/project');
const Task = require('../model/task');
const auth = require('../middleware/authenticate');

const router = express.Router();

router.post("", auth, (req, res, next) => {
  console.log(req.body);
  const projects = new Project({
    title: req.body.title,
    content: req.body.content
  }); //req.body;
  projects.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Project added successfully',
      projectId: result._id
    });
  });
});

router.put("/:id", auth, (req, res, next) => {
  Project.findOneAndUpdate({_id: req.params.id}, {
    _id: req.params.id,
    title: req.body.title,
    content: req.body.content
  }).then(() => {
    res.status(200).json({message: "Updated successfully!"});
  });
});

router.get('', (req, res, next) => {
  Project.find().then(documents => {
    res.status(200).json({
      message: 'Post fetched successfully!',
      projects: documents
    });
  });
});

router.get('/:id', (req, res, next) => {
  console.log(req.params);
  Project.findById(req.params.id).then(project => {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({
        message: 'Project not found!!',
      });
    }
  });
});

router.get('/:projectId/tasks', (req, res, next) => {
  Task.find({
    _projectId: req.params.projectId
  }).then(documents => {
    res.status(200).json({
      message: 'Tasks fetched successfully!',
      tasks: documents
    });
  });
});


router.delete('/:id', auth, (req, res, next) => {
  console.log(req.params.id);
  Project.deleteOne({_id: req.params.id}).then(
    result => {
      console.log(result);
      console.log(req.params.id);
      deleteTasksFromList(req.params.id);
      res.status(200).json({message: 'Project deleted!'});
    }
  );
})

/* HELPER METHODS */
let deleteTasksFromList = (_projectId) => {
  Task.deleteMany({
    _projectId
  }).then(() => {
    console.log("Tasks from " + _projectId + " were deleted!");
  })
}


module.exports = router;

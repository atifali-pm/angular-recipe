const express = require('express');
const Task = require('../model/task');

const router = express.Router();

router.post("/:projectId", (req, res, next) => {
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

// router.put("/:id", (req, res, next) => {
//   Project.findOneAndUpdate({_id: req.params.id}, {
//     _id: req.params.id,
//     title: req.body.title,
//     content: req.body.content
//   }).then(() => {
//     res.status(200).json({message: "Updated successfully!"});
//   });
// });
//
// router.get('', (req, res, next) => {
//   Project.find().then(documents => {
//     res.status(200).json({
//       message: 'Post fetched successfully!',
//       projects: documents
//     });
//   });
// });
//
// router.get('/:id', (req, res, next) => {
//   console.log(req.params);
//   Project.findById(req.params.id).then(project => {
//     if (project) {
//       res.status(200).json(project);
//     } else {
//       res.status(404).json({
//         message: 'Project not found!!',
//       });
//     }
//   });
// });
//
// router.delete('/:id', (req, res, next) => {
//   console.log(req.params.id);
//   Project.deleteOne({_id: req.params.id}).then(
//     result => {
//       console.log(result);
//       res.status(200).json({message: 'Project deleted!'});
//     }
//   );
// })

module.exports = router;

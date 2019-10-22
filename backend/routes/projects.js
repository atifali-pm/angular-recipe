const  express = require('express');
const Project = require('../model/project');

const router = express.Router();

router.post("", (req, res, next) => {
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

router.put("/:id", (req, res, next) => {
  const project = new Project({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  project.updateOne({_id: req.params.id}, project).then(result => {
    console.log(result);
    res.status(200).json({message: "Update successfully!"});
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
  Project.findById(req.params.id).then(project => {
    if (project) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: 'Project not found!!',
      });
    }
  });
});

router.delete('/:id', (req, res, next) => {
  console.log(req.params.id);
  Project.deleteOne({_id: req.params.id}).then(
    result => {
      console.log(result);
      res.status(200).json({message: 'Project deleted!'});
    }
  );
})

module.exports = router;

const Task = require("../models/Task");

const index = function() {
  Task.getAllTask(function(err, task) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", task);
    res.send(task);
  });
};

const create = function() {
  var new_task = new Task(req.body);

  //handles null error
  if (!new_task.task || !new_task.status) {
    res
      .status(400)
      .send({ error: true, message: "Please provide task/status" });
  } else {
    Task.createTask(new_task, function(err, task) {
      if (err) res.send(err);
      res.json(task);
    });
  }
};

const show = function(id) {
  Task.getTaskById(id, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

const update = function(id) {
  Task.updateById(id, new Task(req.body), function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

const destroy = function(id) {
  Task.remove(id, function(err, task) {
    if (err) res.send(err);
    res.json({ message: "Task successfully deleted" });
  });
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy
};

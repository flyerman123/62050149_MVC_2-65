// communicate between front-end and back-end (act like interface)
const messageModel = require("../models/model");

// getLastMessage
exports.getMessage = (req, res, next) => {
  const messages = messageModel.fetchAll((messages) => {
    res.send(messages);
  });
};

// postNewMessage
exports.newMessage = (req, res, next) => {
  const originalMessage = req.body;
  console.log(req.body);
  const message = new messageModel();
  const resMessage = message.manageMessage(originalMessage);
  // const messages = messageModel.fetchAll((messages) => {
  //   const message = req.body;
  //   res.send(messages);
  // });
  res.send(resMessage)
};

// Calculate Compensation
exports.calculate = (req, res, next) => {
  const id = req.body.id;
  const jobTitle = req.body.jobTitle;
  const yearSalary = req.body.yearSalary;
  const startWorkDate = req.body.startWorkDate;
  // form model
  const employee = new employeeModel(id, jobTitle, yearSalary, startWorkDate);
  employee.save();
  console.log(employee);
  res.sendStatus(200);
};



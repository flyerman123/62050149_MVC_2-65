// model -> handle data-related logic
const fs = require("fs");
const path = require("path");

// global path
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "history.json"
);

// utility function
// readFile -> callback
const getDataFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Message {
  constructor(originMessage, name, time, message) {
    this.originMessage = originMessage;
    this.name = name;
    this.time = time;
    this.message = message;
  }

  save() {
    getDataFromFile((message) => {
      var resMessage;
      //check exist user
      const existingUser = message.findIndex((mes) => mes.name === this.name);
      if (existingUser > 0) {
        resMessage = "Welcome again " + this.name + "! Anything else today?";
        this.message.console.log("exist user");
      } else {
        resMessage =
          "Welcome " +
          this.name +
          " to ChatCSIfElse, the best chat AI in the world! What can I help you?";
        console.log("new user");
      }
      history.push(this);
      fs.writeFile(p, JSON.stringify(history), (err) => {
        if (err) console.log(err);
      });
      return resMessage;
      // const updateusers = [...message];
      // updateusers[existingUser] = this;
      // fs.writeFile(p, JSON.stringify(updateusers), (err) => {
      //   if (err) console.log(err);
      // });
      // } else {
      //   //spilt message
      //   let messageArray = this.originMessage.split("###");
      //   this.name = messageArray[0];
      //   this.time = messageArray[1];
      //   this.message = messageArray[2];
      //   this.workDays = this.calculateWorkdays(this.startWorkDate);

      //   if (this.workDays > 60) {
      //     if (this.jobTitle == "junior") {
      //       this.compensation = this.workDays * (this.yearSalary / 365);
      //     } else if (this.jobTitle == "senior") {
      //       this.compensation = this.workDays * (this.yearSalary / 365) * 3;
      //     } else if (this.jobTitle == "manager") {
      //       this.compensation =
      //         this.workDays * (this.yearSalary / 365) * 5 + this.yearSalary / 2;
      //     }
      //   } else this.compensation = 0;

      //   //for not receive compensation
      //   this.paid = "no";
      //   message.push(this);
      //   fs.writeFile(p, JSON.stringify(message), (err) => {
      //     if (err) console.log(err);
      //   });
      // }
    });
  }

  manageMessage(originalMessage) {
    var resMessage = "I do not understand";
    //check valid message
    if (/^[\S]+#{3}\d+#{3}[\S]+$/.test(originalMessage)) {
      console.log(originalMessage);
      console.log(typeof originalMessage);
      //spilt message
      const messageArray = originalMessage.split("###");
      this.name = messageArray[0];
      this.time = messageArray[1];
      this.message = messageArray[2];
      const messages = new Message(
        originalMessage,
        this.name,
        this.time,
        this.message
      );
      fs.writeFile(p, JSON.stringify(messages), (err) => {
        if (err) console.log(err);
      });
    }
    return resMessage;
  }

  static fetchAll(cb) {
    getDataFromFile(cb);
  }
};

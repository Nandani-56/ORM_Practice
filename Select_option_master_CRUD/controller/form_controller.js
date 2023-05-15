
const express = require("express");

const db = require("../models");
const {
  setModel,
  insertData,
  readData,
  updateData,
  updateOptionMaster,
  insertOptionMaster,
  deleteData,
} = require("../repository/select_master_repo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const selectMaster = db.select_master;
const optionMaster = db.option_master;

const renderForm = async (req, res) => {
  res.render("form.ejs");
};
// Insert Data into select and option master
const insertMultipleSelectMasterData = async (req, res) => {
  let HTMLString = "";
  console.log(req.body);
  let length = Object.keys(req.body.name).length;
  console.log(length);

  for(i=0;i<length;i++){
    console.log("hELLO");
    let j = i+1
    optvalue = "optname_"+j
    console.log(optvalue);
    let optionValue = eval("req.body."+optvalue)
    console.log(optionValue.length,"hj");
   const optionArray = [];
   let optionObject;
    for(j=0;j<optionValue.length;j++){
      optionObject={optionValue:`${optionValue[j]}`}
      optionArray.push(optionObject)
    }
  
console.log(optionArray);

     await selectMaster.create({
      name : req.body.name[i],
      controllerType: req.body.controllerType[i],
      option_masters : optionArray
    },{
      include:[{
        model : optionMaster
      }]
    })

    if(req.body.controllerType[i]=='dropdown'){
      HTMLString += `<select> <option selected disabled>Select ${req.body.name[i]}</option>`;
    for (i = 0; i < optionArray.length; i++) {
      HTMLString += ` <option value="${optionArray[i].optionValue}"> ${optionArray[i].optionValue}</option>`;
    }
    HTMLString += `</select>`;
    console.log(HTMLString);
    }
  //   let s = req.body.controllerType[i];
  //   console.log(s);
  // let s1 = s.toLowerCase();
  // if (s1 == "dropdown") {
  //   HTMLString += `<select> <option selected disabled>Select ${req.body.name[i]}</option>`;
  //   for (i = 0; i < optionArray.length; i++) {
  //     HTMLString += ` <option value="${optionArray[i].optionValue}"> ${optionArray[i].optionValue}</option>`;
  //   }
  //   HTMLString += `</select>`;
  // } 
  // console.log(HTMLString);
  // return res.send(HTMLString);
  }

  // return res.json("inserted!!!")
}

module.exports = {
  renderForm,
  insertMultipleSelectMasterData
}

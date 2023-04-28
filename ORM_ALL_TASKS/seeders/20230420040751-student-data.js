'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const firstName = ['Nandani','Vishwa','Drashti','Prachi','Jay','Meet','Nisarg','Isha'];
    const lastName = ['Gajjar','Joshi','Mitaliya','Mehta','Patel','Desai'];
    
    const data =[]

    for(let i=0;i<100;i++){
      data.push({
        firstName : firstName[Math.floor(Math.random() * firstName.length)],
        lastName : lastName[Math.floor(Math.random() * lastName.length)],
        age : Math.floor(Math.random()*100),
        contactNumber : Math.floor(Math.random()*10000000000),
      });
    }
    await queryInterface.bulkInsert('Students',data,{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students',data,{});
  }
};

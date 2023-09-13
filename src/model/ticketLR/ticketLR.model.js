const { TicketLRSchema } = require("./ticketLR.schema");

const insertTicketLR = (ticketObj) => {
  return new Promise((resolve, reject) => {
    try {
      TicketLRSchema(ticketObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
    console.log("score!!", ticketObj);
  });
};

//- get All letters
const getTicketsLR = () => {
  return new Promise((resolve, reject, next) => {
    try {
      TicketLRSchema.find()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
    // try {
    //   TicketLRSchema.find()
    //     .then((data) => resolve(data))
    //     .catch((error) => reject(error));
    // } catch (error) {
    //   reject(error);
    // }
  });
};

module.exports = {
  // insertTicket,
  insertTicketLR,
  // getTickets,
  // getTickets1,
  getTicketsLR,
  // getTicketById,
  // getTicketById1,
  // updateClientReply,
  // deleteTicket,
};

const { TicketLRSchema } = require("../ticketLR/ticketLR.schema");
const { TicketSchema } = require("./ticket.schema");

const insertTicket = (ticketObj) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema(ticketObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
    console.log("score!!", ticketObj);
  });
};

const insertTicketLR = (ticketObj) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema(ticketObj)
        .save()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
    console.log("score!!", ticketObj);
  });
};

//- get all tickets by client id
const getTickets = (clientId) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema.find({
        clientId,
        // clientId: "636a914bb13dbb77bf58c471",
      })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

//- get All tickets
const getTickets1 = () => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema.find()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

//- get All letters
const getTicketsLR = () => {
  return new Promise((resolve, reject) => {
    try {
      TicketLRSchema.find()
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

//- get ticket by id
const getTicketById = (_id, clientId) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema.find({ _id, clientId })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

// get Any ticket by id
const getTicketById1 = (_id) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema.find({ _id })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const updateClientReply = (
  _id,
  fileNo,
  closeDate,
  fundDate,
  dealType,
  closerOne,
  commishClOne,
  closerTwo,
  commishClTwo,
  mobCloser,
  mobFee,
  overage,
  processorOne,
  commishPrOne,
  processorTwo,
  commishPrTwo,
  clientRefOne,
  clientRefTwo,
  realAgentOne,
  realAgentTwo,
  lnOfficer,
  salesRepOne,
  salesTypeOne,
  salesRepTwo,
  salesTypeTwo,
  discount,
  discountApproval,
  freedomCheck,
  message
) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema.findOneAndUpdate(
        { _id },
        {
          $set: {
            fileNo: fileNo,
            closeDate: closeDate,
            fundDate: fundDate,
            dealType: dealType,
            closerOne: closerOne,
            commishClOne: commishClOne,
            closerTwo: closerTwo,
            commishClTwo: commishClTwo,
            mobCloser: mobCloser,
            mobFee: mobFee,
            overage: overage,
            processorOne: processorOne,
            commishPrOne: commishPrOne,
            processorTwo: processorTwo,
            commishPrTwo: commishPrTwo,
            clientRefOne: clientRefOne,
            clientRefTwo: clientRefTwo,
            realAgentOne: realAgentOne,
            realAgentTwo: realAgentTwo,
            lnOfficer: lnOfficer,
            salesRepOne: salesRepOne,
            salesTypeOne: salesTypeOne,
            salesRepTwo: salesRepTwo,
            salesTypeTwo: salesTypeTwo,
            discount: discount,
            discountApproval: discountApproval,
            freedomCheck: freedomCheck,
            message: message,
          },
        }
        // { new: true }
      )

        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const deleteTicket = ({ _id }) => {
  return new Promise((resolve, reject) => {
    try {
      TicketSchema.findOneAndDelete({ _id })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

// GET ALL TICKETS

module.exports = {
  insertTicket,
  insertTicketLR,
  getTickets,
  getTickets1,
  getTicketsLR,
  getTicketById,
  getTicketById1,
  updateClientReply,
  deleteTicket,
};

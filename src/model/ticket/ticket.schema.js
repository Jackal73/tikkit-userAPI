const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectID,
    },

    fileNo: {
      type: String,
      maxlength: 15,
      required: true,
      default: "",
    },
    closeDate: {
      type: Date,
      required: false,
      default: "",
    },
    fundDate: {
      type: Date,
      required: true,
      default: "",
    },
    dealType: {
      type: String,
      possibleValues: ["BUYER", "SELLER", "BUYERSELLER", "REFI", "SIMO 2ND", "LETTERREPORT"],
      required: true,
      default: "",
    },
    closerOne: {
      type: String,
      required: true,
      default: "--",
    },
    commishClOne: {
      type: String,
      maxlength: 10,
      required: true,
      default: "--",
    },
    closerTwo: {
      type: String,
      maxlength: 50,
      required: false,
      default: "",
    },
    commishClTwo: {
      type: String,
      maxlength: 10,
      required: false,
      default: "",
    },
    mobCloser: {
      type: String,
      maxlength: 50,
      required: false,
      default: "",
    },
    mobFee: {
      type: String,
      maxlength: 10,
      required: false,
      default: "",
    },
    overage: {
      type: String,
      maxlength: 10,
      required: false,
      default: "--",
    },
    processorOne: {
      type: String,
      maxlength: 50,
      required: false,
      default: "--",
    },
    commishPrOne: {
      type: String,
      maxlength: 10,
      required: true,
      default: "--",
    },
    processorTwo: {
      type: String,
      maxlength: 50,
      required: false,
      default: "",
    },
    commishPrTwo: {
      type: String,
      maxlength: 10,
      required: false,
      default: "",
    },
    clientRefOne: {
      type: String,
      maxlength: 50,
      required: true,
      default: "",
    },
    clientRefTwo: {
      type: String,
      maxlength: 50,
      required: false,
      default: "",
    },
    realAgentOne: {
      type: String,
      maxlength: 50,
      required: false,
      default: "--",
    },
    realAgentTwo: {
      type: String,
      maxlength: 50,
      required: false,
      default: "",
    },
    lnOfficer: {
      type: String,
      maxlength: 50,
      required: false,
      default: "--",
    },
    salesRepOne: {
      type: String,
      maxlength: 50,
      required: true,
      default: "",
    },
    salesTypeOne: {
      type: String,
      possibleValues: ["Buyer", "Seller", "Buyer/Seller"],
      required: false,
      default: "",
    },
    salesRepTwo: {
      type: String,
      maxlength: 50,
      required: false,
      default: "",
    },
    salesTypeTwo: {
      type: String,
      possibleValues: ["Buyer", "Seller", "Buyer/Seller"],
      required: false,
      default: "",
    },
    discount: {
      type: String,
      possibleValues: ["Yes", "No"],
      required: true,
      default: "--",
    },
    discountApproval: {
      type: String,
      maxlength: 50,
      required: false,
      default: "",
    },
    freedomCheck: {
      type: String,
      maxlength: 10,
      required: true,
      default: "",
    },
    message: {
      type: String,
      maxlength: 1000,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  TicketSchema: mongoose.model("Ticket", TicketSchema),
};

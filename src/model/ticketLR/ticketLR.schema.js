const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketLRSchema = new Schema(
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
      default: "00/00/0000",
    },
    fundDate: {
      type: Date,
      required: true,
      default: "",
    },
    dealType: {
      type: String,
      possibleValues: ["LETTERREPORT"],
      required: true,
      default: "",
    },
    clientRefOne: {
      type: String,
      maxlength: 50,
      required: true,
      default: "",
    },
    salesRepOne: {
      type: String,
      maxlength: 50,
      required: true,
      default: "",
    },
    salesTypeOne: {
      type: String,
      possibleValues: ["BUYER", "SELLER", "BUYERSELLER"],
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
  TicketLRSchema: mongoose.model("TicketLR", TicketLRSchema),
};

const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    stage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stages",
      required: true,
    },
    pipeline: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pipelines",
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    },
    closuredate: {
      type: Date,
      default: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owners",
      required: true,
    },
    lead: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Leads",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Deal = mongoose.model("Deals", dealSchema);
module.exports = Deal;

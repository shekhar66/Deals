const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    winpercent:{
        type:Number,
        required:true,
        min: [1, 'Win Percentage must be above 1'],
        max: [100, 'Win Percent must be below 100'],
    },
    pipeline:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"pipelines"
    }
},{
    timestamps:true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const stageModel = mongoose.model('Stages',stageSchema)
module.exports = stageModel
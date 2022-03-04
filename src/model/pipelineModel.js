const mongoose = require('mongoose');

const pipelineSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

// Virtual populate
pipelineSchema.virtual('stages', {
  ref: 'Stages',
  foreignField: 'pipelines',
  localField: '_id'
});

const pipelineModel = mongoose.model('Pipelines',pipelineSchema)
module.exports = pipelineModel
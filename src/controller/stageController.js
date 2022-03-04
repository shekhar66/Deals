const Stage = require("../model/stageModel");
const handleAsyncError = require("../utils/handleAsyncError")
const APIFeatures = require("../utils/apiFeatures")

const addStage = handleAsyncError(async(req,res,next) =>{
    const stage = await Stage.create(req.body);
    res.status(201).json({
      status: 'success',
      data: stage,
    });
});

const updateStage = handleAsyncError(async(req,res,next) =>{
    const stage = await Stage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!stage) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data:stage
    });
});

const getStage = handleAsyncError(async(req,res,next) =>{
    const stage = await Stage.findOne({_id:req.params.id});
    if (!stage) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(200).json({
      status: 'success',
      data: stage
    });
});

const deleteStage = handleAsyncError(async(req,res,next) =>{
    const stage = await Stage.findOneAndDelete({_id:req.params.id});
    if (!stage) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
});

const getAllStages = handleAsyncError(async(req,res,next) =>{
    const features = new APIFeatures(Stage.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: doc
    });
});

module.exports = {
    addStage,
    getStage,
    updateStage,
    deleteStage,
    getAllStages
}
const mongoose = require('mongoose');
const {Schema} = mongoose;
const TheatreSchema = new Schema(
    {
        name: { type: String, default: '' },
        city: { type: String, required: true },
        location: { type: String, default: '' },
      Screen: { type: Number},
      photos:{
          type:String
      },
      desc:{
          type:[String],

      },
      rating:{
          type:Number,
          min:0,
          max:5
      },
      seats:{
          type:[string]
      },
      featured:{
          type:Boolean,
          default:false
      }
      
    },
    { timestamps: true }
  );
  
  const Theatre = mongoose.model('seats',TheatreSchema);
  module.exports = Theatre;
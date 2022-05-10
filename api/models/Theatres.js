const mongoose = require('mongoose');
const {Schema} = mongoose;
const TheatreSchema = new Schema(
    {
        name: { type: String, default: '' },
        city: { type: String, required: true },
        location: { type: String, default: '' },
      Screen: { type: Number},
      photos:{
          type:[String],
          default:'https://lh3.googleusercontent.com/p/AF1QipNO-BkFfS40xhuX0YBz1VXpcrFJpQjUnnon-jo=s1600-w400'
      },
      desc:{
          type:String,

      },
      rating:{
          type:Number,
          min:0,
          max:5
      },
      seats:{
          type:[String],
      },
      featured:{
          type:Boolean,
          default:false
      }
      
    },
    { timestamps: true }
  );
  
  const Theatre = mongoose.model('Theatre',TheatreSchema);
  module.exports = Theatre;
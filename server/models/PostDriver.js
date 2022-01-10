import mongoose from 'mongoose';

const driverScheme = mongoose.Schema({

    name: {type: String, required: true},
   

    //creator: String,
    ofArrayOfBills: [Number],
    checkOutTotal: Number,

    createdAt:{
        type: Date,
        default: new Date(),
    },

});

const PostDriver= mongoose.model('PostDriver', driverScheme);

export default PostDriver;
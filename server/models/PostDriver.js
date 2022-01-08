import mongoose from 'mongoose';

const driverScheme = mongoose.Schema({

    name: {type: String, required: true},
    dominosID: {type: String, required: true},

    //creator: String,

    ofArrayOfBills: [Number],
    checkOutTotal: Number,

    createdAt:{
        type: Date,
        default: new Date(),
    },

    notes: {type: String},
});

const PostDriver= mongoose.model('PostDriver', driverScheme);

export default PostDriver;
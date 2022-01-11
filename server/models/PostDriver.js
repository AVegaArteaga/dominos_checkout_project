import mongoose from 'mongoose';

const driverScheme = mongoose.Schema({
    
    name: {type: String, required: true},

    //
    bill1:  Number, 
    bill5:  Number, 
    bill10:  Number, 
    bill20:  Number, 
    bill50:  Number,
    bill100:  Number,

    checkOutTotal: {type: Number, required: true},

    createdAt:{
        type: Date,
        default: new Date(),
    },


});

const PostDriver= mongoose.model('PostDriver', driverScheme);

export default PostDriver;
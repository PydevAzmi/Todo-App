const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    title :{    
        type : String,
        required:true,
        min_length: [3, 'Title must be at least 3 characters long'],
    },
    is_done:{
        type: Boolean,
        default: false,
        null:true
    },
    time_created:{
        type: Date,
        default: Date.now,
        null : true
    }
})

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
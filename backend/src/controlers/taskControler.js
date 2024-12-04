//Task controller
const Task = require("../model/Tasks");

module.exports.getTasks = async (req, res) => {
    const completed = req.query.completed;
    console.log(completed);
    try {

        if (completed==="true"){
            const tasks = await Task.find({is_done: true});
            res.status(200).json(tasks);
            return;
        }
        else if (completed==="false") {
            const tasks = await Task.find({is_done: false});
            res.status(200).json(tasks);
            return;
        }
        else {
            const tasks = await Task.find();
            res.status(200).json(tasks);
            return;
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.createTask = async( req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports.retriveTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports.updateTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate({_id: id}, req.body, {new: true, runValidators: true});
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }
        res.status(200).json("mssage: Task deleted successfully");
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
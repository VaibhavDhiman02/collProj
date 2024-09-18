const mongoose = require('mongoose');
const ClassSchema = new mongoose.Schema(
    {   
        DepartmentName: {
            type: String,
            required: true,
        },
        ClassNumber: {
            type: String,
            required: true,
        },
    });

const Classes = mongoose.model("Classes", ClassSchema)
module.exports = Classes;
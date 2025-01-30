const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://namastedev:sZLYVypExuzd09XL@namastenode.hmqdp.mongodb.net/devTinder")
    
}

module.exports = connectDB;




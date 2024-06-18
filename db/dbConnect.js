const mongoose = require("mongoose");
const dbUrl = process.env.DBURL

const dbConnect = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('db working');
    } catch (error) {
        console.log('db working fail');
    }
}

dbConnect();
module.exports = dbConnect;

const mongoose =  require("mongoose");
const config =  require("../config");
const { MONGO_URI } = config;

const connectDB = async () =>{
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('open', function (ref) {
        console.log('Connected to mongo server.');
        //trying to get collection names
        mongoose.connection.db.listCollections().toArray(function (err, names) {
            console.log(names); // [{ name: 'dbname.myCollection' }]
            module.exports.Collection = names;
        });
    })
    console.log("DB Connecetd");
}


module.exports = connectDB;

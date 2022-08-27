const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://vinayak:vinayak@shopit.wuabveo.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
       // useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase
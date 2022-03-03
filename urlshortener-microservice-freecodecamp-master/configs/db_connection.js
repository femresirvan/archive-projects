const mongoose = require('mongoose');
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongo bağlantısı yapıldı");
})
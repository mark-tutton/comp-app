const mongodb = require('mongodb')

const connectionString = 'mongodb+srv://complexApp:VLlrdRPAmwpJvxSo@cluster0-pk0kc.mongodb.net/ComplexApp?retryWrites=true&w=majority'

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})
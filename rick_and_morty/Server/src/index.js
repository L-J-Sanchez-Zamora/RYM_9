const server = require('./app')
const PORT = 3002
const { conn } = require('./DB_connection');

conn.sync({force:false})

server.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))
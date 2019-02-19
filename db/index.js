
const { Pool, Client } = require('pg')
const connectionString = 'postgresql://pluck:plucker@database.server.com:6457/pluck'

const pool = new Pool({
    connectionString: connectionString,
})

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })

const client = new Client({
    connectionString: connectionString,
})
client.connect()

// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })
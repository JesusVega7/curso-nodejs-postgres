const { Client } = require('pg');

async function getConnection() {

    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'VoidRes',
        password: 'lalala123',
        database: 'my_store', 
    });
    console.log('connecting')
    await client.connect();
    console.log(client, 'el cliente')
    return client;
}

module.exports = getConnection;
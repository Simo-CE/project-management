const expres = require('express');
require('dotenv').config({ path: '../.env' });
const { graphqlHTTP } = require('express-graphql');
const app = expres();
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors')

app.use(cors())

// Connect to DB
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == 'development',
}))

app.get('/', (req, res) => {
    res.send('Hello world');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server up and running on port', port);
});
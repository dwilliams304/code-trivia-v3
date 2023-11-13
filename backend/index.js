const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`\n *** Server running on port ${PORT} *** \n`);
})
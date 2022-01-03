const express = require('express');
const db = require('../db/db');
const router = require('../routes/index');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            notes: "/api/notes"
        }
        this.middlewares();
        this.setRoutes();
        this.connectDb();
    }
    setRoutes() {
        this.app.use(this.paths.notes, router.notesRouter)
    }
    middlewares() {
        this.app.use(express.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("running on port:" + this.port);
        })
    }

    async connectDb() {
        await db.authenticate();
        await db.sync();
    }

}

module.exports = Server;
import express from 'express';
import routes from './routes/web.js';
import path from 'path';
import session from 'express-session';
import { default as connectMongoDBSession} from 'connect-mongodb-session';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import { connect } from './config/database.js';
config();
connect(); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
const mongoDBStore = connectMongoDBSession(session);
const { MONGO_URI } = process.env;
const store = new mongoDBStore({
    uri: MONGO_URI, 
    collection: 'sessions',
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', __dirname + '/src/views');
app.set("view engine", "pug");

app.use('/', express.static(__dirname + '/src'));

app.use(
    session({
        secret: 'key that will sign cookie',
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: { maxAge: 1000*60*60, },
    })
);

app.use('/', routes);


app.listen(PORT, () => {
    console.log(`App listenning at http://localhost:${PORT}`);
});

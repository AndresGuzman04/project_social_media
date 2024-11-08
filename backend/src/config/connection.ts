import mongoose from 'mongoose'
import config from './config';

//connection automatic
(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABE}`);
        console.log('database is connected to:', db.connection.name);
    } catch (error) {
        console.error(error)
    }
})()
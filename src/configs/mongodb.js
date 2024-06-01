import mongoose from 'mongoose'
import {DATABASE_URI, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_AUTH_SOURCE} from './constants'

class MongoDB {
    async connect() {
        await mongoose.connect(DATABASE_URI, {
            dbName: DB_NAME,
            user: DB_USERNAME,
            pass: DB_PASSWORD,
            autoCreate: true,
            autoIndex: true,
            connectTimeoutMS: 5000,
            socketTimeoutMS: 5000,
            serverSelectionTimeoutMS: 5000,
            authSource: DB_AUTH_SOURCE,
        })
        console.log('MongoDB is connected.')
    }
    close(force) {
        return mongoose.connection.close(force)
    }
    transaction(...args) {
        return mongoose.connection.transaction(...args)
    }
    isDisconnected() {
        return mongoose.connection.readyState === 0
    }
}

export default MongoDB

import {db} from '@/configs'
import userSeeder from './user.seeder'

async function seed() {
    await db.transaction(async function (session) {
        console.log('Initializing data...')

        await userSeeder(session)

        console.log('Data has been initialized!')
    })
}

db.connect().then(seed).then(db.close)

import {User} from '@/models'

async function userSeeder(session) {
    let email = process.env.SUPER_ADMIN_EMAIL
    let password = process.env.SUPER_ADMIN_PASSWORD
    if (!email || !password) {
        email = 'admin@zent.vn'
        password = 'Zent@123.edu.vn'
        console.log('---------------------------------------------------------------')
        console.warn('"Super Admin" is not configured. Using the default account:')
        console.warn(`Email: ${email}`)
        console.warn(`Password: ${password}`)
        console.log('---------------------------------------------------------------')
    }

    await User.findOneAndUpdate(
        {email},
        {password, name: 'Super Admin'},
        {upsert: true, session}
    )
}

export default userSeeder

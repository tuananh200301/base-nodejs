import nodeMailer from 'nodemailer'
import ejs from 'ejs'
import path from 'path'
import {
    MAIL_HOST,
    MAIL_PORT,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    MAIL_FROM_ADDRESS,
    MAIL_FROM_NAME,
    VIEW_DIR,
} from '@/configs'

const transport = nodeMailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: false,
    auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
})

export async function sendMail(to, subject, template, data, fromName) {
    const html = await ejs.renderFile(path.join(VIEW_DIR, template), data)
    return await transport.sendMail({
        from: {
            address: MAIL_FROM_ADDRESS,
            name: fromName || MAIL_FROM_NAME,
        },
        to,
        subject,
        html,
    })
}

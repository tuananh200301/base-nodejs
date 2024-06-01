import cors from 'cors'
import {APP_URL_CLIENT, OTHER_URLS_CLIENT} from '@/configs'

const corsHandler = cors({
    origin: [APP_URL_CLIENT, ...OTHER_URLS_CLIENT],
    credentials: true,
})

export default corsHandler

import path from 'path'
import short from 'short-uuid'
import dotenv from 'dotenv'
import assert from 'assert'
import _ from 'lodash'

// Loads `.env` file contents into process.env
dotenv.config()

// directory
export const SOURCE_DIR = path.dirname(__dirname)
export const APP_DIR = path.dirname(SOURCE_DIR)
export const NODE_MODULES_DIR = path.join(APP_DIR, 'node_modules')
export const PUBLIC_DIR = path.join(APP_DIR, 'public')
export const PRIVATE_DIR = path.join(APP_DIR, 'private')
export const LOG_DIR = path.join(PRIVATE_DIR, 'logs')
export const CACHE_DIR = path.join(PRIVATE_DIR, 'cache')
export const VIEW_DIR = path.join(SOURCE_DIR, 'views')

// environment
export const APP_ENV = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}
export const NODE_ENV = Object.values(APP_ENV).includes(process.env.NODE_ENV)
    ? process.env.NODE_ENV
    : APP_ENV.DEVELOPMENT

export const APP_NAME = process.env.APP_NAME
export const APP_DEBUG = NODE_ENV === APP_ENV.PRODUCTION ? false : process.env.APP_DEBUG === 'true'
export const APP_URL_API = process.env.APP_URL_API
export const APP_URL_CLIENT = process.env.APP_URL_CLIENT
export const OTHER_URLS_CLIENT = process.env.OTHER_URLS_CLIENT
    ? JSON.parse(process.env.OTHER_URLS_CLIENT)
    : []
assert(_.isArray(OTHER_URLS_CLIENT), 'OTHER_URLS_CLIENT must be an array.')

assert(!_.isEmpty(process.env.SECRET_KEY), 'Missing SECRET_KEY. Please configure the SECRET_KEY variable for security.')
export const SECRET_KEY = process.env.SECRET_KEY

assert(!_.isEmpty(process.env.LOGIN_EXPIRE_IN), 'Missing LOGIN_EXPIRE_IN. Please configure LOGIN_EXPIRE_IN for user login expiration.')
export const LOGIN_EXPIRE_IN = process.env.LOGIN_EXPIRE_IN

export const REQUESTS_LIMIT_PER_MINUTE = parseInt(process.env.REQUESTS_LIMIT_PER_MINUTE, 10) || 1000

export const LINK_STATIC_URL = `${APP_URL_API}/static/`
export const LINK_RESET_PASSWORD_URL = `${APP_URL_CLIENT}/reset-password`

assert(!_.isEmpty(process.env.DB_HOST), 'Missing DB_HOST. Please configure the DB_HOST variable for database connection.')
assert(!_.isEmpty(process.env.DB_NAME), 'Missing DB_NAME. Please configure the DB_NAME variable for database connection.')
assert(!_.isEmpty(process.env.DB_AUTH_SOURCE), 'Missing DB_AUTH_SOURCE. Please configure the DB_AUTH_SOURCE variable for database connection.')
export const DATABASE_URI =
    'mongodb' +
    (process.env.DB_PORT ? '' : '+srv') +
    '://' +
    process.env.DB_HOST +
    (process.env.DB_PORT ? ':' + process.env.DB_PORT : '')
export const DB_NAME = process.env.DB_NAME
export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_AUTH_SOURCE = process.env.DB_AUTH_SOURCE

assert(!_.isEmpty(process.env.MAIL_HOST), 'Missing MAIL_HOST. Please configure the MAIL_HOST variable to send mail.')
assert(!_.isEmpty(process.env.MAIL_PORT), 'Missing MAIL_PORT. Please configure the MAIL_PORT variable to send mail.')
assert(!_.isEmpty(process.env.MAIL_USERNAME), 'Missing MAIL_USERNAME. Please configure the MAIL_USERNAME variable to send mail.')
assert(!_.isEmpty(process.env.MAIL_PASSWORD), 'Missing MAIL_PASSWORD. Please configure the MAIL_PASSWORD variable to send mail.')
export const MAIL_HOST = process.env.MAIL_HOST
export const MAIL_PORT = process.env.MAIL_PORT
export const MAIL_USERNAME = process.env.MAIL_USERNAME
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD
export const MAIL_FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS
export const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME

// other
export const TOKEN_TYPE = {
    AUTHORIZATION: 'AUTHORIZATION',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD'
}
export const MAX_STRING_SIZE = 255

export const UUID_TRANSLATOR = short()

export const STATUS_DEFAULT_MESSAGE = {
    401: 'Vui lòng đăng nhập để tiếp tục.',
    403: 'Xin lỗi, bạn không được phép truy cập.',
    404: 'Đường dẫn không tồn tại.',
    429: 'Có quá nhiều yêu cầu. Vui lòng thử lại sau.',
    500: 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
}

export const JOI_DEFAULT_MESSAGE = {
    // boolean
    'boolean.base': '{{#label}} sai định dạng.',

    // string
    'string.base': '{{#label}} sai định dạng.',
    'string.empty': '{{#label}} không được bỏ trống.',
    'string.min': '{{#label}} không được ít hơn {{#limit}} ký tự.',
    'string.max': '{{#label}} không được vượt quá {{#limit}} ký tự.',
    'string.pattern.base': '{{#label}} không đúng định dạng.',
    'string.email': '{{#label}} không đúng định dạng.',

    // number
    'number.base': '{{#label}} sai định dạng.',
    'number.integer': '{{#label}} sai định dạng.',
    'number.min': '{{#label}} không được nhỏ hơn {{#limit}}.',
    'number.max': '{{#label}} không được lớn hơn {{#limit}}.',

    // array
    'array.base': '{{#label}} sai định dạng.',
    'array.unique': 'Các {{#label}} không được giống nhau.',
    'array.min': '{{#label}} không được ít hơn {{#limit}} phần tử.',
    'array.max': '{{#label}} không được vượt quá {{#limit}} phần tử.',
    'array.length': '{{#label}} phải có đúng {{#limit}} phần tử.',
    'array.includesRequiredUnknowns': '{{#label}} không hợp lệ.',
    'array.includesRequiredKnowns': '{{#label}} không hợp lệ.',

    // object
    'object.base': '{{#label}} sai định dạng.',
    'object.unknown': 'Trường {#key} không được xác định.',
    'object.instance': '{{#label}} không đúng định dạng.',

    // binary
    'binary.base': '{{#label}} sai định dạng.',
    'binary.min': '{{#label}} không được ít hơn {{#limit}} bytes.',
    'binary.max': '{{#label}} không được vượt quá {{#limit}} bytes.',

    // any
    'any.only': '{{#label}} không hợp lệ.',
    'any.required': '{{#label}} không được bỏ trống.',
    'any.unknown': 'Trường {#key} không được xác định.',
    'any.invalid': '{{#label}} không hợp lệ.',
    'any.exists': '{{#label}} đã tồn tại.',
}

export const JOI_DEFAULT_OPTIONS = {
    abortEarly: false,
    errors: {
        wrap: {label: false},
        language: {'any.exists': 'any.exists'},
    },
    externals: false,
    stripUnknown: true,
}

export const VALIDATE_PHONE_REGEX = /^(0[235789])[0-9]{8}$/

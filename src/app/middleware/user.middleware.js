import {isValidObjectId} from 'mongoose'
import {User} from '@/models'
import {abort} from '@/utils/helpers'

export async function checkUserId(req, res, next) {
    if (isValidObjectId(req.params.id)) {
        const user = await User.findOne({_id: req.params.id})
        if (user) {
            req.user = user
            next()
            return
        }
    }
    abort(404, 'Không tìm thấy người dùng.')
}

import db from "../models/index";

let getTopDoctorHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                limit: limitInput,
                where: { roleId: 'R2' },
                order: [['createdAt', 'DESC']],//lay tk vua tao len trc
                atributes: {
                    exclude: ['password']
                },
                include: [
                    { model: db.Allcode, as: 'positionData', atributes: ['valueEn', 'valueVi'] },
                    { model: db.Allcode, as: 'genderData', atributes: ['valueEn', 'valueVi'] }
                ],
                raw: true,
                nest: true
            })
            resolve({
                errCode: 0,
                data: users
            })
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    getTopDoctorHome: getTopDoctorHome
}
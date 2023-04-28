import Sequelize from 'sequelize'
import config from './config'

const sequelize = new Sequelize(
    config.db_name,
    config.db_password,
    config.db_username,
    {
        dialect : "postgres"
    }
)

sequelize.
    authenticate().then(()=> console.log('connecting has been estabilized'))
    .catch((err)=>console.log(err))

export {sequelize}
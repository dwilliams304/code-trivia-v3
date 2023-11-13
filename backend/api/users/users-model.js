const db = require('../../data/db-config');

function find(){
    return db('users');
}

function findBy(filter){
    return db('users').where(filter);
}

async function create({username, password, role_name}){
    let new_user_id;
    await db.transaction(async t => {
        let id_to_use;
        const [role] = await t('roles').where('role_name', role_name);
        if(role){
            id_to_use = role.role_id;
        }else{
            const [role_id] = await t('roles').insert({role_name: role_name})
            id_to_use = role_id;
        }

        const [user_id] = await t('users').insert({username, password, role_id: id_to_use});
        new_user_id = user_id;
    })

    return findBy({user_id: new_user_id});
}

module.exports = {
    find,
    findBy,
    create,
}
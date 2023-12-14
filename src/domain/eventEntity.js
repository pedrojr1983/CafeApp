const userEntity = require("./userEntity");

module.exports = {
    node:'gualogo',
    eventType:'view',
    transition:'starts',
    value:'1',
    user: userEntity.user
}
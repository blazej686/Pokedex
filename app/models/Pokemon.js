export class Pokemon {
    constructor(data) {
        this.id = data.id || null
        this.name = data.name
        this.nickName = data
        this.img = data
        this.weight = data
        this.height = data
        this.type = data
    }


}




// {
// "name": {
//     "type": "String",
//         "required": true,
//             "maxLength": 100
// },
// "nickName": {
//     "type": "String",
//         "maxLength": 100
// },
// "img": {
//     "type": "String",
//         "required": true,
//             "maxLength": 500
// },
// "weight": {
//     "type": "String",
//         "maxLength": 100
// },
// "height": {
//     "type": "String",
//         "maxLength": 100
// },
// "types": [
//     {}

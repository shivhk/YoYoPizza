const mongoose = require('mongoose');
const config = require("./config");
const {Schema} = mongoose;


mongoose.connect(`${config.dbUri}/${config.dbName}`);
console.log('Connected to DB : ', config.dbName);


const Menu = new Schema({
    name : String,
    description : String,
    amount : {String, default:0}
});

const options = new Schema({
   description : String
});

const orderDetails = new Schema(
    {
        notes: String,
        itemsOrders:[
            {
                itemId: String,
                itemName : String,
                price : {type : Number, default: 10},//rather than getting from backend again, send from UI.
                quantity: {type : Number, default: 0},//user input text box's value.
            }
        ],
        status : {type: String, default:"preparing"},
        // paid : true, //online transaction allowed only, for ease's sake
        totalAmount : String
    });

module.exports = {
    Menu : mongoose.model('Menu', Menu, 'MenuItems'),
    OrderDetails : mongoose.model('OrderDetails',orderDetails, 'Orders' )
}
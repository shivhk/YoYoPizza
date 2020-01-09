const { Menu, OrderDetails } = include('database');

//to create order
//send selected itemId
exports.create = async (req, res) =>{

    // if (Object.keys(req.body).length !== 0)
    //     res.send({success:false, message:"Missing request body"});

    try{
        console.log(req.body);
        let items = req.body.itemsOrders;

        let sum = 0;
        items.forEach(item =>{
            let quantity = item.quantity;
            let price = item.price;
            sum += quantity * price;
        });

        let saved = await new OrderDetails({
            notes : req.body.notes,

            //why zero elements are stored in db?
            itemsOrders: req.body.itemsOrders,
            totalAmount: sum,
            // paid : true
        }).save();

        console.log(saved);
        res.send({success:true, saved, message:`please pay ${sum}rs/- to avoid soggy pizzas.`});
    }
    catch (err) {
        console.log(err);
    }
    //how to get request body?
    
}
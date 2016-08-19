var Order = require("../models/order");

module.exports = {
    get: (req, res)=> {
        if(req.params.id){
            console.log(req.params.id);
            Order.findOne({_id: req.params.id}, function(err, order) {
                res.json(order);
            });
        } else {
            Order.find({}, function(err, orders) {
                res.json(orders);
            });
        }
    },

    upsert: (req, res)=> {
        if(req.params.id) {
            var id = req.params.id;
            Order.update(id, function(err, order) {
                res.json(order);
            })
        } else {
            var newOrder = new Order(req.body);

            newOrder.save(function(err, order) {
                if(err){
                    return res.json(err);
                }
                res.json(order);
            })
        }
    },

}

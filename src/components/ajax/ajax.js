import $ from "jquery"


export default {

    // 登录接口
    login(user_id, user_password, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:8081/Person/Login",
            data: {
                user_id: user_id,
                user_password: user_password
            },
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    ShoppingCar(user_id, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/ShoppingCar/Find",
            data: {
                user_id: user_id,
            },
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },
    shopping(callback) {

        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Good/FindGoodOne",
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },
    RankTwo(callback) {

        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Good/FindGoodRank",
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    RankFirst(callback) {

        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Good/FindGoodOne",
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    Reduce(callback) {

        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Good/FindGoodOne",
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    Goods(goods_id, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Good/FindGoodById",
            data: {
                goods_id: goods_id
            },
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    ShoppingCarAdd(goods_id, user_id, number, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/ShoppingCar/Add",
            data: {
                goods_id: goods_id,
                user_id: user_id,
                number: number,
            },
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    Transfer(money, from, to, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Money/Tranfer",
            data: {
                money: money,
                from: from,
                to: to
            },
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    BuyGoods(buyGoods, user_id, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Money/Buy",
            contentType: "application/json",
            data: JSON.stringify({
                buyGoods: buyGoods,
                user_id: user_id
            }),
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    AddMoney(money, to, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Money/Add",
            data: {
                money: money,
                to: to
            },
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    // 登录接口
    Register(user_name, user_password, user_lev, user_gender, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:8081/Person/Add",
            contentType: "application/json",
            data: JSON.stringify({
                user_name,
                user_password,
                user_gender,
                user_lev
            }),
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    // 订单
    Dingdan(user_id, callback) {
        $.ajax({
            type: "POST",
            url: "http://localhost:9090/Order/User",
            data: {
                user_id
            },
            dataType: "json",
            success: function (res) {
                callback(res, 200);
            },
            error: function (er) {
                callback(er, 404)
            }
        })
    },

    Seller: {
        Shopping(seller_id, callback) {
            $.ajax({
                type: "POST",
                url: "http://localhost:9090/Order/Shopping",
                data: {
                    seller_id
                },
                dataType: "json",
                success: function (res) {
                    callback(res, 200);
                },
                error: function (er) {
                    callback(er, 404)
                }
            })
        },
        Goods(seller_id, callback) {
            $.ajax({
                type: "POST",
                url: "http://localhost:9090/Seller/FindGoodBySellId",
                data: {
                    seller_id
                },
                dataType: "json",
                success: function (res) {
                    callback(res, 200);
                },
                error: function (er) {
                    callback(er, 404)
                }
            })
        },
    }

}










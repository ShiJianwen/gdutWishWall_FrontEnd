/****************定义各种服务*****************/
var Host = 'http://gdutgirl.duapp.com'; //定义主机



//获取指定用户的信息
app.factory('GetUserInfoService', ['$http',
    function($http) {
        return {
            getUserInfo: function(data) {
                return $http({
                    method: 'GET',
                    url: Host + '/getUserInfo?userId=' + data.userId
                });
            }
        };
    }
]);

//更新用户信息
app.factory('UpdateInfoService', ['$http',
    function($http) {
        return {
            updateInfo: function(data) {
                return $http({
                    method: 'POST',
                    url: Host + '/updateinfo',
                    data: data
                })
            }
        };
    }
]);

//获取所有未领取愿望
app.factory('GetUnpickedWish', ['$http',
    function($http) {
        return {
            getWishes: function(page, per_page) {
                return $http({
                    method: 'GET',
                    url: Host + '/getUnpickedWish?page=' + page + '&per_page=' + per_page
                });
            }
        };
    }
]);

//发布愿望
app.factory('PutWishService', ['$http',
    function($http) {
        return {
            putWish: function(data) {
                return $http({
                    method: 'POST',
                    url: Host + '/putwish',
                    data: data
                });
            }
        };
    }
]);

//查找指定愿望
app.factory('FindWishService', ['$http',
    function($http) {
        return {
            findWish: function(data) {
                return $http({
                    method: 'GET',
                    url: Host + '/getwish?wishId=' + data.wishId
                });
            }
        }
    }
]);

//男生领取愿望
// app.factory('PickWishService', ['$http', function($http) {
//     return {
//         pickWish: function(data) {
//             return $http({
//                 method: 'POST',
//                 url: Host + '/pickwish',
//                 data: data
//             });
//         }
//     };
// }]);

//女生获取自己的愿望
app.factory('GetFemaleWishService', ['$http',
    function($http) {
        return {
            getWish: function(data) {
                return $http({
                    method: 'GET',
                    url: Host + '/getfemalewish?userId=' + data.userId,
                    data: data
                });
            }
        };
    }
]);

//更新愿望状态
app.factory('UpdateWishService', ['$http',
    function($http) {
        return {
            updateWishState: function(data) {
                return $http({
                    method: 'POST',
                    url: Host + '/updatewishstate',
                    data: data
                });
            },

            updateWish: function(data) {
                return $http({
                    method: 'POST',
                    url: Host + '/refreshwish',
                    data: data
                });
            },

            deleteWish: function(data) {
                return $http({
                    method: 'POST',
                    url: Host + '/deletewish',
                    data: data
                });
            },


        };
    }
]);

//男生获取自己领取的愿望
app.factory('GetMaleWishService', ['$http',
    function($http) {
        return {
            getWish: function(data) {
                return $http({
                    method: 'GET',
                    url: Host + '/getmalewish?pickerId=' + data.pickerId
                });
            }
        };
    }
]);

//消息服务
app.factory('MsgService', ['$http',
    function($http) {
        return {
            getMsg: function(data) {
                return $http({
                    method: 'GET',
                    url: Host + '/getmessage?userId=' + data.userId
                });
            },

            readMsg: function(uid) {
                return $http({
                    method: 'GET',
                    url: Host + '/readmessage?userId=' + uid
                });
            },


        };
    }
]);

//聊天服务
app.factory('ContactService', ['$http',
    function($http) {
        return {
            getContact: function(data) {
                return $http({
                    method: 'POST',
                    url: Host + '/getcontact',
                    data: data
                });
            }
        };
    }
]);

/***************************微信服务************************/

//根据code获取网页授权access_token及用户资料
app.factory('WeChatService', ['$http',
    function($http) {
        return {
            
            getWeChatInfo: function(code) {
                return $http({
                    method: 'GET',
                    url: Host + '/getWeChatInfo?code='+code
                });
            },

            getAccessToken: function(data) {
                return $http({
                    method: 'GET',
                    url: Host + '/getAccessToken?uid='+data.userId
                });
            },

            getApiTicket: function(token) {
                return $http({
                    method: 'GET',
                    url: Host + '/getApiTicket?token='+token
                });
            }
        };
    }
]);


/****************定义各种共享的数据******************/
app.factory('WishData', function() {
    return {
        user: '',
        username: '',
        wishType: '',
        wish: ''
    };
});
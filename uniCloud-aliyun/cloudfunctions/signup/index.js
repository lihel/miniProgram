'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	console.log('用户信息认证')
	//返回数据给客户端
	return {
		"connect": 'success',
		"event": event
	}
};

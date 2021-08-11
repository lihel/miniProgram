'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log(event)
	const collection = db.collection('user-info')
	const res = await collection.limit(10).get() // 获取表中的10条数据，结果为json格式
	console.log(res)
	//返回数据给客户端
	return res
};

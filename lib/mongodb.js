const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/user";

function createTb(){
    mongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(err,db)=>{
        if(err) throw err;
        console.log('数据库创建成功');
        const dbase = db.db('user');
        dbase.createCollection('user',(err,tb)=>{
            if(err) throw err;
            console.log('创建表成功');
            db.close();//关闭链接
        })
    })
};
function insertOnce(){
    mongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(err,db)=>{
        if(err) throw err;
        console.log('');
        const dbase = db.db('user');
        const user = {
            name: 'xiaochen',
            password: '123456'
        }
        dbase.collection('user').insertOne(user,(err, res)=>{
            if(err) throw err;
            console.log('insert user successfully');
            db.close();
        })
    })
};

function insertMany(){
    mongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(err,db)=>{
        if(err) throw err;
        console.log('');
        const dbase = db.db('user');
        const user = [{
            name: 'xiaoming',
            password: '123456'
        },{
            name: '小明',
            password: '123456'
        },{
            name: '大名',
            password: '123456'
        }]
        dbase.collection('user').insertMany(user,(err, res)=>{
            if(err) throw err;
            console.log('insert user',res.insertedCount,user);
            db.close();
        })
    })
}
//查询所有数据
function findAll(){
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},(err,db)=>{
        if (err) throw err;
        const dbase = db.db('user');
        dbase.collection('user').find({}).toArray((err,result)=>{
            if(err) throw err;
            console.log(result);
            db.close();
        })
    })
};
//查询name=='小明'的数据
function findData() {
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology: true},(err,db)=>{
        if (err) throw err;
        const dbase = db.db('user');
        const param = {name:'小明'}
        dbase.collection('user').find(param).toArray((err,result)=>{
            if(err) throw err;
            console.log(result);
            db.close();
        })
    })
};

//更新一条数据
function updateOne(){
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        console.log('链接成功');
        const dbase = db.db('user');
        const paramFind = {name:'小明'};
        const paramUpdate = {$set:{password:'654321'}}
        dbase.collection('user').updateOne(paramFind,paramUpdate,(err, res) => {
            if(err) throw err;
            console.log('更新成功');
            db.close();
        })
    })
}

//更新符合条件的多条数据
function updateMany(){
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        console.log('链接成功');
        const dbase = db.db('user');
        const paramFind = {name:'小明'};
        const paramUpdate = {$set:{password:'111111'}}
        dbase.collection('user').updateMany(paramFind,paramUpdate,(err, res) => {
            if(err) throw err;
            console.log('更新成功%s条数据',res.result.nModified);
            db.close();
        })
    })
}

//删除一条数据
function delectOne(){
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        console.log('链接成功');
        const dbase = db.db('user');
        const paramFind = {name:'小明'};
        dbase.collection('user').deleteOne(paramFind,(err, res) => {
            if(err) throw err;
            console.log('删除成功',res.result.n);
            db.close();
        })
    })
}
//删除符合条件的
function delectOne(){
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        console.log('链接成功');
        const dbase = db.db('user');
        const paramFind = {name:'大名'};
        dbase.collection('user').deleteMany(paramFind,(err, res) => {
            if(err) throw err;
            console.log('删除成功',res.result.n);
            db.close();
        })
    })
}
//分页查询
//pageNum 第几页
//pageSize 每页条数
function findByPage(pageNum,pageSize){
    if(pageNum<1){
        throw 'pagenum 需要大于等于1';
    }
    let skipNum = (pageNum-1)*pageSize;
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        console.log('链接成功');
        const dbase = db.db('user');
        dbase.collection('user').find().skip(skipNum).limit(pageSize).toArray((err, result) => {
            if(err) throw err;
            console.log('查询成功',result);
            db.close();
        })
    })
}

//左链接
function leftLink(){
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        console.log('链接成功');
        const dbase = db.db('user');
        dbase.collection('user').aggregate([{
            $lookup: {
                from: 'test',
                localField: 'name',
                foreignField: 'firstName',
                as:'newName'
            }
        }]).toArray((err, result) => {
            if(err) throw err;
            console.log('连接后数据',result);
            db.close();
        })
    })
}
module.exports = leftLink;

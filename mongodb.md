1. npm install mongodb
2. 创建一个MongoClient对象，配置好数据库ip、端口号、数据库名，用该对象的connect方法链接数据库，如果数据库不存在会创建并链接
```
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/user";
mongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(err,db)=>{
    if(err) throw err;
    console.log('数据库创建成功');
    db.close();//关闭链接
})
```
Mongodb 服务端日志
```
2019-12-20T10:22:01.582+0800 I  NETWORK  [conn8] received client metadata from 127.0.0.1:63842 conn8: { driver: { name: "nodejs", version: "3.4.1" }, os: { type: "Windows_NT", name: "win32", architecture: "x64", version: "10.0.17134" }, platform: "'Node.js v8.11.3, LE (unified)" }
2019-12-20T10:22:51.025+0800 I  NETWORK  [conn8] end connection 127.0.0.1:63842 (1 connection now open)
```

3. 使用createCollection创建表user
```
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

```

4. 使用insertOnce 方法插入一条数据到表user中

```
function insertData(){
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
}
```
```
> use user
switched to db user
> show tables
user
> db.user.find()
{ "_id" : ObjectId("5dfc3670886de127403e37b8"), "name" : "xiaochen", "password" : "123456" }
>
```

5. 使用inserMany 插入多条数据
```
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
```
6. 查询所有数据find
```
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
```
7. 查询匹配的数据，比如查询name为"小明"的

```
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
```

8. 更新数据，更新name为小明的password 为111111
```
//更新一条数据
function updateOne(){
    mongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        console.log('链接成功');
        const dbase = db.db('user');
        const paramFind = {name:'小明'};
        const paramUpdate = {$set:{password:'111111'}}
        dbase.collection('user').updateOne(paramFind,paramUpdate,(err, res) => {
            if(err) throw err;
            console.log('更新成功');
            db.close();
        })
    })
};

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
```

9. 删除数据

```
//删除条件的一条数据
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
//删除符合条件的多条
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
``` 

10.


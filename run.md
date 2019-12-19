#### 输入node 进入node交互执行环境，REPL（Read-Eval-Print-Loop）

```
$ node
> console.log('helloworld')
helloworld
undefined
>
```

运行js文件

```
$ node s.js
helloworld!
```

运行代码片段

```
$ node -e "console.log('hello world')"
hello world

$ node -p "console.log('hello world')"
hello world
undefined
```



### REPL 命名

1. help 
```
$ node
> .help
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the repl
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
>
```

1. .break (ctrl+c)
```
> var a =
... .break
>
```

2. .exit 退出(ctrl+D)

```
83533@DESKTOP-QSEB6D6 MINGW64 ~
$ node
> console.log('hellworld')
hellworld
undefined
> var a =
... .break
> .exit

83533@DESKTOP-QSEB6D6 MINGW64 ~
```
3. .editor 进入编辑模式(^D to finish, ^C to cancel)
```
 .editor
// Entering editor mode (^D to finish, ^C to cancel)
function func(){console.log("helloworld!!!")}
func()

helloworld!!!
undefined
>
```
4. save 保存repl内容到文件中
```
$ node
> function f(){console.log('helloworld!')}
undefined
> f()
helloworld!
undefined
> .save s.js
Session saved to:s.js
> .exit
$ cat s.js
function f(){console.log('helloworld!')}
f()
```

5. .load 加载js文件内容到REPL中
```
> .load s.js
function f(){console.log('helloworld!')}
f()

helloworld!
undefined
> f()
helloworld!
undefined
>
```

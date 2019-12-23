### 通过process.moduleLoadList 中的NativeModule ；主要有[ 'assert', 'buffer', 'console', 'dns', 'domain', 'events', 'fs', 'module', 'net', 'os', 'path', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'timers', 'tty', 'url', 'util', 'vm' ]
```
$ node
> process.moduleLoadList
[ 'Binding contextify',
  'Binding natives',
  'Binding config',
  'NativeModule events',
  'Binding async_wrap',
  'Binding icu',
  'NativeModule util',
  'NativeModule internal/errors',
  'NativeModule internal/encoding',
  'NativeModule internal/util',
  'Binding util',
  'Binding constants',
  'NativeModule internal/util/types',
  'Binding buffer',
  'NativeModule buffer',
  'NativeModule internal/buffer',
  'Binding uv',
  'NativeModule internal/process',
  'NativeModule internal/process/warning',
  'NativeModule internal/process/next_tick',
  'NativeModule internal/async_hooks',
  'NativeModule internal/process/promises',
  'NativeModule internal/process/stdio',
  'Binding performance',
  'NativeModule perf_hooks',
  'NativeModule internal/linkedlist',
  'NativeModule internal/trace_events_async_hooks',
  'Binding trace_events',
  'NativeModule async_hooks',
  'NativeModule internal/inspector_async_hook',
  'Binding inspector',
  'NativeModule timers',
  'Binding timer_wrap',
  'NativeModule assert',
  'NativeModule module',
  'NativeModule internal/module',
  'NativeModule internal/url',
  'NativeModule internal/querystring',
  'NativeModule querystring',
  'Binding url',
  'NativeModule vm',
  'NativeModule fs',
  'NativeModule path',
  'Binding fs',
  'NativeModule stream',
  'NativeModule internal/streams/legacy',
  'NativeModule _stream_readable',
  'NativeModule internal/streams/BufferList',
  'NativeModule internal/streams/destroy',
  'NativeModule _stream_writable',
  'NativeModule _stream_duplex',
  'NativeModule _stream_transform',
  'NativeModule _stream_passthrough',
  'Binding fs_event_wrap',
  'NativeModule internal/fs',
  'NativeModule internal/loader/Loader',
  'NativeModule internal/loader/ModuleWrap',
  'Internal Binding module_wrap',
  'NativeModule internal/loader/ModuleMap',
  'NativeModule internal/loader/ModuleJob',
  'NativeModule internal/safe_globals',
  'NativeModule internal/loader/ModuleRequest',
  'NativeModule url',
  'NativeModule internal/loader/search',
  'NativeModule console',
  'Binding tty_wrap',
  'NativeModule tty',
  'NativeModule net',
  'NativeModule internal/net',
  'Binding cares_wrap',
  'Binding tcp_wrap',
  'Binding pipe_wrap',
  'Binding stream_wrap',
  'NativeModule dns',
  'NativeModule readline',
  'NativeModule string_decoder',
  'NativeModule internal/readline',
  'Binding signal_wrap',
  'NativeModule internal/repl',
  'NativeModule repl',
  'NativeModule domain',
  'NativeModule os',
  'NativeModule internal/os',
  'Binding os' ]
>
```
### node 通常一个文件就是一个模块，模块中可以包含以下几个变量

```
console.log('当前文件所在目录',__dirname);
console.log('当前文件名',__filename);
console.log('当前模块',module);
console.log('exports',exports);
console.log('module.exports',module.exports);
console.log('require()',require);
```
exports === module.exports 向外提供接口、函数、变量等
require() 函数方法用于加载模块

hello.js
```
module.exports = function(){console.log('hellworld')}
```
testHello.js
```
const hello = require('./hello.js');
hello();// hellworld
```


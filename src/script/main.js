// 调用模块
// require(['index_module', 'list_module', 'detail_module']);



// 配置模块 - 路径
// jquery lazyload
// https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js
// https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js
require.config({
    baseUrl: '', //配置js文件路径的公共部分，包括本地的文件。
    paths: { //path:给路径内部的代码设置一个名称，名称就是最后使用的模块的名称。
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min', //扩展名一定要省略
        'jlazyload': 'https://cdn.bootcdn.net/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min',
        'jquery_cookie': 'https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min'
    },
    shim: { //让不支持AMD的模块支持AMD
        'jlazyload': {
            deps: ['jquery'], //deps:表示当前的模块依赖那个模块。
            exports: 'jlazyload' //给模块另外取一个别名。
        },
        'jquery_cookie': {
            deps: ['jquery'], //deps:表示当前的模块依赖那个模块。
            exports: 'jquery_cookie' //给模块另外取一个别名。
        }
    }
});


require(['jquery'], () => {
    //获取script标签里面的自定义属性targetpage的值
    console.log('require');
    console.log($('#page').attr('targetpage'));
    let $modulepage = $('#page').attr('targetpage');
    require([$modulepage], (modulepage) => { //不同的页面加载不同的模块
        console.log('require inner');
        modulepage.init();
    });
});
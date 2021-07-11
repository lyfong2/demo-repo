## 三, 路由的基本使用
    1. 明確好介面的導航區、展示區
    2. 導航區的a標籤改為Link標籤
        <Link to="/xxxx">Demo</Link>


## 四、路由組件與一般組件
    1. 寫法不同:
        一般組件: <Demo/>
        路由組件: <Route path="/demo" component={Demo} />
    2. 存放位置不同:
        一般組件: components
        路由組件: pages
    3. 接收到的props不同:
        一般組件: 寫組件標籤時傳遞了甚麼, 就能收到甚麼
        路由組件: 接收到三個固定的屬性
                    history:
                        go: ƒ go(n)
                        goBack: ƒ goBack()
                        goForward: ƒ goForward()
                        push: ƒ push(path, state)
                        replace: ƒ replace(path, state)

                    location:
                        pathname: "/about"
                        search: ""
                        state: undefined

                    match:
                        params: {}
                        path: "/about"
                        url: "/about"





## 八、路由的嚴格匹配與模糊匹配
    1. 默認使用的是模糊匹配 (簡單記: [輸入的路徑]必須包含要[匹配的路徑], 且順序要一致)
    2. 開啟嚴格匹配: <Route exact={true} path="/about" component={About}/>
    3. 嚴格匹配不要隨便開啟, 需要再開, 有些時候開啟會導致無法繼續匹配二級路由

## 九、Redirect的使用
    1. 一般寫在所有路由註冊的最下方,當所有路由都無法匹配時,跳轉到Redirect指定的路由
    2. 具體編碼:
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect path="/about" />
        </Switch>

        
## 十、 嵌套路由
        1.註冊子路由時要寫上父路由的path值
        2.路由的匹配是按照註冊路由的順序進行的
            ex: home/news
## 十一、 向路由組件傳遞參數
        1.params參數
            路由鏈結(攜帶參數): <Link to="/demo/test/tom/18">詳情</Link>
            註冊路由(聲明接收): <Route path="/demo/test/:name/:age" component={Test} />
            接收參數: const {id, title} = this.propss.match.params
        2.search參數
            路由鏈結(攜帶參數): <Link to="/demo/test?name=tom&age=18">詳情</Link>
            註冊路由(無須聲明, 正常註冊即可): <Route path="/demo/test" component={Test}/>
            接收參數: this.props.location.search
            備註: 獲取到的search是urlencoded編碼字符串, 需要借助querystring解析
        3. state參數
            路由鏈結(攜帶參數): <Link to={{path: '/demo/test', state:{name:'tom', age:18}}}>詳情</Link>
            註冊路由(無須聲明, 正常註冊即可): <Route path="/demo/test" component={Test}/>
            接收參數: this.props.location.state
            備註: 刷新也是可以保留住參數
            

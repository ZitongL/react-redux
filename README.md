1. Redux 就是用来管理react components 的
2. 需要进行的操作有
    1. store：
        创建store。利用的redux 的createStore（Reducer，initialState，middleware）
        这里Reducer 往往传入的是一个rootReducer， 在定义rootReducer的模块中（./reducer/index.js) 中，我们需要利用redux 提供的 combineReducers（{
            ReducerName:Reducer
        }）来连接各子Reducer
    2. action：
        （1）定义action。 action是一个 object，里面必须要type 属性，也可以传入data 并发送到Reducer中。 
        （2）dispach ：定义后需要分发action 给Reducer。 在这里一般情况我们都是会用到中间件，中间件在处理异步分发的时候会创建一个函数，这个函数返回一个需要传入dispatch 作为参数的函数，然后再在这个返回的函数体中利用dispatch 进行分发操作（可参见./actions/postAction 中的写法）
        （3）action 需要在 React Components 中触发来开始一切操作。所以这个用户的接口最先出发的就是action

    3. Reducer ：
        这里Reducer 需要用一个函数来处理，需要传入（state = initialState，action）两个值
        这里是用来根据action.type 来进行不同的处理操作，并且返回一个新的state。
        所以有关state 的操作。几乎都是在Reducer中完成的。 所以在这里可以根据项目的需要，来定义initialState 的结构

    4.  在React Components 中获得信息
        （1）处理完后就需要在React Components 中获得 触发action 的接口以及获取新的state的接口。这里我们需要用mapStateToProps()，mapDispatchToProps() 将 state 或者action 触发接口转化为props ，并且可以通过this.props.xxx  来调用
        （2）在这里还需要用 prop-types 包中的 PropTypes 对新出现的参数（action dispatch or state） 进行一个定义
    
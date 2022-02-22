# React
> [CND](https://ko.reactjs.org/docs/cdn-links.html)

## 1 컴포넌트
### 1) Class
```js
import React from 'react';

//JS에서 정의
class ClassComponent extends React.Componet{
  render(){
    return (<div>Hello</div>)
  }
}

//사용
//#1 HTML에서
<ClassCompnent>

//#2 JS에서
ReactDOM.render(<ClassCompnent/>, document.querySelector('class/id 명'))
```

### 2) function
```js

//JS에서 정의
//#1
function FuncitonComponent() {
  return <div>Hello</div>
}
//#2
const FuncitonComponent = () => <div>Hello</div>
```

### 3) 컴포넌트 만들기
```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```
```js
React.createElement(
  type,              // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
  [props]            // 리액트 컴포넌트에 넣어주는 데이터 객체
  [...children]      //자식으로 넣어주는 요소들
)
```

## 2. JSX (babel)
```html
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <!-- type에 주의하자 -->
  <script type="text/babel"src="./main.js"></script>  
```
- 최상위 요소는 하나여야한다. (빈 요소(`<></>`)를 통해 해당 문제를 해결함)
- 표현식을 사용하고 싶다면 {표현식}을 사용한다.
- style으로 inline css 적용이 가능하다.
- class 대신 className으로 입력해야, class로 변환된다.
- 꼭 닫아야한다. (`</>`)

### 1) props (인수/매개변수-외부값)
```js
//인수는 render에 지정
class ClassComponent extends React.Component {
  render(props) {
    return <div>{this.props.message} Hello</div>
  }
}

//props 초기화 해주는법
ClassComponent.defaultProps ={
  message: '값을 입력해주세요'
}

//호출 방법
ReactDOM.render(<ClassComponent />, document.querySelector('#root1'))
ReactDOM.render(<ClassComponent message='입력했네요.' />, document.querySelector('#root1-1'))

```

### 2). state (상태값-내부값)
```js
//state는 처음에 지정 (Obj 형태)
class StateComponent extends React.Component{
  // #1 리터럴 방식
  state = {
    count: 0,
  }
  // #2 생성자 방식
  constructor(props){
    super(props)
    this.state = {count:0}
  }
  render() {
    return <div>{this.state.count} Hello</div>
  }
  //state 값 변경+계산 방법 (다른 방법으로 eventhandling도 있음)
  componentDidMount() {
    setTimeout(() => {
      //#1. 일반식
      this.setState({
      count: this.state.count + 1,
      })

      //#2. 함수식
      this.setState((previousState) => {
        const newState = { count: previousState.count + 1}
        return newState
      })
    }, 1000)
  }
}

//호출
ReactDOM.render(<StateComponent/>, document.querySelector('#root5'))
```
### 3). Event Handling
```js
//onXXXX 형태로 Event 설정 가능 (onClink, onMouseEnter, ...)
class EventComponent extends React.Component{
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={
          ()=> {
            console.log("clicked")
            this.setState((state) => ({
              ...state,              // ...xxx = 매개변수 xxx 복사
              count: state.count +1
            }))
          }
        }>클릭</button>
      </div>
    )
  }
}

ReactDOM.render(<EventComponent />, document.querySelector("#root6"))
```
### 4) 매소드 
```js
class EventComponent extends React.Component{
  //인수
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }

    this.click = this.click.bind(this) 
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.click}>클릭</button>
      </div>
    )
  }
  //매소드
  click() {
    console.log("clicked")
    this.setState((state) => ({
      ...state,
      count: state.count +1
    }))
  }
}

ReactDOM.render(<EventComponent />, document.querySelector("#root6"))
```
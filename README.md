# React
> [CND](https://ko.reactjs.org/docs/cdn-links.html)

## 1 컴포넌트
### 1. Class
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

### 2. function
```js

//JS에서 정의
//#1
function FuncitonComponent() {
  return <div>Hello</div>
}
//#2
const FuncitonComponent = () => <div>Hello</div>
```

### 3. 컴포넌트 만들기
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

### 4. JSX (babel)
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
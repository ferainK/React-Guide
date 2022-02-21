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
import React from 'react';

//JS에서 정의
//#1
function FuncitonComponent() {
  return <div>Hello</div>
}
//#2
const FuncitonComponent = () => <div>Hello</div>
```

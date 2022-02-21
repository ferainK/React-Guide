//Class 사용해보기 (funciton은 생략)
class ClassComponent extends React.Component {
  render() {
    return (<div>Hello</div>);
  }
}
ReactDOM.render(<ClassComponent />, document.querySelector('#root1'))

// 태그 이름 문자열 type
ReactDOM.render(
  React.createElement('h1', null, `태그 이름 문자열 입니다.`),
  document.querySelector('#root2')
)

//리액트 컴포넌트
const Component = () => {
  return React.createElement('p', null, `React 컴포넌트 입니다.`)
}

ReactDOM.render(
  React.createElement(Component, null, null),
  document.querySelector('#root3')
)

//React.Fragment
ReactDOM.render(
  React.createElement(React.Fragment, null, `type이 React.Fragment 입니다.`),
  document.querySelector('#root4')
)
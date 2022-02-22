//Class 사용해보기 (funciton은 생략)
class ClassComponent extends React.Component {
  render(props) {
    return <div>{this.props.message} Hello</div>
  }
}

ClassComponent.defaultProps ={
  message: '값을 입력해주세요'
}

ReactDOM.render(<ClassComponent />, document.querySelector('#root1'))
ReactDOM.render(<ClassComponent message='입력했네요.' />, document.querySelector('#root1-1'))



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

//state
class StateComponent extends React.Component{
  state = {
    count: 0,
  }

  render() {
    return <div>{this.state.count} Hello</div>
  }

  componentDidMount() {
    setTimeout(() => {
      //#1. 일반식
      // this.setState({
      //   count: this.state.count + 1,
      // })

      //#2. 함수식
      this.setState((previousState) => {
        const newState = { count: previousState.count + 1}
        return newState
      })
    }, 1000)
  }
}

ReactDOM.render(<StateComponent/>, document.querySelector('#root5'))
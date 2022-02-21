class ClassComponent extends NewType {
  render() {
    return <div>Hello</div>;
  }
}

ReactDOM.render(<ClassComponent />, document.querySelector('#root'))
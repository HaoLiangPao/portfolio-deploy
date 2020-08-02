import React, { Component } from "react";
import BlogContext from "./context/BlogContext";

class ClassComponent extends Component {
  // 1. Mounting
  // 1.1 Constructor
  constructor(props) {
    super(props);
    console.log("1.1 Mounting: Constructor");

    // 1.1.1 Initialize state
    console.log("1.1.1 Initialize state");

    this.state = {
      posts: props.posts,
      loading: props.loading,
      page: props.page,
      limit: props.limit,
      getPosts: props.getPosts,
    };

    // 1.1.2 Initialize EventListener
    console.log("1.1.2 Initialize EventListener");
    window.addEventListener("scroll", function scroll() {
      console.log("scrolling");
    });
  }
  // 1.2 getDerivedStateFromProps(props, state)

  // 1.3 Render
  render() {
    console.log("1.3 render()");
    return (
      <BlogContext.Consumer>
        <div> Mounting... </div>
      </BlogContext.Consumer>
    );
  }
  // 1.4 CompountDidMount()
  componentDidMount() {
    console.log("1.4 componentDidMount()");
  }

  // 2. Updating
  handleScroll = () => {
    const posts = this.getPosts(this.limit, this.page);
    console.log(posts);
    this.setState({
      posts,
    });
  };
  // 2.1 getDerivedStateFromProps(props, state)
  // static getDerivedStateFromProps(props, state) {
  //   console.log("2.1 getDerivedStateFromProps");
  // }
  // 2.2 shouldComponentUpdate(nextProp, nextState)
  shouldComponentUpdate(nextProp, nextState) {
    console.log("2.2 shouldComponentUpdate");
  }
  // 2.3 render()
  // 2.4 getSnapshotBeforeUpdate(prevProps, prevState)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("2.4 getSnapshotBeforeUpdate()");
  }
  // 2.5 componentDidUpdate(prevProps, prevState, snapshot)
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("2.5 componentDidUpdate");
  }
  // 3. Unmounting
  // 3.1 componentWillUnmount()
  componentWillUnmount() {
    console.log("3.1 componentWillUnmount()");
  }

  // 4. Error Handling
}

export default ClassComponent;

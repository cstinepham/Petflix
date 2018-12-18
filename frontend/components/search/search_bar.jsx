import React from 'react';
import { Redirect } from "react-router-dom";

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryString: "",
      count: 0
    }
  }

  componentDidMount() {
  }

  componentDidUpdate(ownProps) {
    if(ownProps.history.location.pathname === '/browse' && this.state.count > 0){
      this.setState({
        queryString: '',
        count: 0
      })
    }
  }

  update(field) {

    return e => this.setState({
      [field]: e.target.value
    },
        () => {
        
            this.props.history.push(`/search?movie=${this.state.queryString}`);
            this.setState({
              count: 1
            })
    }
    
    );
  }


  render() {

    return (
      <div>
        <form>
          <input type="search" placeholder="Title, Genre" value={this.state.queryString} onChange={this.update("queryString")}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;

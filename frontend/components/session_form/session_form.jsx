import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div className="session-splash-background">
        <form onSubmit={this.handleSubmit} className="session-form">
          <h2>{this.props.formType}</h2>
          {this.renderErrors()}

          <br />

          <input type="text" value={this.state.email} onChange={this.update("email")} className="session-form-input" placeholder="Email" />

          <br />

          <input type="password" value={this.state.password} onChange={this.update("password")} className="session-form-input" placeholder="Password" />

          <br />

          <input type="submit" value={this.props.formType} className="session-form-submit" />
         
          <br />

          <input type="submit" value="Demo User" className="session-form-demo-user-submit" />
          
          <br />
          
         {this.props.navLink}
        </form>

      </div>;
  }
}

export default SessionForm;

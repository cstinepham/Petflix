import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(field) {
    let user = field === "login" ? Object.assign({}, this.state) : 
      {
        email: 'christine@gmail.com',
        password: 'password'
      }

      return e => {
        e.preventDefault();
        this.props.processForm(user);
      } 

  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    let { email, password } = this.state;
    let {formType, navLink} = this.props;

    return <div className="session-splash-background">
        <div className="session-form">
          <h2>{formType}</h2>
          
          {this.renderErrors()}

          <br />

          <input type="text" value={email} onChange={this.update("email")} className="session-form-input" placeholder="Email" />

          <br />

          <input type="password" value={password} onChange={this.update("password")} className="session-form-input" placeholder="Password" />

          <br />

         <button className="session-form-submit" onClick={this.handleSubmit("login")}>{formType}</button>  
         
          <br />
    
          <button className="session-form-demo-user-button" onClick={this.handleSubmit("demo")} >Demo User</button>
         {navLink}
        </div>

      </div>;
  }
}

export default SessionForm;

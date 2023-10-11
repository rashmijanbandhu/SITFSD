import React, { Component } from 'react';

class FormValidationExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  // Validate the form fields
  validateForm = () => {
    const errors = {};
    const { username, email, password, confirmPassword } = this.state;

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit it or perform further actions
      alert('Form submitted successfully');
    } else {
      // Form is invalid, update the state with errors
      this.setState({ errors });
    }
  };

  // Handle input field changes
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, confirmPassword, errors } = this.state;

    return (
      <div>
        <h1>Form Validation Example</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormValidationExample;

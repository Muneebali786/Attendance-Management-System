import React, { Component } from "react";

const initialState = {
    //name: "",
    email: "",
    password: "",
    //nameError: "",
    emailError: "",
    passwordError: ""
  };

export default class Login extends Component {
    
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };

    validate = () => {
        //let nameError = "";
        //let emailError = "";
        //let passwordError = "";
    
        // if (!this.state.name) {
        //   nameError = "name cannot be blank";
        // }

        if( !this.state.email.includes("@") && !this.state.email.includes(".com") && this.state.password.length <8 )
        {
            this.setState( {emailError: "Please enter valid email", passwordError: "Password should not less than 8 characters"})
        }

    
        else if (!this.state.email.includes("@") || !this.state.email.includes(".com")) {
          this.setState({ emailError : "Please enter valid email"})
        }

        else if ( this.state.password.length <8 )
        {
            this.setState({ passwordError: "Password should not less than 8 characters"})
        }

        else
        {
            return true;
        }

        // if (emailError || passwordError) {
        //   this.setState({ emailError, passwordError });
        //   return false;
        // }       
      };

      submit() {
          this.setState({ emailError: "", passwordError: ""})
      }
    
      handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
      };
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: "",
    //         password: ""
    //     };
    // }

    render() {
        //const { email, password } = this.state;
        return (
            <div class="row">
            <div className="container">
                <div className="col-md-4">
                
                
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label for="validation">Email address</label>
                    <input
                        name="email"
                        //type="email"
                        className="form-control"
                        //aria-describedby="emailHelp" 
                        placeholder="Enter Email"
                        value={this.state.email}
                        //id="validation"
                        //required
                        //value={email} 
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>
                       {this.state.emailError}
                    </div>
                    {/* <div class="invalid-feedback">
                        Please provide a valid email.
                   </div> */}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        //required
                        value={this.state.password} 
                        //onChange={this.handleChange} 
                        onChange = {( event ) => { this.setState({ password: event.target.value})}}
                    />
                    <div style={{ fontSize: 14, color: "red", fontWeight: "bold"  }}>
                       {this.state.passwordError}
                    </div>
                </div>

                <div class="form-group row">
                    <label for="role" class="col-sm-2 col-form-label">Role</label>
                    <div class="col-sm-10">
                        {/* <div class="btn-group"> */}
                        {/* <button class="btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Role
                           </button> */}

                        <div class="input-group">
                            <select class="custom-select" id="inputGroupSelect04">
                                <option selected>Choose...</option>
                                <option value="1">Admin</option>
                                <option value="2">User</option>
                            </select>
                        </div>
                        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <a class="dropdown-item" href="#">Admin</a>
                           <a class="dropdown-item" href="#">User</a>
                       </div> */}

                    </div>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button onClick= {() => this.submit()} type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            
            </div>
            </div>
            </div>
        )
    }
}
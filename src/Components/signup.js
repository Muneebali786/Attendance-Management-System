import React, { Component } from "react";

const initialState = {
    name: "",
    email: "",
    number: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  };

export default class SignUp extends Component {

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
        let nameError = "";
        let emailError= "";
        let passwordError= "";

    //     if( !this.state.username.includes("value") && !this.state.email.includes("@") && !this.state.email.includes(".com") && this.state.password.length <8 )
    //     {
    //         this.setState( {usernameError: "Please enter username",
    //                         emailError: "Please enter valid email", 
    //                         passwordError: "Password should not less than 8 characters"})
    //     }

    //     else if (!this.state.username.includes("value")) 
    //     {
    //         this.setState({ usernameError : "Please enter username"})
    //     }

    
    //     else if (!this.state.email.includes("@") || !this.state.email.includes(".com")) {
    //       this.setState({ emailError : "Please enter valid email"})
    //     }

    //     else if ( this.state.password.length <8 )
    //     {
    //         this.setState({ passwordError: "Password should not less than 8 characters"})
    //     }

    //     else
    //     {
    //         return true;
    //     }
    if (!this.state.name) {
        nameError = "UserName cannot be blank";
      }
  
      if (!this.state.email.includes("@") && !this.state.email.includes(".com")) {
        emailError = "Please enter valid email";
      }

      if (!this.state.password) {
          passwordError = "Please enter password";
      }

      if ( this.state.password && this.state.password.length < 8 )
        {
            passwordError = "Password should not less than 8 characters";
            //this.setState({ passwordError: "Password should not less than 8 characters"})
        }
  
      if (emailError || nameError || passwordError) {
        this.setState({ emailError, nameError, passwordError });
        return false;
      }
  
      return true;
        };

    //   submit() {
    //       this.validate()
    //     //this.setState({ usernameError: "", emailError: "", passwordError: ""})
    // }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
          console.log(this.state);
          // clear form
          this.setState(initialState);
        }
      };

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label for="validation">User Name</label>
                    <input 
                        name="name"
                        //type="text" 
                        className="form-control" 
                        placeholder="User name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                    <div style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>
                       {this.state.nameError}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input 
                        name="email"
                        //type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>
                       {this.state.emailError}
                    </div>
                </div>

                <div className="form-group">
                    <label>Phone No.</label>                   
                    <input type="number" className="form-control" placeholder="Enter Phone no." />                    
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handleChange} 
                     />
                     <div style={{ fontSize: 14, color: "red", fontWeight: "bold" }}>
                       {this.state.passwordError}
                    </div>
                </div>

                <div className="form-group">
                    <label class="col-sm-2 col-form-label">Gender</label>
                    <div class="col-sm-10">
                    
                    <div class="form-check form-check-inline">
                       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                       <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                       <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    </div>
                </div>


                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
        );
    }
}

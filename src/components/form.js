import React, { Component } from 'react';
import './contacts.css'
class Form extends Component {
  constructor(){
      super();
      this.state = {
          name : "",
          email : "",
          message : "",
          formError: false
      }
  }

  getName = (e) =>{
    let username = e.target.value;
    this.setState({
        name: username
    });
    console.log(this.state.name);
  }


  getEmail = (e) =>{
    let userEmail = e.target.value;
    //the most important thing is that we use a RegEx
    //in order to manage the input of the email
    //at least we can get a some what valid email
    if(userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
      this.setState({
        email: userEmail
    });
      }else{
        this.setState({
          email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }

    console.log(this.state.email);
  }


  getDescription = (e) =>{
    let userMessage = e.target.value;
    this.setState({
        message: userMessage
    });
    console.log(this.state.message);
  }
  //send the form
  submitForm = (e) =>{
    e.preventDefault();

    if(this.state.name === "" || this.state.email === "" || this.state.message === "" ){
     this.setState({
        formError: true
     })
       return false;
    }else{
        this.setState({
            formError: false
         })
        console.log(`UserData: {
            Username: ${this.state.name},
            Email: ${this.state.email},
            Message: ${this.state.message}
        }`)


        console.log("form sent")

    }

  }

  render() {



    return (
        <div className='footer'>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                  crossOrigin="anonymous"/>
            <span className="spanInitials">Алексей</span>
            {/*<ul className="containerFooter">*/}
            {/*    <li><a href="https://vk.com/aleksey_zayats" target='_blank'> <i className="fa fa-vk"></i> </a></li>*/}
            {/*    <li><a href="https://www.facebook.com/Aleksei.Zayets" target='_blank'> <i className="fa fa-facebook"></i> </a></li>*/}
            {/*    <li><a href="https://t.me/Zaiats_Akeksei" target='_blank'> <i className="fa fa-telegram"></i> </a></li>*/}
            {/*    <li><a href="https://github.com/alexooua" target='_blank'> <i className="fa fa-github"></i> </a></li>*/}
            {/*    <li><a href="viber://chat?number=+380932077941" target='_blank'> <i className="fa fa-whatsapp"></i> </a></li>*/}
            {/*</ul>*/}
            <ul className="containerFooter2">
                <li className="mesBox"><div className="mesBoxImg"></div>Viber Telegram</li>
                <li><a title="Позвонить" href="tel:+380932077941"><i className="fa fa-phone"></i><span>+38-(093)-207-79-41</span></a></li>
                <li><a title="Позвонить" href="tel:+380966635434"><i className="fa fa-phone"></i><span>+38-(096)-663-54-34</span></a></li>

            </ul>

            {/*<span className="spanEndFooter">2020 All rights reserved</span>*/}
        </div>
        // <form >
        //   {/* I am just sending a basic error message */}
        //       {this.state.formError &&
        //         <p className="error">
        //             Fill all the input fields please.
        //         </p>
        //       }
        //       <p>Fill in the next form to send us a message</p>
        //       <div>
        //         <label htmlFor="name">Name</label>
        //         <input type="text" name="name" placeholder="Your name here please" onChange={this.getName} />
        //       </div>
        //       <div>
        //         <label htmlFor="email">Email</label>
        //         <input type="email" name="email" placeholder="We will contact you after reviewing your message" onChange={this.getEmail} />
        //       </div>
        //       <div>
        //         <label htmlFor="name">Message</label>
        //         <textarea onChange={this.getDescription} maxLength="450"></textarea>
        //
        //       </div>
        //       <div>
        //         <p>We will answer as soon as possible</p>
        //         <input type="submit" name="submit" value="Send" onClick= {this.submitForm} />
        //
        //       </div>
        //
        //     </form>
    );
  }
}

export default Form;

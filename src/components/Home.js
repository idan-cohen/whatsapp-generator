import React from "react";
import './Home.css';

export default class Home extends React.Component {


    constructor() {
        super();
        this.state = {
            number : ""
        }
    }

    componentDidMount(){
        this.nameInput.focus();
    }

    onTodoChange(value){
        this.setState({
             number: value
        });
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.sendButton();
        }
    }

    sendButton(){
        if(this.state.number != ""){
            let number = this.state.number.substring(1,this.state.number.length)
            window.location.replace("https://wa.me/972" + number)
        }
    }


    render(){
        return(
            
            <div className="page">

                <header className="header">
                    <h1> שלום, זהו סייען הווטסאפ שלך! </h1>
                </header>

                <div className="sector">
                    
                    <h3 className="text"> כדי לשלוח הודעת טקסט למספר שאינו שמור, הכנס את המספר המלא ולחץ על שלח </h3>
                    <p/>
                    <input className="input" type="text" ref={(input) => { this.nameInput = input; }} onKeyDown={this._handleKeyDown} placeholder="הקלד כאן את המספר אליו אשלח את ההודעה" autoCorrect={false} onChange={e => this.onTodoChange(e.target.value)}/>
                    <p/>
                    <button className="button" type="submit" onClick = {() => this.sendButton()}> שלח! </button>
                </div>

            </div>


        );
    };
};
import React from 'react';

class Update extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler = (e) => {
        // [e.target.name], 2개의 타겟에서 각각의 name을 구별
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value});
        // this.setState({title: e.target.value});
    }

    render(){
        return(
            <div>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                    }.bind(this)}>
                <label>
                    Title: 
                    <input type="text" name="title" value={this.state.title}
                    onChange = {this.inputFormHandler}
                    ></input>
                    <br />  
                </label>
                <label>
                    Description:
                <textarea name="desc" value={this.state.desc}
                onChange = {this.inputFormHandler}
                ></textarea>
                    <br />
                </label>
                <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Update;
import React from 'react';

class Create extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={function (e) {
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                }.bind(this)}>
                    <label>
                        Title:
                    <input type="text" name="title"></input>
                        <br />
                    </label>
                    <label>
                        Description:
                    <textarea name="desc"></textarea>
                        <br />
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}
export default Create;
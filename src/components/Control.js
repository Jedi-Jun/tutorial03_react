import React from 'react';

class Control extends React.Component {
    render() {
        if(this.props.data === 'welcome') {
            return <div>
            <button onClick={function (e) {
                this.props.onChangeMode("create");
            }.bind(this)}>
                CREATE
        </button>
            <button onClick={function (e) {
                this.props.onChangeMode("update");
            }.bind(this)} disabled>
                UPDATE
        </button>
            <button onClick={function (e) {
                this.props.onChangeMode("delete");
            }.bind(this)} disabled>
                DELETE
        </button>
        </div>
        } else if (this.props.data === 'read') {
            return <div>
            <button onClick={function (e) {
                this.props.onChangeMode("create");
            }.bind(this)} disabled>
                CREATE
        </button>
            <button onClick={function (e) {
                this.props.onChangeMode("update");
            }.bind(this)}>
                UPDATE
        </button>
            <button onClick={function (e) {
                this.props.onChangeMode("delete");
            }.bind(this)}>
                DELETE
        </button>
        </div>
        }
    }
}

export default Control;
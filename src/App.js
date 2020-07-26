import React from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import Control from './components/Control';
import Create from './components/Create';
import Update from './components/Update';

var _title, _desc = null;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'welcome',
			welcome: { title: "Welcome", sub: "hi, React!" },
			subject: { title: "WEB", sub: "World Wide Web!" },
			contents: [
				{ id: "1", title: 'HTML', desc: 'HTML is HyperText Markup Language.' },
				{ id: "2", title: 'CSS', desc: 'Cascade Style Sheet.' },
				{ id: "3", title: 'JavaScript', desc: 'Javascript is not java' }],
			selected_content_id: null,
		}
	}

	getReadContents() {
		var i = 0;
		while (i < this.state.contents.length) {
			if (this.state.contents[i].id === this.state.selected_content_id) {
				_title = this.state.contents[i].title;
				_desc = this.state.contents[i].desc;
				break;
			}
			i++;
		}
		var article = [_title, _desc];
		return article;
	}

	getContents() {
		if (this.state.mode === 'welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.sub;
		} else if (this.state.mode === 'read') {
			_title = this.getReadContents()[0];
			_desc = this.getReadContents()[1];
		} else if (this.state.mode === 'create') {
			_title = "create";
			_desc = <Create
				onSubmit={function (_title, _desc) {
					var max_content_id = String(this.state.contents.length + 1);
					var _contents = Array.from(this.state.contents);
					_contents.push({ id: max_content_id, title: _title, desc: _desc });
					this.setState({
						mode: 'read',
						contents: _contents,
						selected_content_id: max_content_id,
					});
				}.bind(this)}>
			</Create>;
		} else if (this.state.mode === 'update') {
			_title = "update";
			_desc = <Update
				data={this.state.contents[this.state.selected_content_id - 1]}
				onSubmit={function (_title, _desc) {
					_contents = Array.from(this.state.contents);
					_contents[this.state.selected_content_id - 1] = { id: this.state.selected_content_id, title: _title, desc: _desc };
					this.setState({
						mode: 'read',
						contents: _contents,
					});
				}.bind(this)}>
			</Update>;
		} else if (this.state.mode === 'delete') {
			var i = 0;
			while (i < this.state.contents.length) {
				if (this.state.contents[i].id === this.state.selected_content_id) {
					var _contents = Array.from(this.state.contents);
					_contents.splice(i, 1);
					break;
				}
				i++;
			}
			this.setState({
				mode: 'welcome',
				contents: _contents,
			});
		}
		var article = [_title, _desc];
		return article;
	}

	render() {
		this.getContents();
		return (
			<div>
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
					onChangePage={function (e) {
						e.preventDefault();
						this.setState({
							mode: 'welcome'
						});
					}.bind(this)}>
				</Subject>
				<TOC
					data={this.state.contents}
					onChangePage={function (id) {
						this.setState({
							mode: 'read',
							selected_content_id: id
						});
					}.bind(this)}>
				</TOC>
				<Control
					data={this.state.mode}
					onChangeMode={function (_mode) {
						this.setState({
							mode: _mode,
						});
					}.bind(this)}
				></Control>
				<Content
					title={this.getContents()[0]}
					desc={this.getContents()[1]}>
				</Content>
			</div>
		);
	}
}

export default App;
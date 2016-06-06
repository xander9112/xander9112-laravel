import React, {PropTypes, Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Task from './Task';

const style = {
	marginBottom: 10
};

const progressStyle = {
	position:  'absolute',
	top:       '50%',
	left:      '50%',
	transform: 'translate(-50%, -50%)'
};

export default class Tasks extends Component {
	constructor (props) {
		super(props);

		this.state = {
			formValue: {}
		}
	}

	addTask () {
		const { taskActions } = this.props;

		taskActions.addTask(this.state.formValue);
	}

	changeForm (event, value) {
		let { formValue } = this.state;
		let name = event.target.name;
		formValue[ name ] = value;

		this.setState({
			formValue
		});
	}

	render () {
		const { tasks, taskActions } = this.props;

		let lists = <CircularProgress size={2}/>;

		if (tasks.tasks.length) {
			lists = tasks.tasks.map((task) => {
				return <Paper style={style} zDepth={2} key={task.id}>
					<Task task={task} taskActions={taskActions}/>
				</Paper>
			});
		}

		return (
			<div>
				{tasks.fetching ? <CircularProgress style={progressStyle} size={2}/> :
					<List>
						{lists}
					</List>
				}

				<TextField hintText="Название задачи" name="name" onChange={::this.changeForm}/>
				<TextField hintText="Описание задачи" name="description" onChange={::this.changeForm} type="textarea"/>
				<FlatButton label="Создать" onTouchTap={::this.addTask}/>
			</div>
		);
	}
}

Tasks.propTypes = {
	// year:      PropTypes.number.isRequired,
	// photos:    PropTypes.array.isRequired,
	// getPhotos: PropTypes.func.isRequired,
	// error:     PropTypes.string.isRequired
};

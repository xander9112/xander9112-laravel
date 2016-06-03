import React, {PropTypes, Component} from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

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

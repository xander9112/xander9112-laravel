import React, {PropTypes, Component} from 'react'
import {ListItem} from 'material-ui/List';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const style = {
	marginBottom: 10
};

export default class Task extends Component {
	constructor (props) {
		super(props);
	}

	edit (event) {
		const { task, taskActions } = this.props;
		taskActions.editTask(task);
	}

	complete (event) {
		const { task, taskActions } = this.props;
		taskActions.completeTask(task);
	}

	delete (event) {
		const { task, taskActions } = this.props;
		taskActions.deleteTask(task.id);
	}

	render () {
		const { task } = this.props;

		const iconButtonElement = (
			<IconButton
				touch={true}
				tooltip="more"
				tooltipPosition="bottom-left"
			>
				<MoreVertIcon color={grey400}/>
			</IconButton>
		);
		const rightIconMenu = (
			<IconMenu iconButtonElement={iconButtonElement}>
				<MenuItem onTouchTap={::this.edit}>Изменить</MenuItem>
				<MenuItem onTouchTap={::this.complete}>Закончить</MenuItem>
				<MenuItem onTouchTap={::this.delete}>Удалить</MenuItem>
			</IconMenu>
		);

		return (
			<ListItem
				primaryText={task.name}
				secondaryText={task.description}
				rightIconButton={rightIconMenu}
			/>
		);
	}
}

Task.propTypes = {
	// year:      PropTypes.number.isRequired,
	// photos:    PropTypes.array.isRequired,
	// getPhotos: PropTypes.func.isRequired,
	// error:     PropTypes.string.isRequired
};

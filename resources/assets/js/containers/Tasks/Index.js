import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as taskActions from '../../actions/TaskActions'

import Tasks from '../../components/Tasks/Tasks';

class Index extends Component {
	componentDidMount () {
		this.props.taskActions.getTasks();
	}

	render () {
		const { tasks, taskActions } = this.props;

		return (
			<div>
				<Tasks
					tasks={tasks}
					taskActions={taskActions}
				/>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		tasks: state.task
		// page: state.page
	}
}

function mapDispatchToProps (dispatch) {
	return {
		taskActions: bindActionCreators(taskActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

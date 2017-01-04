import React from 'react';
import {connect} from 'react-redux';
import BusySpinner from '../components/common/BusySpinner';

class AppContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
                <BusySpinner busy={this.props.busy}/>
            </div>
        );
    }
}

let componentState = ({root}) => ({
    busy: root.getIn(['ui', 'busy']),
    app: root.get('app').toJS()
});

module.exports = connect(componentState)(AppContainer);

import React from 'react';
import {connect} from 'react-redux';
import styles from '../stylesheet/less/main.less';

// actions
import {
    initializeAppThroughSaga,
    initializeAppThroughThunk
} from '../actions/RootActions';

// components
import Header from '../components/Header';
import PaginationTable from '../components/PaginationTable';

class HomeContainer extends React.Component {

    handleActionByThunk() {
        this.props.dispatch(initializeAppThroughThunk({status: 'Initializing through thunk'}));
    }

    handleActionBySaga() {
        this.props.dispatch(initializeAppThroughSaga({status: 'Initializing through Saga'}));
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.uploadField}>
                        <input type="file" name="filee"/>
                        <button>Upload</button>
                    </div>
                    <div className={styles.searchField}>
                        <input type="text" name="search" />
                        <button><i className="fa fa-search fa-2x"></i></button>
                    </div>

                    <PaginationTable />
                </div>
            </div>
        );
    }
}

let componentState = ({root}) => ({
    app: root.get('app').toJS()
});

module.exports = connect(componentState)(HomeContainer);

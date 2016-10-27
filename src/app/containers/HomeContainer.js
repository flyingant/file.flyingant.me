import React from 'react';
import {connect} from 'react-redux';
import styles from '../stylesheet/less/main.less';

// actions
import {
    uploadFile
} from '../actions/FileActions';

// components
import Header from '../components/Header';
import PaginationTable from '../components/PaginationTable';

class HomeContainer extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state ={
            selectedFile: null,
            selectedFileName: ""
        };
        this.handleSelectFile = this.handleSelectFile.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    handleSelectFile(event) {
        let fileName = event.target.files[0].name;
        this.setState({
            selectedFile: event.target.files[0],
            selectedFileName: fileName
        });
    }

    handleUploadFile() {
        var formData = new FormData();
        formData.append('file', this.state.selectedFile);
        this.props.dispatch(uploadFile({
            formData: formData
        }));
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.uploadField}>
                        <div className={styles.fileContainer}>
                            <div className={styles.cover}>
                                {this.state.selectedFileName === "" ? "Drag and drop a file here or click here" : this.state.selectedFileName}
                            </div>
                            <input ref="file" type="file" name="file" onChange={this.handleSelectFile}/>
                        </div>
                        <button onClick={this.handleUploadFile}>Upload</button>
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

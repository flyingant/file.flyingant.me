import React from 'react';
import {connect} from 'react-redux';
import styles from '../stylesheet/less/main.less';

// actions
import {
    filterFiles,
    selectFile,
    uploadFile
} from '../actions/FileActions';

// components
import Header from '../components/Header';
import PaginationTable from '../components/PaginationTable';

class HomeContainer extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state ={
            queryString: this.props.app.queryString,
            offset: this.props.app.offset,
            max: this.props.app.max,
            selectedFile: null,
            selectedFileName: ""
        };
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
        this.handleFilterFiles = this.handleFilterFiles.bind(this);
        this.handleSelectFile = this.handleSelectFile.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }

    componentDidMount() {
        this.handleFilterFiles();
    }

    handleFilterFiles() {
        this.props.dispatch(filterFiles({
            queryString: this.state.queryString,
            offset: this.state.offset,
            max: this.state.max
        }))
    }

    handleChangeQuery(event) {
        this.setState({
            queryString: event.target.value,
        });
    }

    handleSelectFile(event) {
        let file = event.target.files[0];
        this.setState({
            selectedFile: file,
            selectedFileName: file.name
        });
        this.props.dispatch(selectFile({
            file: file
        }));
    }

    handleUploadFile() {
        var formData = new FormData();
        formData.append('file', this.state.selectedFile);
        this.props.dispatch(uploadFile({
            formData: formData
        }));
    }

    render() {
        const { app } = this.props;
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
                        <input type="text" name="search" onChange={this.handleChangeQuery}/>
                        <button onClick={this.handleFilterFiles}><i className="fa fa-search fa-2x"></i></button>
                    </div>

                    <PaginationTable data={app.files} offset={app.offset === 0 ? 1 : app.offset} max={app.max} totalCount={app.totalCount} hasPrevius={app.hasPrevious} hasNext={app.hasNext}/>
                </div>
            </div>
        );
    }
}

let componentState = ({root}) => ({
    app: root.get('app').toJS()
});

module.exports = connect(componentState)(HomeContainer);

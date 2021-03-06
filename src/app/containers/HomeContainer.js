import React from 'react';
import {connect} from 'react-redux';
import styles from '../stylesheet/less/main.less';
const FontAwesome = require('react-fontawesome');

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
            selectedFile: null,
            fileType: '',
            selectedFileName: ""
        };
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
        this.handleChangeFileType = this.handleChangeFileType.bind(this);
        this.handleFilterFiles = this.handleFilterFiles.bind(this);
        this.handleSelectFile = this.handleSelectFile.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.onSelectPrevious = this.onSelectPrevious.bind(this);
        this.onSelectNext = this.onSelectNext.bind(this);
    }

    componentDidMount() {
        this.handleFilterFiles();
    }

    handleFilterFiles() {
        this.props.dispatch(filterFiles({
            queryString: this.state.queryString,
            offset: 0,
            max: 10
        }))
    }

    handleChangeQuery(event) {
        this.setState({
            queryString: event.target.value,
        });
    }

    handleSelectFile(event) {
        let file = event.target.files[0];
        let formData = new FormData();
        this.setState({
            selectedFile: file,
            selectedFileName: file.name
        });
        formData.append('file', file);
        formData.append('type', this.state.fileType);
        this.props.dispatch(uploadFile({
            formData: formData
        }));
    }

    handleChangeFileType(event) {
        this.setState({
            fileType: event.target.value,
        });
    }

    handleUploadFile() {
        var formData = new FormData();
        formData.append('file', this.state.selectedFile);
        formData.append('type', this.state.fileType);
        this.props.dispatch(uploadFile({
            formData: formData
        }));
    }

    onSelectPrevious() {
        let offset = this.props.app.offset;
        const max = this.props.app.max;
        offset = offset - max;
        this.props.dispatch(filterFiles({
            queryString: this.props.app.queryString,
            offset: offset < 0 ? 0 : offset,
            max: max
        }))
    }

    onSelectNext() {
        let offset = this.props.app.offset;
        const max = this.props.app.max;
        const totalCount = this.props.app.totalCount;
        offset = offset + max;
        this.props.dispatch(filterFiles({
            queryString: this.props.app.queryString,
            offset: offset > totalCount ? totalCount : offset,
            max: max
        }))
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
                                Drop a file here or Click to select file
                            </div>
                            <input ref="file" type="file" name="file" onChange={this.handleSelectFile}/>
                        </div>
                        <input ref="fileType" type="text" name="type" placeholder="File Type (optional)"
                               onChange={this.handleChangeFileType}/>
                    </div>
                    <div className={styles.searchField}>
                        <input type="text" name="search" onChange={this.handleChangeQuery}/>
                        <button onClick={this.handleFilterFiles}><FontAwesome name="search" size="2x"/></button>
                    </div>

                    <PaginationTable
                      data={app.files}
                      offset={app.offset}
                      max={app.max}
                      totalCount={app.totalCount}
                      onSelectPrevious={this.onSelectPrevious}
                      onSelectNext={this.onSelectNext}
                      />
                </div>
            </div>
        );
    }
}

let componentState = ({root}) => ({
    app: root.get('app').toJS()
});

module.exports = connect(componentState)(HomeContainer);

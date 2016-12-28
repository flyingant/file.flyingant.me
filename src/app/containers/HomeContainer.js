import React from 'react';
import {connect} from 'react-redux';
import styles from '../stylesheet/less/main.less';

// actions
import {
    filterFiles,
    selectFile,
    uploadFile,
    createQRcode,
    clearQRCode
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
            selectedFileName: ""
        };
        this.handleChangeQuery = this.handleChangeQuery.bind(this);
        this.handleFilterFiles = this.handleFilterFiles.bind(this);
        this.handleSelectFile = this.handleSelectFile.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.onSelectPrevious = this.onSelectPrevious.bind(this);
        this.onSelectNext = this.onSelectNext.bind(this);
        this.onCreateQRCode = this.onCreateQRCode.bind(this);
        this.onClearQRCode = this.onClearQRCode.bind(this);
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

    onCreateQRCode(link) {
        this.props.dispatch(createQRcode({
            link: link
        }));
    }

    onClearQRCode() {
        this.props.dispatch(clearQRCode());
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
                    {
                        app.qrcode.length > 0
                            ?   <div className={styles.qrcode}>
                                    <a onClick={this.onClearQRCode}>&times;</a>
                                    <img width="300" height="300" src={app.qrcode}/>
                                </div>
                            : null
                    }
                    <div className={styles.searchField}>
                        <input type="text" name="search" onChange={this.handleChangeQuery}/>
                        <button onClick={this.handleFilterFiles}><i className="fa fa-search fa-2x"></i></button>
                    </div>

                    <PaginationTable
                      data={app.files}
                      offset={app.offset}
                      max={app.max}
                      totalCount={app.totalCount}
                      onSelectPrevious={this.onSelectPrevious}
                      onSelectNext={this.onSelectNext}
                      onCreateQRCode={this.onCreateQRCode}
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

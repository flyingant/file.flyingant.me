import React from 'react';
import styles from '../stylesheet/less/_table.less';
import cn from 'classnames';

class PaginationTable extends React.Component {

  render() {
    return (
      <div className={styles.table}>
        <small className={styles.count}>Total: {this.props.totalCount}</small>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Create Date</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
          { this.props.data.map((file) => {
            return (
              <tr key={file.uuid.substring(0, 6)}>
                <td>{file.uuid.substring(0, 6)}</td>
                <td>{file.name}</td>
                <td>{file.mimeType}</td>
                <td>{parseInt(Number(file.size)/1000) + ' KB'}</td>
                <td>{file.dateCreated}</td>
                <td><a className="fa fa-download" href={file.externalLink}></a></td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <span className={styles.previous}><i className="fa fa-chevron-left"></i></span>
          <span>1 / 8</span>
          <span className={styles.next}><i className="fa fa-chevron-right"></i></span>
        </div>
      </div>
    );
  }
}

module.exports = PaginationTable;

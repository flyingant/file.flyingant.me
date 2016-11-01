import React from 'react';
import styles from '../stylesheet/less/_table.less';
import cn from 'classnames';

class PaginationTable extends React.Component {

  render() {
    const { offset, max, totalCount } = this.props;
    let currentPage = Math.ceil((offset + max -1) / max);
    let totalPages = Math.floor((totalCount + max -1) / max);
    let hasPrevious = currentPage !== 1;
    let hasNext = currentPage !== totalPages;

    return (
      <div className={styles.table}>
        <small className={styles.count}>Total: {totalCount}</small>
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
          { hasPrevious
            ? <span className={styles.previous} onClick={this.props.onSelectPrevious}><i className="fa fa-chevron-left"></i></span>
            : null
          }
          <span>{ currentPage } / { totalPages }</span>
          { hasNext
            ? <span className={styles.next} onClick={this.props.onSelectNext}><i className="fa fa-chevron-right"></i></span>
            : null
          }
        </div>
      </div>
    );
  }
}

module.exports = PaginationTable;

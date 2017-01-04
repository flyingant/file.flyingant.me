import React from 'react';
import styles from '../stylesheet/less/_table.less';
import cn from 'classnames';
const FontAwesome = require('react-fontawesome');

class PaginationTable extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.onClickToCopy = this.onClickToCopy.bind(this);
  }

  onClickToCopy (link) {
    window.prompt("Copy the link to clipboard: Ctrl+C or Command+C, Enter", link);
  }

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
              <th>Operation</th>
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
                <td>
                  <a href={file.externalLink}>
                    <FontAwesome name="download"/>
                  </a>
                  <a onClick={() => this.onClickToCopy(file.externalLink)}>
                    <FontAwesome name="clipboard"/>
                  </a>
                  <a onClick={() => this.props.onCreateQRCode(file.externalLink)}>
                    <FontAwesome name="qrcode"/>
                  </a>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        {
          this.props.data.length > 0
          ?  <div className={styles.pagination}>
              { hasPrevious
                  ? <span className={styles.previous} onClick={this.props.onSelectPrevious}><i className="fa fa-chevron-left"></i></span>
                  : <span className={styles.previous}><i className="fa fa-chevron-left" style={{color: "#DDD"}}></i></span>
              }
              <span>{ currentPage } / { totalPages }</span>
              { hasNext
                  ? <span className={styles.next} onClick={this.props.onSelectNext}><i className="fa fa-chevron-right"></i></span>
                  : <span className={styles.next}><i className="fa fa-chevron-right" style={{color: "#DDD"}}></i></span>
              }
            </div>
          : null
        }

      </div>
    );
  }
}

module.exports = PaginationTable;

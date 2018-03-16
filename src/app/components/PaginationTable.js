import React from 'react';
import styles from '../stylesheet/less/_table.less';
import moment from 'moment';
import cn from 'classnames';

const FontAwesome = require('react-fontawesome');

class PaginationTable extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.onClickToCopy = this.onClickToCopy.bind(this);
  }

  onClickToCopy (link) {
    document.execCommand('copy');
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
              <th>Name</th>
              <th className={styles.mobileToHide}>Type</th>
              <th>Size</th>
              <th className={styles.mobileToHide}>Create Date</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
          { this.props.data.map((file) => {
            return (
                <tr data-uuid={file.uuid} key={file.uuid}>
                <td>{file.name}</td>
                <td className={styles.mobileToHide}>{file.mimeType}</td>
                <td>{parseInt(Number(file.size)/1000) + ' KB'}</td>
                  <td className={styles.mobileToHide}>{moment(file.dateCreated).fromNow()}</td>
                <td>
                  <a href={file.externalLink}>
                    <FontAwesome name="download"/>
                  </a>
                  <a onClick={() => this.onClickToCopy(file.externalLink)}>
                    <FontAwesome name="clipboard"/>
                  </a>
                  {
                    file.mimeType.indexOf('image') != -1 &&
                    <a href={`https://image-preview.flyingant.me/?url=${encodeURIComponent(file.externalLink)}`}
                       target="_blank">
                      <FontAwesome name="image"/>
                    </a>
                  }
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

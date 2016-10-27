import React from 'react';
import styles from '../stylesheet/less/_table.less';
import cn from 'classnames';

class PaginationTable extends React.Component {

  render() {
    return (
      <div className={styles.table}>
        <small className={styles.count}>Total: 88</small>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Name</td>
              <td>Type</td>
              <td>Size</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Name</td>
              <td>Type</td>
              <td>Size</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Name</td>
              <td>Type</td>
              <td>Size</td>
            </tr>
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

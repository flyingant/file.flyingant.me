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
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Size</th>
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
      </div>
    );
  }
}

module.exports = PaginationTable;

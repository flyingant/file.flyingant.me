import React from 'react';
import styles from '../stylesheet/less/_header.less';
import cn from 'classnames';

class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <i className={cn(styles.icon, 'fa fa-navicon fa-2x')}></i>
      </div>
    );
  }
}

module.exports = Header;

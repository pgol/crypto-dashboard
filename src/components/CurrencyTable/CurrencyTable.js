import React, {Component} from 'react';
import './CurrencyTable.css'
import tableData from '../../mocks/curriencies';

import {Table} from 'antd';

class CurrencyTable extends Component {
  render() {

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Profit',
        dataIndex: 'profit',
        key: 'profit',
      }
    ];

    return (
      <div>
        <Table dataSource={this.props.expenses} columns={columns}/>
      </div>
    );
  }
}


export default CurrencyTable;

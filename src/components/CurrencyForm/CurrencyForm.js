import React, { Component } from 'react';
import './CurrencyForm.css'

import { Input } from 'antd';
import { Select } from 'antd';
import { Button } from 'antd';



const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}


class CurrencyForm extends Component {
  render() {
    return (
      <div className="CurrencyForm-wrapper">
        <div className="CurrencyForm-item">
          <Input placeholder="Basic usage" />
        </div>
        <div className="CurrencyForm-item">
          <Input placeholder="Basic usage" />
        </div>
        <div className="CurrencyForm-item">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        <div className="CurrencyForm-item">
          <Button type="primary">Primary</Button>
        </div>
      </div>
    )
  }
}

export default CurrencyForm;

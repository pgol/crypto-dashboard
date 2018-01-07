import React, {Component} from 'react';
import cryptoService from '../../service/crypto-service';
import './CurrencyForm.css'

import { Button, Form, Input, Select } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="CurrencyForm-wrapper">

        <FormItem className="CurrencyForm-item">
        {getFieldDecorator('currency', {
            rules: [{ required: true, message: 'Please input your currency!' }],
          })(
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Choose currency"
              optionFilterProp="children"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="XRP">XRP</Option>
              <Option value="IOTA">IOTA</Option>
              <Option value="VeChain">VeChain</Option>
            </Select>
        )}
        </FormItem>

        <FormItem className="CurrencyForm-item">
        {getFieldDecorator('expense', {
            rules: [{ required: true, message: 'Please input your expense!' }],
          })(
          <Input placeholder="Spent $" />
        )}
        </FormItem>
        <FormItem className="CurrencyForm-item">
        {getFieldDecorator('quantity', {
            rules: [{ required: true, message: 'Please input quantity of coin!' }],
          })(
          <Input placeholder="Quantity" />
        )}
        </FormItem>
        <FormItem className="CurrencyForm-item">
        {getFieldDecorator('value', {
            rules: [{ required: true, message: 'Please input value of coin!' }],
          })(
          <Input placeholder="Value at buy" />
        )}
        </FormItem>
        <div className="CurrencyForm-item">
          <Button htmlType="submit" type="primary">Add expense</Button>
        </div>
      </Form>
    )
  }
}

const CurrencyFormWrapper = Form.create()(CurrencyForm);

export default CurrencyFormWrapper;

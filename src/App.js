import React, { Component } from 'react';

import antd from '../index';

const {
  AutoComplete,
  Button,
  Cascader,
  // Checkbox,
  // Col,
  // DatePicker,
  // Form,
  // Icon,
  // Input,
  Select,
  // Transfer,
  // TreeSelect,
  // Row,
  // Modal,
  // Radio,
  // Table,
  // Pagination,
  // notification,
  // message,
  antdStyle,
} = antd;

import Article from './Article';


class App extends Component {
  onChange(value) {
    console.info('On change: ', value); // eslint-disable-line no-console
  }

  handleSearch(value) {
    console.info('Handle search: ', value); // eslint-disable-line no-console
  }

  /*
  renderSampleNode() {
    return (
      <Article name="sample">

      </Article>
    );
  }
  */

  renderButtonBlockNode() {
    return (
      <Article name="button">
        <Button type="default">button</Button>
        <Button type="primary">button</Button>
        <Button type="dashed">button</Button>
        <Button type="danger">button</Button>
      </Article>
    );
  }

  renderAutoCompleteNode() {
    const dataSource = ['12345', '23456', '34567'];
    return (
      <Article name="autocomplete">
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          // onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
        />
      </Article>
    );
  }

  renderСascaderNode() {
    const options = [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }];

    return (
      <Article name="cascader">
        <Cascader options={options} onChange={this.onChange} placeholder="Please select" />
      </Article>
    );
  }

  renderSelectNode() {
    const Option = Select.Option;

    return (
      <Article name="select">
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
      </Article>
    );
  }

  render() {
    return (
      <section>
        <h1>Components:</h1>
        {this.renderButtonBlockNode()}
        {this.renderAutoCompleteNode()}
        {this.renderСascaderNode()}
        {this.renderSelectNode()}
      </section>
    );
  }
}

export default App;

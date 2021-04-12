import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Search = (data) => {
  const placeholderName = data.title;

  const options =
    data.list.length > 0
      ? data.list.map((x) => <Option key={x.id}>{x.name}</Option>)
      : null;

  const handleSearch = (value) => {
    if (value) {
      data.search(value);
    } else {
      console.log('nothing');
    }
  };

  const handleChange = (value) => {
    const index = value - 1;
    data.setEgg(index);
  };

  return (
    <div className='main-header-container'>
      <Select
        className='selection-title'
        showSearch
        value={null}
        placeholder={placeholderName}
        bordered={false}
        defaultActiveFirstOption={false}
        showArrow={true}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        size={'large'}
        style={{
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 24,
          marginRight: 24,
        }}
        dropdownStyle={{
          backgroundColor: 'rgba(255,255,255,.7)',
          textAlign: 'center',
        }}
      >
        {options}
      </Select>
    </div>
  );
};

export default Search;

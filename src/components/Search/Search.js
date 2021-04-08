import React, { useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const searchValue = (value) => {
  const searchString = value;
  this.props.dispatch({
    type: 'FETCH_EGGTWO',
    params: { searchString },
  });
  console.log('searchString is:', value);
};

const Search = (data) => {
  console.log('searchState', data);
  const [searchString, setSearchString] = useState(undefined);

  const options = data.list.results
    ? data.list.results.map((x) => (
        <Option key={x.id}>{x.name}</Option>
      ))
    : null;

  const handleSearch = (value) => {
    if (value) {
      console.log('value is', value);
      data.search(value);
    } else {
      console.log('nothing');
    }
  };

  const handleChange = (value) => {
    console.log('string value is:', value);
    setSearchString(value);
    data.setEgg(value);
  };

  return (
    <div className='main-header-container'>
      {/* <div className='title'>{data.title}</div> */}
      <Select
        className='title'
        showSearch
        value={searchString}
        placeholder={data.title}
        bordered={false}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    </div>
  );
};

export default Search;

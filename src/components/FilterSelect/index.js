import React from 'react';
import Select from 'react-select';
import { taskStatus } from './../../constants';
import './FilterSelect.scss';

const options = [
  { value: taskStatus.ALL, label: taskStatus.ALL },
  { value: taskStatus.DONE, label: taskStatus.DONE },
  { value: taskStatus.NOT_DONE, label: taskStatus.NOT_DONE }
]

const FilterSelect = (props) => {
  const { filter, setFilter } = props;

  const handleChangeSelect = ({ value }) => setFilter(value);
  
  const getValue = () => filter ? options.find(option => option.value === filter) : '';

  return (
    <Select
      options={options}
      value={getValue()}
      classNamePrefix='filter-select'
      onChange={handleChangeSelect}
    />
  )
}

export default FilterSelect;

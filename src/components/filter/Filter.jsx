import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterByName } from 'redux/filterSlice';
import css from './filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.filterLabel}>
      Find contacts by Name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(filterByName(e.target.value))}
      />
    </label>
  );
};

export default Filter;

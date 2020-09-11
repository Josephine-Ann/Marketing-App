import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const FeatureListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }} />
        <select onChange={(e) => {
            if (e.target.value === "date") {
                props.dispatch(sortByDate());
            } else {
                props.dispatch(sortByAmount());
            }
        }}>
            <option value="date">Newest first</option>
            <option value="amount">By price</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(FeatureListFilters);
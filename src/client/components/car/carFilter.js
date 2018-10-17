import React from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../../actions/filter';

class carFilter extends React.Component {
  render() {
    return (
      <div className="container dropdown-section">
        <label className="dropdown-label" htmlFor="exampleFormControlSelect1">
          Sort by:
          {' '}
        </label>
        <select
          value={this.props.filter.sortBy}
          onChange={(e) => {
            this.props.dispatch(sortBy(e.target.value));
          }}
          className="form-control dropdown-option"
          id="exampleFormControlSelect1"
        >
          <option value="none">---</option>
          <option value="name">Name</option>
          <option value="available">Availability</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(mapStateToProps)(carFilter);

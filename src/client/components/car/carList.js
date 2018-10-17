import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadCars } from '../../actions/cars';
import getSortedCars from '../../selectors/cars';

class carList extends React.Component {
  componentWillMount() {
    this.props.loadCars();
  }

  render() {
    const cars = this.props.cars.map((car, index) => (
      <div className="col-md-4" key={index}>
        <div className="card mb-4 shadow-sm">
          <div className="card-body text-center">
            <img className="card-img-top" src={car.img} alt="car" />
            <h4 className="card-text">{car.name}</h4>
            <p className="card-text">{car.model}</p>
            <p className="card-text">
              Year:&nbsp;
              {car.year}
            </p>
            <div className="align-items-center">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                style={car.available === 'In Dealership' ? {} : { visibility: 'hidden' }}
              >
                Buy
              </button>
            </div>
            {/* <small className="text-muted">{car.available}</small> */}
          </div>
        </div>
      </div>
    ));

    return <div className="row">{cars}</div>;
  }
}

const mapStateToProps = state => ({
  cars: getSortedCars(state.cars, state.filter)
});

const mapDispatchToProps = { loadCars };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(carList)
);

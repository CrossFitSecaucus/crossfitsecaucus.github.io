import React from 'react'
import { Helmet } from "react-helmet"

import Contact from '../components/Contact';

const RentalItemRow = ({selected, label, quantity, cost, multiple, onQuantityChange, onSelectChange}) =>(
  <tr>
    <td className="text-center" style={{width: '3%'}}>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" value="" checked={selected} onClick={onSelectChange} />
          <span className="form-check-sign">
            <span className="check"></span>
          </span>
        </label>
      </div>
    </td>
    <td><strong>{label}</strong></td>
    <td className="text-center">
      {selected && multiple && (
        <button type="button" className="btn btn-info btn-round btn-just-icon btn-sm" onClick={() => onQuantityChange(parseInt(quantity) - 1)}>
          <i className="material-icons">remove</i>
          <div className="ripple-container"></div>
        </button>
      )}
      <span style={{padding: '0 10px'}}>{quantity}</span>
      {selected && multiple && (
        <button type="button" className="btn btn-info btn-round btn-just-icon btn-sm" onClick={() => onQuantityChange(parseInt(quantity) + 1)}>
          <i className="material-icons">add</i>
          <div className="ripple-container"></div>
        </button>
      )}
    </td>
    <td className="text-right">$ {cost}</td>
  </tr>
);

class RentalsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentalItems: [
        {heading: 'Barbells & Plates'},
        {label: '5 lbs plates (2)', cost: 5, deposit: 20},
        {label: '15 lbs plates (2)', cost: 7, deposit: 60},
        {label: '25 lbs plates (2)', cost: 10, deposit: 100},
        {label: '35 lbs plates (2)', cost: 13, deposit: 160},
        {label: '45 lbs plates (2)', cost: 16, deposit: 180, multiple: true},
        {label: 'silencer mats (2)', cost: 10, deposit: 150},
        {label: 'Olympic barbell (45 lbs, 7 ft) with clips', cost: 25, deposit: 200},
        {label: 'squat rack', cost: 15, deposit: 160},
        {label: 'bench', cost: 15, deposit: 200},
        {heading: 'Conditioning/Cardio'},
        {label: 'Concept2 (PM5) rower', cost: 100, deposit: 400},
        {label: 'Rogue Echo bike', cost: 100, deposit: 400},
        // {label: 'rings (2)', cost: 5},
        {heading: 'Kettlebells'},
        {label: '18 lbs kettlebell', cost: 5, deposit: 40},
        {label: '26 lbs kettlebell', cost: 5, deposit: 50},
        // {label: '35 lbs kettlebell', cost: 5},
        // {label: '45 lbs kettlebell', cost: 5},
        {label: '53 lbs kettlebell', cost: 5, deposit: 80},
        // {heading: 'Medicine Balls'},
        // {label: '10 lbs med ball', cost: 5},
        // {label: '12 lbs med ball', cost: 5},
        // {label: '14 lbs med ball', cost: 5},
        // {label: '16 lbs med ball', cost: 5},
        // {label: '20 lbs med ball', cost: 5},
        // {heading: 'Plyo Boxes'},
        // {label: '12" box', cost: 5},
        // {label: '20" box', cost: 5},
        // {label: '24" box', cost: 10},
        // {heading: 'Dumbbells'},
        // {label: '10 lbs dumbbell (1)', cost: 5, multiple: true},
        // {label: '15 lbs dumbbell (1)', cost: 5, multiple: true},
        // {label: '20 lbs dumbbell (1)', cost: 5, multiple: true},
        // {label: '25 lbs dumbbell (1)', cost: 5, multiple: true},
        // {label: '30 lbs dumbbell (1)', cost: 10, multiple: true},
        // {label: '45 lbs dumbbell (1)', cost: 10, multiple: true},
        // {label: '50 lbs dumbbell (1)', cost: 10, multiple: false},
        // {label: '70 lbs dumbbell (1)', cost: 10, multiple: true},
      ],
    }
    this._handleSelectChange = this._handleSelectChange.bind(this);
    this._handleQuantityChange = this._handleQuantityChange.bind(this);
  }

  componentDidMount() {
    window.fetch(this.props.wodUrl)
      .then(res => {
        const {status} = res;
        return status >= 200 && status < 400 ?
          res.text() : null;
      })
      .then(content => this.setState({content}))
      .catch(err => this.setState({failedFetch: true}))
  }

  _handleSelectChange(idx) {
    return e => {
      const rentalItems = this.state.rentalItems.map((r, i) => (
         Object.assign({}, r, i === idx ? {selected: e.target.checked, quantity: e.target.checked ? 1 : 0} : {})
      ))
      this.setState({rentalItems});
    }
  }

  _handleQuantityChange(idx) {
    return quantity => {
      const rentalItems = this.state.rentalItems.map((r, i) => (
         Object.assign({}, r, i === idx ? {quantity, selected: quantity ? r.selected : false} : {})
      ))
      this.setState({rentalItems});
    }
  }

  render() {
    const {rentalItems} = this.state;
    let total = 0;
    let deposit = 0;
    rentalItems.forEach(r => {
      if (r.selected) {
        total += r.cost * r.quantity;
        if (r.deposit) {
          deposit += r.deposit * r.quantity;
        }
      }
    })

    if (deposit > 200 && deposit < 500) {
      deposit = 200;
    } else if (deposit >= 500) {
      deposit = 400;
    }

    return (
      <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Equipment Rental</title>
        <meta name="description" content="Rent barbells, weights, rowers and air bikes." />
        <link rel="canonical" href="https://crossfit-secaucus.com/rental" />
      </Helmet>
        <section className="section section-basic">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <h2 className="title text-center">Equipment Rental</h2>
                <p>
                  During the mandatory shutdown, we are making our training
                  equipment available for rent. Complete this form as a first
                  step to get your hands on what you need.
                </p>
                <hr/>
                <h3>Rental Overview</h3>
                <ul>
                  <li>Free home delivery within local area for rental of $100+/week</li>
                  <li>Rentals are week-to-week</li>
                  <li>Minimum rental period is 3 weeks</li>
                  <li>Equipment subject to availability. First come, first serve.</li>
                </ul>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          rentalItems.map((r, idx) => (
                            r.heading ? (
                              <tr key={idx}>
                                <td colSpan="4"><h4><br/>{r.heading}</h4></td>
                              </tr>
                            ) : (
                              <RentalItemRow
                                key={idx}
                                label={r.label}
                                cost={r.cost}
                                quantity={r.quantity || ''}
                                selected={!!r.selected}
                                multiple={r.multiple}
                                onQuantityChange={this._handleQuantityChange(idx)}
                                onSelectChange={this._handleSelectChange(idx)}
                              />
                            )
                          ))
                        }
                        </tbody>
                    </table>
                    {!total && (
                      <div>
                        <hr/>
                        <h3 className="text-center">
                          ☝️Select desired equipment from the list.
                        </h3>
                        <hr/>
                      </div>
                    )}
                    {total > 0 && (
                      <div>
                        <hr/>
                        <h3 className="text-center">
                          Rate for all selected equipment: <strong>${total}/week</strong>
                        </h3>
                        <p className="text-center" style={{padding: 0}}>
                          <strong>
                            {`($${deposit} deposit required.)`}
                          </strong>
                        </p>
                        <hr/>
                        {total < 35 && (
                          <p className="text-center" style={{padding: 0}}>
                            <strong>
                              {'⚠️ $35 minimum rental rate not met.'}
                            </strong>
                          </p>
                        )}
                        {total >= 35 && (
                          <p className="text-center" style={{padding: 0}}>
                            <strong>
                              {total >= 100 ? '🚚 Free home delivery' : '🏢 Selection ready for pick-up weekdays at 6pm'}
                            </strong>
                          </p>
                        )}
                        <hr/>
                      </div>
                    )}

                    <Contact
                      messageAddition={rentalItems.filter(r => r.selected).map(r => `${r.quantity || 1}x ${r.label} ($${r.cost}/item)`).join("\n") + `\n\nWeekly Rate: $${total} / Deposit $${deposit}`}
                      noCard
                      header={
                        <div>
                          <h3>"How do I get my hands on the equipment?"</h3>
                          <p><strong>Let us know you're interested by selecting the equipment you want to rent above and submitting the form below.</strong></p>
                          <p>For even faster service, after completing the form please <a href="http://register.crossfit-secaucus.com/" target="_blank">create an account for yourself</a> on our website and add your credit card information. (You won't get charged until you agree to the rental terms.)</p>
                          <p>You may pick up your equipment the same day (if your application is received before 3pm) or the next day at 6pm.</p>
                        </div>
                      }
                      submitLabel="Send Rental Request"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default RentalsPage

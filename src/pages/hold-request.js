import moment from 'moment';
import React from 'react'
import styled from 'styled-components'
import { Helmet } from "react-helmet"
import Link from 'gatsby-link';

import Contact from '../components/Contact';

const Select = styled.select `
  -moz-appearance: auto;
  -webkit-appearance: auto;
  appearance: auto;
}
`

class HoldRequestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minDate: null, // soonest hold start
      maxDate: null,

      startMonth: null,
      startDay: null,
      endMonth: null,
      endDay: null,
      source: 'unkminDaten',
      minDate: null,

      agree1: false,
      agree2: false,
    }

    this.initRealTime = this.initRealTime.bind(this)

    this.startDateOptions = this.startDateOptions.bind(this)
    this.endDateOptions = this.endDateOptions.bind(this)

    this.setStartMonth = this.setStartMonth.bind(this)

    this.additionalContactFields = this.additionalContactFields.bind(this)
    this.isValid = this.isValid.bind(this)
    this.holdDates = this.holdDates.bind(this)

    this.initRealTime()
  }

  setStartMonth(startMonth) {
    this.setState({ startMonth, startDay: null, endMonth: null, endDay: null })
  }

  setStartDay(startDay) {
    this.setState({ startDay, endMonth: null, endDay: null })
  }

  setEndMonth(endMonth) {
    this.setState({ endMonth, endDay: null })
  }

  setEndDay(endDay) {
    this.setState({ endDay })
  }

  startDateOptions() {
    const { minDate } = this.state;
    if (!minDate) { return [] }

    const months = []
    const days = {}

    for (let offset = 0; offset < 4; offset++) {
      const d = minDate.clone().add({ months: offset })
      const month = d.format('YYYY-MM')

      months.push({ value: month, text: d.format('MMMM') })
      days[month] = []

      const startDay = offset === 0 ? d : d.startOf('month')
      const endDay = startDay.clone()

      while (startDay.month() === endDay.month()) {
        days[month].push({ value: endDay.format('DD'), text: endDay.format('Do') })
        endDay.add({ day: 1 })
      }
    }

    return { months, days }
  }

  endDateOptions() {
    const { startMonth, startDay } = this.state

    const months = []
    const days = {}

    if (startMonth && startDay) {
      const dateOptionString = `${startMonth}-${startDay}`
      const dateOption = moment(dateOptionString).clone().add({ days: 14 })
      const maxDate = dateOption.clone().add({ weeks: 12 })

      while (dateOption.isSameOrBefore(maxDate)) {
        const month = dateOption.format('YYYY-MM')

        if (!days[month]) {
          months.push({ value: month, text: dateOption.format('MMMM') })

          days[month] = []
        }

        days[month].push({ value: dateOption.format('DD'), text: dateOption.format('Do') })

        dateOption.add({ days: 1 })
      }
    }

    return { months, days }
  }

  initRealTime() {
    if (typeof fetch === 'function') {
      fetch("https://worldtimeapi.org/api/timezone/America/New_York")
        .then(response => response.json())
        .then(data => moment(data.datetime).startOf('day'))
        .catch(() => moment())
        .then(today => today.add({ days: 14 }))
        .then(minDate => this.setState({
          minDate,
          startMonth: minDate.format('YYYY-MM'),
        }))
    } else {
      setTimeout(() => {
        const minDate = moment().add({ days: 14 })

        this.setState({
          minDate,
          startMonth: minDate.format('YYYY-MM'),
        })
      }, 1000)
    }
  }

  additionalContactFields() {
    const { startMonth, startDay, endMonth, endDay } = this.state

    return {
      startDate: startDay ? `${startMonth}-${startDay}` : null,
      endDate: endDay ? `${endMonth}-${endDay}` : null,
    }
  }

  holdDates() {
    const { startMonth, startDay, endMonth, endDay } = this.state

    return `Hold Request: ${startMonth}-${startDay} to ${endMonth}-${endDay}`
  }

  isValid() {
    const { startMonth, startDay, endMonth, endDay, agree1, agree2 } = this.state

    return startMonth && startDay && endMonth && endDay && agree1 && agree2
  }

  render() {
    const { months: minMonths, days: minDays } = this.startDateOptions()
    const { months: maxMonths, days: maxDays } = this.endDateOptions()
    const { startMonth, startDay, endMonth, endDay, agree1, agree2 } = this.state

    if (!minMonths || !minDays) {
      return false
    }

    return (
      <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Membership Hold Request</title>
        <meta name="description" content="Rent barbells, weights, rowers and air bikes." />
        <link rel="canonical" href="https://crossfit-secaucus.com/rental" />
      </Helmet>
        <section className="section section-basic">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="title text-center">Membership Hold Request</h2>
                <p>
                  Getting over an injury, traveling or just need a break?
                  We know there'll be times you simply can't make it to the gym.
                  So if you want to put your membership on hold, you're in the
                  right place.
                </p>
                <hr/>
                <h3>Things to Know</h3>
                <ul>
                  <li>A 14-day written notice is required</li>
                  <li>A hold can last from 2 to 12 weeks</li>
                  <li>Your membership will automatically resume at the end of the hold</li>
                  <li>Immediate holds are available if you provide a written doctor's note</li>
                </ul>

                <small className="center">All details about the hold policy can be found in the <Link to="/service-agreement">Service Agreement</Link>.</small>

                <hr/>

                <Contact
                  messageAddition={this.holdDates()}
                  template="holdRequest"
                  additionalFields={this.additionalContactFields()}
                  additionalFieldsValid={this.isValid()}
                  noCard
                  hideMessageField
                  header={
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td width="40%"><strong>Hold Start Date</strong></td>
                            <td>
                            <Select value={startMonth} onChange={({target}) => this.setStartMonth(target.value)}>
                              {minMonths.map((m) => (
                                <option key={m.value} value={m.value}>{m.text}</option>
                              ))}
                            </Select>
                            &nbsp;
                            <Select value={`${startDay}`} disabled={!startMonth} onChange={({target}) => this.setStartDay(target.value)}>
                              <option value=""></option>
                              {startMonth && minDays[startMonth] && minDays[startMonth].map((d) => (
                                <option key={d.value} value={d.value}>{d.text}</option>
                              ))}
                            </Select>
                            </td>
                          </tr>
                          <tr>
                            <td><strong>Hold End Date</strong></td>
                            <td>
                            <Select value={`${endMonth}`} disabled={!startDay} onChange={({target}) => this.setEndMonth(target.value)}>
                              <option value=""></option>
                              {maxMonths.map((m) => (
                                <option key={m.value} value={m.value}>{m.text}</option>
                              ))}
                            </Select>
                            &nbsp;
                            <Select value={`${endDay}`} disabled={!endMonth} onChange={({target}) => this.setEndDay(target.value)}>
                              <option value=""></option>
                              {endMonth && maxDays[endMonth] && maxDays[endMonth].map((d) => (
                                <option key={d.value} value={d.value}>{d.text}</option>
                              ))}
                            </Select>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <label style={{ lineHeight: 1.5 }}>
                                <input type="checkbox" checked={agree1} onChange={({target}) => this.setState({ agree1: target.checked })} />
                                &nbsp;
                                By requesting a hold, I commit to at least one more renewal after the hold ends.
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <label style={{ lineHeight: 1.5 }}>
                                <input type="checkbox" checked={agree2} onChange={({target}) => this.setState({ agree2: target.checked })} />
                                &nbsp;
                                I understand that my membership cannot be canceled while on hold.
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  }
                  submitLabel="Send Hold Request"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default HoldRequestPage

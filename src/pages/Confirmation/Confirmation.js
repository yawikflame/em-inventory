import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Confirmation.css';

export class Confirmation extends Component {
  //TODO: change referenceId to real value
  render() {
    const referenceId = '5-43-8742';
    return (
      <div className='thanks-pop' style={{ display: 'table' }}>
        <div className='thanks-pop-outer'>
          <div className='thanks-pop-inner'>
            <div
              className='thanks-title'
              style={{
                background: 'url(/assets/thanks.svg)',
                backgroundPosition: 'center',
                backgroundSize: '25%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Completed!
            </div>
            <div className='refText'>
              <span id='referId'>#{referenceId}</span>
            </div>
            <div className='thanksTxt'>
              Thank you, {this.props.currentUser.first_name}.
            </div>
            <div className='refText'>
              Your inventory has been sent to your BudgetVanLines rep.
            </div>
            <button
              className='ui button primary'
              onClick={
                () =>
                  (window.location.href = `https://myquote.budgetvanlines.com/welcome/${this.props.userToken}`)
                // (window.location.href = `https://bvl-sabf.web.app/welcome/${this.props.userToken}`)
              }
            >
              Jump to SBM
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leadId: state.auth.currentUser.lead_id,
    currentUser: state.auth.currentUser,
    userToken: state.auth.token,
  };
};

export default connect(mapStateToProps, {})(Confirmation);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { submitInventory } from '../../actions';
import SpecialItemList from '../../components/SpecialItemList/SpecialItemList';
import './SpecialCareItems.css';

class SpecialCareItems extends Component {
  linkOnClickHandler = () => {
    this.props.submitInventory(this.props.items, this.props.leadId);
    // window.location.href = `https://bvl-sabf.web.app/welcome/${this.props.userToken}`;
    window.location.href = `https://myquote.budgetvanlines.com/welcome/${this.props.userToken}`;
  };

  render() {
    return (
      <div className='specialCare-pop' style={{ display: 'block' }}>
        <Link to={`/p=${this.props.userToken}/items`}>
          <p style={{ color: 'white', float: 'left', marginLeft: '12.5px' }}>
            <Icon style={{ margin: '0px' }} name='angle left' />
            Go Back
          </p>
        </Link>
        <div className='specialCare-pop-inner'>
          <div
            className='specialCare-title'
            style={{
              background: 'url(/assets/box.svg)',
              backgroundSize: '10%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            Special Handling & Boxing
          </div>

          <p>
            Certain fragile/heavy items require additional protection. Depending
            on the item, these fees may be optional or mandatory. By leaving an
            optional item un-checked, you are agreeing to wrap and pack that
            item yourself (i.e. packed by owner).
          </p>
          <SpecialItemList />
          {/* <Link //TODO: add this back?
            className='skip'
            to={`/p=${this.props.userToken}/confirmation`}
            onClick={this.linkOnClickHandler}
          >
            Skip this, I'll box these myself ?
          </Link> */}

          <div className='inv-btn-outer'>
            <Link
              // to={`/p=${this.props.userToken}/confirmation`}
              onClick={this.linkOnClickHandler}
            >
              <p
                id='special-care-items-done-btn'
                className='btn inv-btn doneInv'
              >
                Done
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    userToken: state.auth.token,
    leadId: state.auth.currentUser.lead_id,
  };
};

export default connect(mapStateToProps, { submitInventory })(SpecialCareItems);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Modal } from 'semantic-ui-react';
import { addItemQuantity } from '../../actions';

class BoxCalculatorLoaderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //only change state when dialog is opening
    if (!prevState.open && !this.state.open && this.props.isTriggered === 2) {
      this.setState({ open: true });
      setTimeout(() => {
        const normalizedMoveSize = this.props.currentUser.size.toLowerCase();
        if (normalizedMoveSize.includes('studio')) {
          this.addBoxesHandler(this.props.userToken, 5, 10, 3, 0, 2, 0);
        } else if (
          normalizedMoveSize.includes('1') ||
          normalizedMoveSize.includes('one')
        ) {
          this.addBoxesHandler(this.props.userToken, 9, 15, 6, 0, 5, 0);
        } else if (
          normalizedMoveSize.includes('2') ||
          normalizedMoveSize.includes('two')
        ) {
          this.addBoxesHandler(this.props.userToken, 15, 25, 10, 2, 7, 1);
        } else if (
          normalizedMoveSize.includes('3') ||
          normalizedMoveSize.includes('three')
        ) {
          this.addBoxesHandler(this.props.userToken, 20, 40, 12, 4, 7, 2);
        } else if (
          normalizedMoveSize.includes('4') ||
          normalizedMoveSize.includes('four')
        ) {
          this.addBoxesHandler(this.props.userToken, 25, 45, 14, 6, 7, 3);
        }
        this.setState({ open: false });
        this.props.closeCallback(3);
      }, 1000); // TODO: bring back up to 7000 duration
    }
  }

  addBoxesHandler = (token, small, medium, large, wardrobe, picture, dishpack) => {
    this.addBoxesByCount('1151', small, token);
    this.addBoxesByCount('1152', medium, token);
    this.addBoxesByCount('1153', large, token);
    this.addBoxesByCount('1160', wardrobe, token);
    this.addBoxesByCount('1159', picture, token);
    this.addBoxesByCount('1157', dishpack, token);
  };

  addBoxesByCount = (itemId, boxCount, token) => {
    this.props.addItemQuantity(itemId, token, boxCount);
  };

  renderContent() {
    return (
      <>
        <Modal.Description>
          <Image
            size='large'
            src={`${process.env.PUBLIC_URL}/assets/boxloader-sm.gif`}
            wrapped
            className='ui centered grid'
          />
        </Modal.Description>
      </>
    );
  }

  render() {
    return (
      <Modal open={this.state.open}>
        <Modal.Content image className='ui centered grid'>
          {this.renderContent()}
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    currentUser: state.auth.currentUser,
    items: state.items,
  };
};

export default connect(mapStateToProps, { addItemQuantity })(
  BoxCalculatorLoaderModal
);

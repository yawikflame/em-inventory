import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Header, Label, Menu, Segment, Tab } from 'semantic-ui-react';
import {
  fetchItems,
  storeInventory,
  triggerAllItemsModal,
} from '../../actions';
import ItemList from '../../components/ItemList';
import ModalExampleModal from '../../components/ModalExampleModal/ModalExampleModal';
import SearchBar from '../../components/SearchBar/SearchBar';
import './AllItems.css';

class AllItems extends Component {
  renderItemsTotalQuantity() {
    const result = this.props.items.reduce((sum, val) => sum + val.quantity, 0);
    return (
      (
        <Label id='items-total-quantity-lbl'>
          <span id='items-total-quantity-txt'>{result}</span>
        </Label>
      ) || ''
    );
  }
  componentDidUpdate() {
    if (!this.props.triggers.isAllItemsModalTriggered) {
      this.props.triggerAllItemsModal();
    }
  }
  render() {
    const modalImage = `${process.env.PUBLIC_URL}/assets/confused.svg`;
    const modalHeader = `Don't Sweat the Small Stuff`;
    const modalContent = `By selecting your items in the following step,
      we will be able to give an accurate estimate.
      However, your final cost will be based on the
      actual items being transported on the day of
      the move.`;
    return (
      <>
        {!this.props.triggers.isAllItemsModalTriggered && (
          <ModalExampleModal
            image={modalImage}
            imageSize='medium'
            header={modalHeader}
            content={modalContent}
            nextPage={`/p=${this.props.userToken}/items`}
            buttonText='OK, GOT IT!'
          />
        )}

        <Grid
          verticalAlign='middle'
          centered
          padded='vertically'
          style={{ backgroundColor: '#F0F1F3' }}
        >
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header
                floated='left'
                size='tiny'
                textAlign='center'
                style={{ fontSize: '3.5vw' }}
              >
                Moving Inventory List
              </Header>
            </Grid.Column>

            <Grid.Column>
              <Link to={`/p=${this.props.userToken}/items/special`}>
                <Header
                  size='tiny'
                  floated='right'
                  textAlign='center'
                  style={{ color: '#20b118', fontSize: '3vw' }}
                  onClick={() =>
                    this.props.storeInventory(
                      this.props.items,
                      this.props.leadId
                    )
                  }
                >
                  CONFIRM INVENTORY
                </Header>
              </Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ padding: '0px' }}>
            <Tab
              style={{
                width: 'inherit',
                backgroundColor: '#F0F1F3',
              }}
              panes={[
                {
                  menuItem: 'ALL ITEMS',
                  render: () => (
                    <Tab.Pane
                      style={{
                        padding: '0px',
                        backgroundColor: '#F0F1F3',
                      }}
                    >
                      <SearchBar />
                      <Segment id='all-item-list-segment'>
                        <ItemList isMyItems={false} />
                      </Segment>
                    </Tab.Pane>
                  ),
                },
                {
                  menuItem: (
                    <Menu.Item key='my-items'>
                      <Grid verticalAlign='middle'>
                        <Grid.Row>
                          <Grid.Column width={10} style={{ padding: '0px' }}>
                            MY ITEMS
                          </Grid.Column>
                          <Grid.Column width={6}>
                            {this.renderItemsTotalQuantity()}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Menu.Item>
                  ),
                  render: () => (
                    <Tab.Pane
                      style={{
                        padding: '0px',
                        backgroundColor: '#F0F1F3',
                      }}
                    >
                      <SearchBar isMyItems />
                      <Segment id='my-item-list-segment'>
                        <ItemList isMyItems />
                      </Segment>
                    </Tab.Pane>
                  ),
                },
              ]}
            />
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    leadId: state.auth.currentUser.lead_id,
    items: state.items,
    triggers: state.triggers,
  };
};

export default connect(mapStateToProps, {
  fetchItems,
  storeInventory,
  triggerAllItemsModal,
})(AllItems);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Grid,
  List,
  Accordion,
  Image,
  Header,
  Label,
} from 'semantic-ui-react';
import './ListContainer.css';
import {
  addItemQuantity,
  reduceItemQuantity,
  storeInventory,
  triggerAllItemsModal,
  triggerBoxCalculator,
} from '../../actions';
import BoxCalculatorLoaderModal from '../BoxCalculatorLoaderModal/BoxCalculatorLoaderModal';
import FirstItemOptionsModal from '../FirstItemOptionsModal/FirstItemOptionsModal';
import ItemQuantityMenu from '../ItemQuantityMenu';
import BoxCalculatorModal from '../BoxCalculatorModal/BoxCalculatorModal';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      modalItem: null,
      selectedValue: null,
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  onDialogClose = (subItemId) => {
    if (subItemId) {
      this.props.addItemQuantity(subItemId);
    }
    this.setState({ modalItem: null, selectedValue: null });
  };

  addQuantityHandler(item) {
    this.props.addItemQuantity(item.item_ids);
    if (item.innerItems && item.innerItems.length > 0) {
      this.setState({ modalItem: item });
    } else {
      this.setState({ modalItem: null, selectedValue: null });
    }
  }

  renderCategories() {
    const uniqueCategories = [
      ...new Set(this.props.items.map((item) => item.type_name)),
    ]; // get unique categories

    return uniqueCategories.map((category) => {
      return (
        <React.Fragment key={category}>
          {category !== null &&
            !this.props.itemsSearchInput &&
            !this.props.isMyItems && (
              <List.Item key={category} id='category-header'>
                <Header id='category-header-text'>{category}</Header>
              </List.Item>
            )}

          {this.renderList(
            // render each category header followed by its items
            this.props.items.filter((item) => {
              return item.type_name === category;
            }),
            category === 'Boxes'
          )}
        </React.Fragment>
      );
    });
  }

  renderList(items, isBoxesCategory = false) {
    const { activeIndex } = this.state;
    return items.map((item, index) => {
      return (
        <List.Item key={item.parent_name}>
          <Accordion>
            <Accordion.Title
              active={activeIndex === index}
              index={index}
              onClick={this.handleClick}
            >
              <Grid
                container
                doubling
                divided='vertically'
                verticalAlign='middle'
                centered
                style={{ padding: '0px' }}
              >
                <Grid.Row columns={2}>
                  <Grid.Column style={{ paddingLeft: '0px' }}>
                    <div
                      style={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                      <Image
                        id='list-item-icon'
                        // src={`${process.env.PUBLIC_URL}/assets/${item.icon}`}
                        src={`./assets/${item.icon}` || `./assets/default.svg`}
                        // onError={(e) => {
                        //   e.target.onerror = null;
                        //   e.target.src = `${process.env.PUBLIC_URL}/assets/default.svg`;
                        // }}
                      />
                      <span className='listItemName'>{item.parent_name}</span>
                    </div>
                  </Grid.Column>

                  <Grid.Column
                    textAlign='right'
                    style={{ paddingRight: '0px' }}
                  >
                    {item.quantity === 0 ? (
                      isBoxesCategory &&
                      this.props.triggers.isBoxCalcTriggered === 0 ? (
                        <Button
                          id='add-btn'
                          onClick={() => this.props.triggerBoxCalculator(1)}
                        >
                          ADD
                        </Button>
                      ) : (
                        <Button
                          id='add-btn'
                          onClick={() => this.addQuantityHandler(item)}
                        >
                          ADD
                        </Button>
                      )
                    ) : (
                      <>
                        <ItemQuantityMenu
                          itemQuantity={item.quantity}
                          itemId={item.item_ids}
                          item={item}
                          addQuantityCallback={() =>
                            this.addQuantityHandler(item)
                          }
                        />
                      </>
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Accordion.Title>

            {item.innerItems && (
              <Accordion.Content active={activeIndex === index}>
                <ul
                  style={{
                    listStyleType: 'none',
                    float: 'left',
                    textAlign: 'left',
                    margin: '0px',
                  }}
                >
                  {item.innerItems.map((innerItem, index) => {
                    //TODO: add trash-can icon to delete innerItem(filled.svg)
                    if (innerItem.quantity > 0) {
                      return (
                        <li key={innerItem.item_id}>
                          <p
                            style={{ color: '#57C3F3' }}
                            onClick={() => {
                              this.setState({ selectedValue: innerItem.item });
                              this.addQuantityHandler(item);
                            }}
                          >
                            {innerItem.quantity}{' '}
                            <span style={{ textDecoration: 'underline' }}>
                              {innerItem.item}
                            </span>
                          </p>
                        </li>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ul>
              </Accordion.Content>
            )}
          </Accordion>
        </List.Item>
      );
    });
  }

  render() {
    return (
      <>
        <List celled divided verticalAlign='middle'>
          {!this.props.itemsSearchInput && !this.props.isMyItems && (
            <List.Item key='common-items' id='category-header'>
              <Header id='category-header-text'>COMMON ITEMS</Header>
            </List.Item>
          )}
          {!this.props.isMyItems &&
            !this.props.itemsSearchInput &&
            this.renderList(
              this.props.items.filter((item) => {
                return item.common_item === 1;
              })
            )}
          {!this.props.itemsSearchInput
            ? this.renderCategories()
            : this.renderList(this.props.items)}
        </List>
        <Grid style={{ margin: '0px' }}>
          <Grid.Row>
            <Grid.Column
              width={8}
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              Aprx Vol:
              <Label id='aprx-val-lbl'>
                <span id='aprx-val-txt'>
                  {`${this.props.items.reduce((sum, val) => {
                    if (val.innerItems) {
                      return (
                        sum +
                        val.innerItems.reduce(
                          (a, b) =>
                            Number(b.quantity) > 0
                              ? a + Number(b.volume)
                              : null,
                          0
                        )
                      );
                    } else {
                      return Number(val.quantity) > 0
                        ? sum + Number(val.volume)
                        : null;
                    }
                  }, 0)}
                cf`}
                </span>
              </Label>
            </Grid.Column>

            <Grid.Column
              width={8}
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              Total Items:
              <Label id='items-total-lbl'>
                <span id='items-total-txt'>
                  {this.props.items.reduce((sum, val) => sum + val.quantity, 0)}
                </span>
              </Label>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched centered style={{ padding: '0px' }}>
            <Button
              style={{ margin: '12px' }}
              as={Link}
              to={`/p=${this.props.userToken}/items/special`}
              onClick={() =>
                this.props.storeInventory(this.props.items, this.props.leadId)
              }
              id='confirm-inventory-btn'
              fluid
            >
              Confirm Inventory
            </Button>
          </Grid.Row>
        </Grid>
        <FirstItemOptionsModal
          item={this.state.modalItem}
          selectedValue={this.state.selectedValue}
          closeCallback={this.onDialogClose}
        />
        <BoxCalculatorModal
          isTriggered={this.props.triggers.isBoxCalcTriggered}
          closeCallback={() => this.props.triggerBoxCalculator(2)}
        />
        <BoxCalculatorLoaderModal
          isTriggered={this.props.triggers.isBoxCalcTriggered}
          closeCallback={() => this.props.triggerBoxCalculator(3)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state.auth.token,
    leadId: state.auth.currentUser.lead_id,
    triggers: state.triggers,
    itemsSearchInput: state.itemsSearchInput,
  };
};

export default connect(mapStateToProps, {
  addItemQuantity,
  reduceItemQuantity,
  triggerBoxCalculator,
  triggerAllItemsModal,
  storeInventory,
})(ListContainer);
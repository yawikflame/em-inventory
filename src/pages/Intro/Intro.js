import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';
import { signIn, fetchItems } from '../../actions';
import history from '../../history';
import './Intro.css';

export class Intro extends Component {
  constructor() {
    super();
    this.state = {
      isLoadingItems: true,
    };
  }

  componentDidMount = async () => {
    try {
      await this.props.signIn(this.props.match.params.id);
    } catch (err) {
      if (err.response.status === 404) {
        return history.push('/error404');
      }
    }

    if (this.props.currentUser.sbm > 0) {
      // window.location = `https://bvl-sabf.web.app/welcome/${this.props.userToken}`;
      window.location.href = `https://myquote.budgetvanlines.com/welcome/${this.props.userToken}`;
    }
    await this.props.fetchItems();
    this.setState({
      isLoadingItems: false,
    });
  };

  capitalizeFirstWordLetters(words) {
    return words
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  renderContent() {
    return (
      <>
        <div id='flex-fill'>
          <h1 id='welcome-text'>
            Welcome,{' '}
            {!this.state.isLoadingItems &&
              this.capitalizeFirstWordLetters(
                this.props.currentUser.first_name
              )}
            !
          </h1>
          <h1 id='your-move-text'>YOUR MOVE</h1>
          <hr id='separator' />
          <h1 id='move-size'>
            {!this.state.isLoadingItems &&
              this.capitalizeFirstWordLetters(this.props.currentUser.size)}
            <br />
            From: {this.props.isSignedIn && this.props.currentUser.fromZip} |
            To: {this.props.isSignedIn && this.props.currentUser.toZip}
          </h1>
          <p id='browse-our-data'>
            Let's find out what items you're moving, so we can get you an
            accurate quote!
          </p>
          <Button
            id='get-started-btn'
            as={Link}
            to={`/p=${this.props.match.params.id}/items`}
            disabled={this.state.isLoadingItems}
          >
            Get Started
          </Button>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/illustration_lr.svg`}
            wrapped
            id='illustrated-lr-img'
          />
        </div>
        <div id='fine-print-div'>
          <div id='blue-bottom-rounded-corners'></div>
          <div id='fine-print'>* Your inventory affects your quote</div>
        </div>
      </>
    );
  }

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUser: state.auth.currentUser,
    userToken: state.auth.token,
  };
};

export default connect(mapStateToProps, { signIn, fetchItems })(Intro);

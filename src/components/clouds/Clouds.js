import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClouds } from '../../actions/clouds';
import { Container } from 'semantic-ui-react';
import CloudList from './CloudList';
import CloudForm from './CloudForm';

class Clouds extends Component {
  constructor(props) {
    super(props);
    this.handleProviderChange = this.handleProviderChange.bind(this);
  }

  componentDidMount() {
    this.props.getClouds();
  }

  handleProviderChange(event, data) {
    this.props.getClouds(data.value);
  }

  render() {
    return (
      <Container>
        <CloudForm handleProviderChange={this.handleProviderChange} />
        <CloudList clouds={this.props.clouds} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  clouds : Object.values(state.clouds)
});

export default connect(
  mapStateToProps,
  { getClouds }
)(Clouds);

import { Component } from 'react';
import { Input, Form, Header, Button, ButtonLabel } from './Searchbar.module';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  inputChange = event => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;

    this.props.onSubmit(input);
    this.setState({
      input: '',
    });
  };

  render() {
    const { input } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={input}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

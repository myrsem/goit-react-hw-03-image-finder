import React, { Component } from 'react';
import {
  Search,
  SearchForm,
  FormButton,
  FormButtonLabel,
  FormInput,
} from 'components/Searchbar/Searchbar.styled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  
  render() {
    return (
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <span>
              <FormButtonLabel />
            </span>
          </FormButton>
          <FormInput
            name="input"
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Search>
    );
  }
  };
  
  Searchbar.propTypes = {
    onSubmit: PropTypes.func,
  };
  
  export default Searchbar;
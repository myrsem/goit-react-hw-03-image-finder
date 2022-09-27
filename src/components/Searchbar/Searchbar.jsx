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
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim() === '') {
      alert('What picture do you need?');
      return;
    }
    this.props.onSubmit(query);
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
    onSubmit: PropTypes.func.isRequired,
  };
  
  export default Searchbar;
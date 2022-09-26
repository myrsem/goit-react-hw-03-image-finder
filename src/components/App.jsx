import React, { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { AppContainer } from 'components/App.styled';
import fetchAPI from 'services/fetchAPI';

const INITIAL_QUERY = 'hdr';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    currentPictures: '',
    isLoading: false,
    showModal: false,
  };

  componentDidMount() {
    this.setState({searchQuery: INITIAL_QUERY})
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ isLoading: true });
    fetchAPI(searchQuery, page)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  onImgClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      currentPictures: e.target.dataset.img,
    });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, currentPictures } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} onImgClick={this.onImgClick} />
        {images.length >= 12 && (
          <Button
            onClick={this.fetchImages}
            text={isLoading ? 'Loading...' : 'Load more'}
          />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={currentPictures} alt="#" />
          </Modal>
        )}
        {isLoading && <Loader />}
      </AppContainer>
    );
  }
}

export default App;

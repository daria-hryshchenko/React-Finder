import { Component } from 'react';
import { Wrapper } from './App.module';
import Modal from './Modal/Modal';
import { Api } from '../api/api';
import GlobalStyle from './GlobalStyle.module';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    inputValue: '',
    page: 1,
    status: 'idle',
    loadMore: null,
    largeImageUrl: '',
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { page, inputValue } = this.state;

    if (
      prevState.page !== this.state.page ||
      prevState.inputValue !== this.state.inputValue
    ) {
      this.setState({ status: 'loading' });

      Api(inputValue, page)
        .then(event =>
          this.setState(prevState => ({
            images: [...prevState.images, ...event.hits],
            loadMore: 12 - event.hits.length,
          }))
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ status: 'idle' }));
    }
  }

  getInputValue = fetchValue => {
    this.setState({
      inputValue: fetchValue,
      page: 1,
      images: [],
      loadMore: null,
    });
  };

  handleLoalMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleLargeImageUrl = imgUtl => {
    this.setState({ largeImageUrl: imgUtl });
    this.setState({ showModal: true });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: false,
    }));
  };

  render() {
    const { images, status, loadMore, showModal, largeImageUrl } = this.state;
    return (
      <Wrapper>
        <GlobalStyle />
        <Searchbar onSubmit={this.getInputValue} />
        <ImageGallery images={images} onClick={this.handleLargeImageUrl} />
        {status === 'loading' && <Loader />}
        {showModal && (
          <Modal
            imgUrl={largeImageUrl}
            onClose={this.toggleModal}
            status={status}
          />
        )}
        {loadMore === 0 && <Button onClick={this.handleLoalMore} />}
      </Wrapper>
    );
  }
}

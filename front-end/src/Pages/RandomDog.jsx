import React, { Component } from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';

class RandomDog extends Component {
  constructor() {
    super();
    this.state = {
      dogImg: undefined,
      loading: true,
      dogObj: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
    this.salveState = this.salveState.bind(this);
    this.handleButtonElement = this.handleButtonElement.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleButtonElement() {
    const { dogImg } = this.state;
    return (
      <div className="text-center">
        <Button type="button" sty="m-4" click={this.salveState}>Mudar imagem</Button>
        <div>
          <img src={dogImg} alt="" className="img" />
        </div>
      </div>
    );
  }

  salveState() {
    this.setState(({ dogImg, dogObj }) => ({
      dogObj: [dogImg, ...dogObj],
    }));
    this.fetchApi();
  }

  async fetchApi() {
    this.setState(
      { loading: true },
      async () => {
        const endiPoint = await fetch('https://dog.ceo/api/breeds/image/random');
        const response = await endiPoint.json();
        const returne = response.message;
        this.setState({
          loading: false,
          dogImg: returne,
        });
      },
    );
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <p className="text-center">Loading...</p>;
    return (
      <main className="container">
        <div>
          <Header />
        </div>
        <div className="container">
          { loading ? loadingElement : this.handleButtonElement() }
        </div>
      </main>
    );
  }
}

export default RandomDog;

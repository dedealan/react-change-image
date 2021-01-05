import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  images = [
    "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/9/4/c00948cb-5c80-4f89-82fa-d032ba9f89b6.jpg",
    "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/6/22/ad4db44f-e2e9-4830-8c16-5b1fd3b6dbf6.jpg",
    "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/6/22/ae82aa19-fb6d-449b-96cd-adfb01239db9.jpg",
    "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/9/4/70071fa2-997b-4342-8968-f536510dc5ba.jpg",
    "https://ecs7.tokopedia.net/img/cache/900/VqbcmM/2020/6/22/0ab67867-592c-4021-88ed-0a6b4aa67078.jpg"
  ];

  constructor(props) {
    super(props);

    this.state = {
      selectedImage: this.images[0]
    };
  }

  changePreview(img) {
    this.setState({
      selectedImage: img
    });
  }

  render() {
    return (
      <section className="section">
        <div className="container image-prev">
          <div className="content">
            <h2>Preview Images</h2>
          </div>
        </div>

        <div className="container image-prev">
          <div className="columns">
            <div className="column is-full">
              <img src={this.state.selectedImage} id="preview" />
            </div>
          </div>
          <div className="columns is-mobile is-flex is-justify-content-center">
            {this.images.map((img, i) => {
              return (
                <div
                  key={i}
                  className="column is-2 is-square clickable"
                  onClick={this.changePreview.bind(this, img)}
                >
                  <img src={img} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

render(<App />, document.getElementById("root"));

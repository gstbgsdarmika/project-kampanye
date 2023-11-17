import React, { Component } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import MusicBs from "../assets/music/musik.mp3";

class MusicBS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.audioElement = new Audio(MusicBs);
  }

  toggleAudio = () => {
    if (this.state.isPlaying) {
      this.audioElement.pause();
    } else {
      this.audioElement.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  componentDidMount() {
    this.audioElement.addEventListener("ended", () => {
      this.audioElement.currentTime = 0;
      this.audioElement.play();
      this.setState({ isPlaying: true });
    });
  }

  render() {
    return (
      <div className="fixed z-50 text-center bottom-4 right-4">
        <button
          onClick={this.toggleAudio}
          className=" justify-center w-10 h-10 p-2 text-center text-white bg-red-600 rounded-full md:p-4 md:w-16 md:h-16"
          type="button"
        >
          {this.state.isPlaying ? (
            <FaPause className="w-5 h-5 ps-1 md:ps-0 md:w-8 md:h-8" />
          ) : (
            <FaMusic className="w-5 h-5 md:w-8 md:h-8" />
          )}
        </button>
      </div>
    );
  }
}

export default MusicBS;

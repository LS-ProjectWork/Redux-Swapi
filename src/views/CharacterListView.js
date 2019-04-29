import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from '../actions/index';

class CharacterListView extends React.Component {
  
  componentDidMount() {
    this.props.getChars()
  }

  render() {
    if (this.props.fetching) {
      return <h3>'Loading...'</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);

import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const entries = props.entries.map((entry, index) => {
    return (
      <ChatEntry key={index}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        />);
      });
    return(
      <section className="chat-log">
        {entries}
      </section>
    );
    
};

ChatLog.propTypes = {
  //Fill with correct proptypes
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
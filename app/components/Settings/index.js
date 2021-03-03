import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Wrapper from './Wrapper';

function Settings({
  timerIsRunning,
  breakLength,
  sessionLength,
  onDecreaseBreak,
  onDecreaseSession,
  onIncreaseBreak,
  onIncreaseSession,
}) {
  return (
    <Wrapper>
      <div>
        <h3>Break Length</h3>
        <div>
          <Button disabled={timerIsRunning} onClick={onDecreaseBreak}>
            -
          </Button>
          <span>{breakLength}</span>
          <Button disabled={timerIsRunning} onClick={onIncreaseBreak}>
            +
          </Button>
        </div>
      </div>
      <div>
        <h3>Session Length</h3>
        <div>
          <Button disabled={timerIsRunning} onClick={onDecreaseSession}>
            -
          </Button>
          <span>{sessionLength}</span>
          <Button disabled={timerIsRunning} onClick={onIncreaseSession}>
            +
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

Settings.propTypes = {
  timerIsRunning: PropTypes.bool,
  breakLength: PropTypes.number,
  sessionLength: PropTypes.number,
  onDecreaseBreak: PropTypes.func,
  onDecreaseSession: PropTypes.func,
  onIncreaseBreak: PropTypes.func,
  onIncreaseSession: PropTypes.func,
};

export default Settings;

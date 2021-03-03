import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Wrapper from './Wrapper';

function Controller({ timerIsRunning, onStart, onStop, onReset }) {
  return (
    <Wrapper className="controller">
      <Button onClick={timerIsRunning ? onStop : onStart}>
        {timerIsRunning ? 'Pause' : 'Start'}
      </Button>
      <Button onClick={onReset}>Reset</Button>
    </Wrapper>
  );
}

Controller.propTypes = {
  timerIsRunning: PropTypes.bool,
  onStart: PropTypes.func,
  onStop: PropTypes.func,
  onReset: PropTypes.func,
};

export default Controller;

import React from 'react';
import PropTypes from 'prop-types';

import { formatTime } from 'utils/helpers';

import Label from './Label';
import Wrapper from './Wrapper';
import TimeLeft from './TimeLeft';
import TimerContent from './TimerContent';

function Timer({ timeLabel, timeLeftInSecond }) {
  return (
    <Wrapper>
      <TimerContent>
        <Label>{timeLabel}</Label>
        <TimeLeft>{formatTime(timeLeftInSecond)}</TimeLeft>
      </TimerContent>
    </Wrapper>
  );
}

Timer.propTypes = {
  timeLabel: PropTypes.string,
  timeLeftInSecond: PropTypes.number,
};

export default Timer;

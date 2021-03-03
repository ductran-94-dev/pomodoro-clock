/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useCallback, useRef, useEffect } from 'react';

import Controller from 'components/Controller';
import Settings from 'components/Settings';
import Timer from 'components/Timer';

import Wrapper from './Wrapper';

function Pomodoro() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [timeLeftInSecond, setTimeLeftInSecond] = useState(25 * 60);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const audioRef = useRef(null);

  const buzzer = useCallback(() => {
    if (timeLeftInSecond === 0) {
      audioRef.current.play();
    }
  }, [timeLeftInSecond, audioRef]);

  const lengthControl = (stateToChange, sign, currentLength, tType) => {
    if (timerIsRunning) return;

    if (timerLabel === tType) {
      if (sign === '-' && currentLength !== 1) {
        stateToChange(currentLength - 1);
      } else if (sign === '+' && currentLength !== 60) {
        stateToChange(currentLength + 1);
      }
    } else if (sign === '-' && currentLength !== 1) {
      stateToChange(currentLength - 1);
      setTimeLeftInSecond(currentLength * 60 - 60);
    } else if (sign === '+' && currentLength !== 60) {
      stateToChange(currentLength + 1);
      setTimeLeftInSecond(currentLength * 60 + 60);
    }
  };

  const onDecreaseBreak = () => {
    lengthControl(setBreakLength, '-', breakLength, 'Session');
  };

  const onIncreaseBreak = () => {
    lengthControl(setBreakLength, '+', breakLength, 'Session');
  };

  const onDecreaseSession = () => {
    lengthControl(setSessionLength, '-', sessionLength, 'Break');
  };

  const onIncreaseSession = () => {
    lengthControl(setSessionLength, '+', sessionLength, 'Break');
  };

  const onStart = () => {
    setTimerIsRunning(true);
  };

  const onStop = () => {
    setTimerIsRunning(false);
  };

  const onReset = () => {
    setSessionLength(25);
    setBreakLength(5);
    setTimeLeftInSecond(25 * 60);
    setTimerLabel('Session');
    setTimerIsRunning(false);

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    const handleSwitch = () => {
      if (timerLabel === 'Session') {
        setTimerLabel('Break');
        setTimeLeftInSecond(breakLength * 60);
      } else if (timerLabel === 'Break') {
        setTimerLabel('Session');
        setTimeLeftInSecond(sessionLength * 60);
      }
    };

    let countdown = null;
    if (timerIsRunning && timeLeftInSecond > 0) {
      countdown = setInterval(() => {
        setTimeLeftInSecond(timeLeftInSecond - 1);
      }, 1000);
    } else if (timerIsRunning && timeLeftInSecond === 0) {
      countdown = setInterval(() => {
        setTimeLeftInSecond(timeLeftInSecond - 1);
      }, 1000);
      buzzer();
      handleSwitch();
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [
    timerIsRunning,
    timeLeftInSecond,
    timerLabel,
    breakLength,
    sessionLength,
    audioRef,
    buzzer,
  ]);

  return (
    <Wrapper>
      <Settings
        breakLength={breakLength}
        sessionLength={sessionLength}
        timerIsRunning={timerIsRunning}
        onDecreaseBreak={onDecreaseBreak}
        onDecreaseSession={onDecreaseSession}
        onIncreaseBreak={onIncreaseBreak}
        onIncreaseSession={onIncreaseSession}
      />
      <Timer timeLabel={timerLabel} timeLeftInSecond={timeLeftInSecond} />
      <Controller
        timerIsRunning={timerIsRunning}
        onStart={onStart}
        onStop={onStop}
        onReset={onReset}
      />
      <audio
        hidden
        id="beep"
        preload="auto"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </Wrapper>
  );
}

export default Pomodoro;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Freeverb, PingPongDelay, Master, Sampler } from "tone";
import Wrapper from "./Wrapper";
import Triggers from "../Triggers";

import C2 from "../../assets/samples/bird.wav";
import F2 from "../../assets/samples/waterbird.wav";
import C3 from "../../assets/samples/bonecrack.wav";
import F3 from "../../assets/samples/footsteps.wav";
import C4 from "../../assets/samples/windandchimes.wav";
import F4 from "../../assets/samples/toolfalling.wav";
import C5 from "../../assets/samples/cat.wav";
import F5 from "../../assets/samples/fireworks.wav";

import { getNote, getVelocity, getUser } from "../../store/reducers/band";

export default ({ type, prefix }) => {
  const [instrument, setInstrument] = useState(null);
  const note = useSelector(getNote(type));
  const velocity = useSelector(getVelocity(type));
  const user = useSelector(getUser(type));

  useEffect(() => {
    const inst = new Sampler({
      C2,
      F2,
      C3,
      F3,
      C4,
      F4,
      C5,
      F5,
    });
    inst.volume.value = -6;
    const reverb = new Freeverb(0.6, 3000);
    const pingPongDelay = new PingPongDelay({
      delayTime: "32n",
      feedback: 0.7,
      wet: 0.25,
    });
    inst.connect(pingPongDelay);
    pingPongDelay.connect(reverb);
    reverb.connect(Master);
    setInstrument(inst);
  }, []);
  useEffect(() => {
    if (instrument) {
      if (note) {
        // TODO: check why this is not working
        // instrument.triggerAttack(note, 0, velocity);
        instrument.triggerAttackRelease(note, 2000);
      } else {
        instrument.triggerRelease();
      }
    }
  }, [instrument, note, velocity]);

  return (
    <Wrapper type={type} user={user} inputPad={false} prefix={prefix}>
      <Triggers
        triggers={[
          { pitch: "C2" },
          { pitch: "F2" },
          { pitch: "C3" },
          { pitch: "F3" },
          { pitch: "C4" },
          { pitch: "F4" },
          { pitch: "C5" },
          { pitch: "F5" },
        ]}
        type={type}
        prefix={prefix}
      ></Triggers>
    </Wrapper>
  );
};

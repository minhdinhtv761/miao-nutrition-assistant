import { Radio } from "native-base";
import React from "react";
import { space } from "../../../styles/layout";

export const GenderModalBody = ({ user, setUser }) => {
  const [state, setState] = React.useState(user.gender);
  const handleOnChange = React.useCallback(
    (nextValue) => {
      setState(nextValue);
      setUser({ ...user, gender: nextValue });
    },
    [state]
  );
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={state}
      onChange={handleOnChange}
    >
      <Radio value="Female" my={space.s}>
        Nữ
      </Radio>
      <Radio value="Male" my={space.s}>
        Nam
      </Radio>
    </Radio.Group>
  );
};

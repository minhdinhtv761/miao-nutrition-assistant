import { Radio } from "native-base";
import React from "react";
import { space } from "../../../styles/layout";

export const GenderModalBody = ({ userTemp, setUserTemp }) => {
  const [state, setState] = React.useState(userTemp.gender);
  const handleOnChange = React.useCallback(
    (nextValue) => {
      setState(nextValue);
      setUserTemp({ ...userTemp, gender: nextValue });
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

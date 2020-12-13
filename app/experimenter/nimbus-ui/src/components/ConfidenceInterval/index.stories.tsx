/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { storiesOf } from "@storybook/react";
import { withLinks } from "@storybook/addon-links";
import ConfidenceInterval from ".";
import { SIGNIFICANCE } from "../../lib/visualization/constants";
import { mockConfidenceInterval } from "../../lib/visualization/mocks";

storiesOf("visualization/ConfidenceInterval", module)
  .addDecorator(withLinks)
  .add("with positive significance", () => (
    <ConfidenceInterval
      {...mockConfidenceInterval(SIGNIFICANCE.POSITIVE)}
      significance={SIGNIFICANCE.POSITIVE}
    />
  ))
  .add("with neutral significance", () => (
    <ConfidenceInterval
      {...mockConfidenceInterval(SIGNIFICANCE.NEUTRAL)}
      significance={SIGNIFICANCE.NEUTRAL}
    />
  ))
  .add("with negative significance", () => (
    <ConfidenceInterval
      {...mockConfidenceInterval(SIGNIFICANCE.NEGATIVE)}
      significance={SIGNIFICANCE.NEGATIVE}
    />
  ));

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* istanbul ignore file */
// TODO: EXP-638 remove this ^

import React from "react";

import { SIGNIFICANCE } from "../../lib/visualization/constants";

const FixedLabel: React.FC<{
  direction: "right" | "left";
  significance: string;
}> = ({ direction, significance, children }) => {
  return (
    <span
      className={`small text-${getColor(significance)}`}
      style={{
        position: "absolute",
        bottom: "100%",
        [direction]: 0,
      }}
    >
      {children}%
    </span>
  );
};

function getColor(significance: string): string {
  switch (significance) {
    case SIGNIFICANCE.NEGATIVE:
      return "danger";
    case SIGNIFICANCE.POSITIVE:
      return "success";
    default:
      return "secondary";
  }
}

const ConfidenceInterval: React.FC<{
  upper: number;
  lower: number;
  point: number;
  significance: string;
}> = ({ upper, lower, point, significance }) => {
  return (
    <div className="confidence-interval">
      <div className="mt-2" style={{ position: "relative", height: 50 }}>
        <div
          className="bgLine w-100 position-absolute border-top border-dark "
          style={{ left: "0", top: "50%" }}
        />
        <div
          className="control-tick position-absolute border-left border-dark"
          style={{ left: "50%", top: "50%", height: "33%" }}
        ></div>

        <div
          className={`bar position-absolute bg-${getColor(significance)}`}
          style={{
            height: "33%",
            top: "33%",
            width: `${(upper - lower) / 2}%`,
            left: `${50 + lower / 2}%`,
          }}
        >
          <FixedLabel significance={significance} direction="left">
            {lower}
          </FixedLabel>
          <FixedLabel significance={significance} direction="right">
            {upper}
          </FixedLabel>
        </div>
        <div
          className="point-tick position-absolute pb-3"
          style={{
            borderLeft: "2px solid rgba(0, 0, 0, 0.2)",
            left: `${50 + point / 2}%`,
            top: "33%",
          }}
        />
      </div>
      <div className="text-center" style={{ lineHeight: 1 }}>
        control
      </div>
    </div>
  );
};

export default ConfidenceInterval;

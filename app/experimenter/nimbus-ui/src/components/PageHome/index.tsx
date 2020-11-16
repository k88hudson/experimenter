/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React, { useState } from "react";
import AppLayout from "../AppLayout";
import { RouteComponentProps, Link } from "@reach/router";

type PageHomeProps = {} & RouteComponentProps;
import Select from "react-select";
const TEST_OPTIONS = [
  {
    label: "Foo",
    value: "foo",
  },
  {
    label: "Bar",
    value: "bar",
  },
  {
    label: "Baz",
    value: "baz",
  },
  {
    label: "Qux",
    value: "qux",
  },
];

const Selecty = () => {
  const [primary, setPrimary] = useState([]);
  const [secondary, setSecondary] = useState([]);

  return (
    <div>
      <Select
        // _update={secondary}
        isMulti
        options={TEST_OPTIONS}
        value={primary}
        onChange={(value) => setPrimary(value || [])}
        isOptionDisabled={(option) => secondary.includes(option)}
      />
      <Select
        // _update={primary}
        isMulti
        options={TEST_OPTIONS}
        secondary={secondary}
        onChange={(value) => setSecondary(value || [])}
        isOptionDisabled={(option) => primary.includes(option)}
      />
    </div>
  );
};

const PageHome: React.FunctionComponent<PageHomeProps> = () => (
  <AppLayout testid="PageHome">
    <h1>Home</h1>
    <Selecty />
    <Link to="new" data-sb-kind="pages/New">
      New experiment
    </Link>
  </AppLayout>
);

export default PageHome;

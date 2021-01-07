import * as React from "react";
import menus from "./menus";

import { SideNav, LayoutSidebar } from "upkit";

export default function Home() {
  return (
    <div>
      <LayoutSidebar sidebar={<SideNav items={menus} verticalAlign="top" />} />
    </div>
  );
}

import { Warning } from "@phosphor-icons/react";
import { Info } from ".";

export function Stub() {
  return (
    <Info
      icon={Warning}
      iconProps={{
        weight: "fill",
      }}
    >
      This page is a stub. While it already contains some information, this
      information is not complete yet.
    </Info>
  );
}

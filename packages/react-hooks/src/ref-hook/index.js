import React from 'react';
import { MutableStateRefHook } from "./mutable-state";
import { ReadDOMAttributesRefHook } from "./read-dom-attributes";
import { InvokeDOMActionsRefHook } from "./invoke-dom-actions";
import { ForwardingRefHook } from "./forwarding-ref-hook";

export const RefHooks = () => {
  return (
    <div>
      <h2>Ref Hooks</h2>
      <MutableStateRefHook />
      <ReadDOMAttributesRefHook />
      <InvokeDOMActionsRefHook />
      <ForwardingRefHook />
    </div>
  );
};

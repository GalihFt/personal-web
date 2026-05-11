"use client";

import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalPortalProps = {
  children: ReactNode;
};

export function ModalPortal({ children }: ModalPortalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  if (!portalRoot) {
    return null;
  }

  return createPortal(children, portalRoot);
}

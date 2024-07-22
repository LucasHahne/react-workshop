import React from "react";
import { ReactNode } from "react";

interface HideableProps {
  shouldShowChildren: boolean;
  setShouldShowChildren: (showChildren: boolean) => void;
  children: ReactNode;
}

export const Hideable = ({
  shouldShowChildren,
  setShouldShowChildren,
  children,
}: HideableProps) => {
  return (
    <div className="hideable">
      <p>
        {shouldShowChildren && children}
        <button
          className="tertiary"
          onClick={() => setShouldShowChildren(!shouldShowChildren)}
        >
          {shouldShowChildren ? "- hide details" : "+ show details"}
        </button>
      </p>
    </div>
  );
};

import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type Variant = "primary" | "secondary" | "tertiary" | "delete";

export type ButtonDefaultProps = ComponentPropsWithoutRef<"button"> &
  PropsWithChildren<{
    variant?: Variant;
  }>;

import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonProps = SharedProps &
  (
    | ({ href: string } & Omit<
        ComponentPropsWithoutRef<"a">,
        keyof SharedProps | "href"
      >)
    | ({ href?: never } & ComponentPropsWithoutRef<"button">)
  );

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-accent text-accent-foreground hover:brightness-95",
  outline: "border-border bg-surface text-foreground hover:bg-background",
};

function getButtonClassName(variant: ButtonVariant, className?: string) {
  return [
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-tight transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transform-none",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      children,
      className,
      variant = "primary",
      ...linkProps
    } = props;

    return (
      <a
        className={getButtonClassName(variant, className)}
        href={href}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      className={getButtonClassName(variant, className)}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

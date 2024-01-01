import { cn } from "@/lib/utils";
import Link from "next/link";

const Button = ({
  linked = true,
  href = "",
  iconB = false,
  children,
  className,
  ...rest
}) => {
  if (linked)
    return (
      <Link
        href={href}
        className={cn(
          "rounded-full px-6 py-3 text-white border bg-black transition-all duration-200 hover:bg-zinc-950 inline-block",
          className
        )}
        {...rest}
      >
        {children}
      </Link>
    );
  if (iconB) {
    return (
      <button
        className={cn(
          "rounded-full p-5 text-white border bg-black transition-all duration-200 hover:bg-zinc-950",
          className
        )}
        {...rest}
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 text-white border bg-black transition-all duration-200 hover:bg-zinc-950 ",
        className
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

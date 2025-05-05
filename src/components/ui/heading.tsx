import {cn} from "@/lib/utils";
import React from "react";

export function Heading({
                            level = 1,
                            className,
                            children,
                            ...props
                        }: React.HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
    const Component = `h${level}` as `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;
    return (
        <Component className={cn("font-bold", className)} {...props}>
            {children}
        </Component>
    );
}
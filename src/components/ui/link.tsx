import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

export function LinkComponent({
                                  className,
                                  ...props
                              }: React.ComponentProps<typeof Link>) {
    return <Link className={cn("text-blue-600 underline", className)} {...props} />;
}

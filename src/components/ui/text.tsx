import { cn } from "@/lib/utils";

export function Text({
                         className,
                         children,
                         ...props
                     }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-base", className)} {...props}>
            {children}
        </p>
    );
}
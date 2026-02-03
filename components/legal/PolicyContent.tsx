export function PolicyContent({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-8">{title}</h1>
            <div className="prose dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                {children}
            </div>
        </div>
    );
}

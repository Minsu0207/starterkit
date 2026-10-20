import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ExampleSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

// 예제 하나를 제목/설명과 함께 카드로 감싼다
export function ExampleSection({ title, description, children, className }: ExampleSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn("flex flex-wrap items-center gap-3", className)}>
        {children}
      </CardContent>
    </Card>
  );
}

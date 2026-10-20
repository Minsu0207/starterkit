import { Inbox, Info, Mail, Plus, Settings, TriangleAlert } from "lucide-react";
import type { Metadata } from "next";

import { ExampleSection } from "@/components/features/examples/example-section";
import { ToastDemo } from "@/components/features/examples/toast-demo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const metadata: Metadata = { title: "컴포넌트 예제" };

// 테이블 예시 데이터
const invoices = [
  { id: "INV-001", status: "결제 완료", method: "카드", amount: "₩25,000" },
  { id: "INV-002", status: "대기", method: "계좌이체", amount: "₩150,000" },
  { id: "INV-003", status: "취소", method: "카드", amount: "₩35,000" },
];

export default function ComponentsExamplePage() {
  return (
    <div className="grid gap-6">
      <ExampleSection title="Button" description="variant, size, 아이콘, 로딩 상태">
        <Button>기본</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Separator orientation="vertical" className="h-6" />
        <Button size="sm">
          <Mail /> 이메일
        </Button>
        <Button size="icon" variant="outline" aria-label="추가">
          <Plus />
        </Button>
        <Button disabled>
          <Spinner /> 처리 중
        </Button>
      </ExampleSection>

      <ExampleSection title="Badge">
        <Badge>기본</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </ExampleSection>

      <ExampleSection title="Alert" className="grid">
        <Alert>
          <Info />
          <AlertTitle>안내</AlertTitle>
          <AlertDescription>새 버전이 배포되었습니다. 새로고침하면 적용됩니다.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <TriangleAlert />
          <AlertTitle>오류</AlertTitle>
          <AlertDescription>세션이 만료되었습니다. 다시 로그인하세요.</AlertDescription>
        </Alert>
      </ExampleSection>

      <ExampleSection title="Avatar">
        <Avatar>
          <AvatarFallback>홍</AvatarFallback>
        </Avatar>
        <AvatarGroup>
          <Avatar>
            <AvatarFallback>김</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>이</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>박</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </ExampleSection>

      <ExampleSection title="오버레이" description="Dialog, AlertDialog, Sheet, Popover, Tooltip">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>프로필 공유</DialogTitle>
              <DialogDescription>링크를 가진 누구나 프로필을 볼 수 있습니다.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">닫기</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">AlertDialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle>
              <AlertDialogDescription>이 작업은 되돌릴 수 없습니다.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>삭제</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>필터</SheetTitle>
              <SheetDescription>화면 옆에서 열리는 패널입니다.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>빠른 정보</PopoverTitle>
              <PopoverDescription>트리거 근처에 떠 있는 작은 패널입니다.</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" aria-label="설정">
              <Settings />
            </Button>
          </TooltipTrigger>
          <TooltipContent>설정</TooltipContent>
        </Tooltip>
      </ExampleSection>

      <ExampleSection title="Toast" description="sonner로 띄우는 알림">
        <ToastDemo />
      </ExampleSection>

      <ExampleSection title="Tabs" className="block">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="activity">활동</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-2 text-sm text-muted-foreground">
            개요 탭의 내용입니다.
          </TabsContent>
          <TabsContent value="activity" className="pt-2 text-sm text-muted-foreground">
            최근 활동이 없습니다.
          </TabsContent>
        </Tabs>
      </ExampleSection>

      <ExampleSection title="Table" className="block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>번호</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>결제 수단</TableHead>
              <TableHead className="text-right">금액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ExampleSection>

      <ExampleSection title="내비게이션" description="Breadcrumb, Pagination" className="grid">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/examples">예제</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>컴포넌트</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Pagination className="justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ExampleSection>

      <ExampleSection title="Skeleton" description="데이터를 불러오는 동안 보여주는 자리 표시">
        <Skeleton className="size-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </ExampleSection>

      <ExampleSection title="Empty" description="표시할 데이터가 없을 때" className="block">
        <Empty className="border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Inbox />
            </EmptyMedia>
            <EmptyTitle>받은 메시지가 없습니다</EmptyTitle>
            <EmptyDescription>새 메시지가 오면 여기에 표시됩니다.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">메시지 작성</Button>
          </EmptyContent>
        </Empty>
      </ExampleSection>
    </div>
  );
}

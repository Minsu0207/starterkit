import { CreditCard, Download, TrendingUp, Users, Wallet, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";

import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = { title: "대시보드" };

// 샘플 데이터 (실제 데이터 fetching으로 교체)
const stats: { title: string; value: string; change: string; icon: LucideIcon }[] = [
  { title: "총 매출", value: "₩45,231,890", change: "+20.1% 전월 대비", icon: Wallet },
  { title: "신규 가입자", value: "+2,350", change: "+180.1% 전월 대비", icon: Users },
  { title: "결제 건수", value: "+12,234", change: "+19% 전월 대비", icon: CreditCard },
  { title: "활성 사용자", value: "573", change: "+201 지난 1시간", icon: TrendingUp },
];

const statusLabel = {
  paid: { label: "완료", variant: "default" },
  pending: { label: "대기", variant: "secondary" },
  failed: { label: "실패", variant: "destructive" },
} as const;

const orders: {
  id: string;
  customer: string;
  status: keyof typeof statusLabel;
  date: string;
  amount: number;
}[] = [
  { id: "ORD-001", customer: "김민수", status: "paid", date: "2026-10-18", amount: 250000 },
  { id: "ORD-002", customer: "이서연", status: "pending", date: "2026-10-17", amount: 150000 },
  { id: "ORD-003", customer: "박지훈", status: "paid", date: "2026-10-16", amount: 350000 },
  { id: "ORD-004", customer: "최유진", status: "failed", date: "2026-10-15", amount: 45000 },
  { id: "ORD-005", customer: "정하늘", status: "paid", date: "2026-10-14", amount: 550000 },
];

const currency = new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" });

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="대시보드"
        description="서비스 현황을 한눈에 확인하세요."
        actions={
          <Button variant="outline">
            <Download />
            내보내기
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ title, value, change, icon: Icon }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardDescription>{title}</CardDescription>
              <Icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <p className="text-xs text-muted-foreground">{change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 주문</CardTitle>
          <CardDescription>최근 5건의 주문 내역입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>주문번호</TableHead>
                <TableHead>고객</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>주문일</TableHead>
                <TableHead className="text-right">금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant={statusLabel[order.status].variant}>
                      {statusLabel[order.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(order.date)}</TableCell>
                  <TableCell className="text-right">{currency.format(order.amount)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

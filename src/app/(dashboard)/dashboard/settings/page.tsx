import { Bell } from "lucide-react";
import type { Metadata } from "next";

import { PageHeader } from "@/components/common/page-header";
import { DeleteAccountDialog } from "@/components/features/settings/delete-account-dialog";
import { ProfileForm } from "@/components/features/settings/profile-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = { title: "설정" };

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="설정" description="계정과 알림 설정을 관리하세요." />

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">프로필</TabsTrigger>
          <TabsTrigger value="notifications">알림</TabsTrigger>
          <TabsTrigger value="account">계정</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="pt-4">
          <ProfileForm />
        </TabsContent>

        <TabsContent value="notifications" className="pt-4">
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Bell />
              </EmptyMedia>
              <EmptyTitle>알림이 없습니다</EmptyTitle>
              <EmptyDescription>새로운 알림이 오면 여기에 표시됩니다.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </TabsContent>

        <TabsContent value="account" className="space-y-4 pt-4">
          <Alert>
            <AlertTitle>데모 계정</AlertTitle>
            <AlertDescription>
              이 화면의 동작은 실제 데이터에 영향을 주지 않습니다.
            </AlertDescription>
          </Alert>
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle>위험 영역</CardTitle>
              <CardDescription>계정을 삭제하면 복구할 수 없습니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <DeleteAccountDialog />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

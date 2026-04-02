import ContentLayout from "@/components/common/ContentLayout";
import DataTable from "@/components/common/DataTable";
import type { ColumnConfig } from "@/core/types/component/dataTable.type";
import endpoints from "@/core/app/endpoints";
import type { UserDetail } from "shared-types";
import { useCallback, useMemo, useState } from "react";
import { useUserStore } from "@/store/app/user.store";
import CreateUser from "./CreateUser";
import { useHasPermission } from "@/core/utils/permission.utils";
import { SquarePen, Trash2, ShieldAlert } from "lucide-react";
import api from "@/core/app/api";
import { toast } from "react-toastify";
import { useLoaderStore } from "@/store/app/loader.store";

export default function UserList() {
  const { openModal, deleteUser } = useUserStore();
  const canCreate = useHasPermission("user.create");
  const canUpdate = useHasPermission("user.update");
  const canDelete = useHasPermission("user.delete");
  const canRevokeSessions = useHasPermission("user.session.revoke");

  const { startLoader, stopLoader } = useLoaderStore();

  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(0);

  const columns: ColumnConfig<UserDetail>[] = useMemo(
    () => [
      {
        key: "username",
        header: "Username",
        sortable: true,
        searchable: true,
        searchType: "text",
        render: (row) => (
          <div className="flex flex-col">
            <span className="font-bold text-text-primary">{row.username}</span>
            <span className="text-[11px] text-text-secondary opacity-70">{row.uuid}</span>
          </div>
        ),
      },
      {
        key: "email",
        header: "Email Address",
        sortable: true,
        searchable: true,
        searchType: "text",
      },
      {
        key: "firstName",
        header: "Full Name",
        sortable: true,
        render: (row) => `${row.firstName} ${row.lastName}`,
      },
      {
        key: "phoneNumber",
        header: "Phone",
      },
      {
        key: "id",
        header: "Roles",
        render: (row) => (
          <div className="flex flex-wrap gap-1">
            {row.roles?.map((r, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider"
              >
                {r.role?.name}
              </span>
            )) || <span className="text-text-secondary opacity-50 italic text-[10px]">No Roles</span>}
          </div>
        ),
      },
    ],
    []
  );

  const tableActions = useMemo(
    () => [
      {
        label: "Edit User",
        icon: SquarePen,
        onClick: (row: UserDetail) => openModal("edit", row),
        hidden: () => !canUpdate,
      },
      {
        label: "Delete User",
        icon: Trash2,
        onClick: (row: UserDetail) => deleteUser(row.id!, () => setRefresh((c) => c + 1)),
        className: "text-danger hover:bg-danger/10",
        hidden: () => !canDelete,
      },
      {
        label: "Revoke Sessions",
        icon: ShieldAlert,
        onClick: async (row: UserDetail) => {
          if (!confirm(`Are you sure you want to revoke all sessions for ${row.firstName} ${row.lastName}?`)) return;

          startLoader(`revoke-user-${row.uuid}`);
          try {
            await api.delete(endpoints.auth.revokeUserSessions.replace(":userUUID", row.uuid));
            toast.success("All sessions revoked for user");
          } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to revoke sessions");
          } finally {
            stopLoader(`revoke-user-${row.uuid}`);
          }
        },
        className: "text-orange-500 hover:bg-orange-500/10",
        hidden: () => !canRevokeSessions,
      },
    ],
    [canUpdate, canDelete, canRevokeSessions, openModal, deleteUser, startLoader, stopLoader]
  );

  const onFetch = useCallback((data: any) => {
    setCount(data.meta.total);
  }, []);

  return (
    <ContentLayout
      header={{ label: "Users", count }}
      buttons={[
        {
          label: "Create User",
          onClick: () => openModal("create"),
          className: "btn-primary",
          isVisible: canCreate,
        },
      ]}
    >
      <div className="p-1">
        <DataTable
          key={refresh}
          mode="api"
          apiUrl={endpoints.user.list}
          fetchCallback={onFetch}
          columns={columns}
          actions={tableActions}
          initialPageSize={10}
          heightOffset={15.5}
        />
      </div>

      <CreateUser successCallback={() => setRefresh((c) => c + 1)} />
    </ContentLayout>
  );
}

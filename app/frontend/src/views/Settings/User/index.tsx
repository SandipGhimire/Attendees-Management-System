import ContentLayout from "@/components/common/ContentLayout";
import DataTable from "@/components/common/DataTable";
import type { ColumnConfig, TableAction } from "@/core/types/component/dataTable.type";
import endpoints from "@/core/app/endpoints";
import type { UserDetail } from "shared-types";
import { useCallback, useMemo } from "react";

export default function UserList() {
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
    ],
    []
  );

  const actions: TableAction<UserDetail>[] = useMemo(
    () => [
      {
        label: "Edit Profile",
        icon: "edit",
        onClick: (row) => console.log("Edit user", row.uuid),
      },
      {
        label: "Deactivate",
        icon: "user-x",
        onClick: (row) => alert(`Deactivating ${row.username}`),
        className: "text-error",
      },
      {
        label: "Delete Permanently",
        icon: "trash-2",
        onClick: (row) => alert(`Deleting ${row.username}`),
        className: "text-error font-bold",
      },
    ],
    []
  );

  const onFetch = useCallback((data: any) => {
    console.log(data.meta.total);
  }, []);

  return (
    <ContentLayout
      header={{ label: "Users", count: 10 }}
      buttons={[
        {
          label: "Create User",
          onClick: () => alert("Open Create Modal"),
          className: "btn-primary",
        },
      ]}
    >
      <div className="p-1">
        <DataTable
          mode="api"
          apiUrl={endpoints.user.list}
          fetchCallback={onFetch}
          columns={columns}
          actions={actions}
          initialPageSize={10}
          heightOffset={15.5}
        />
      </div>
    </ContentLayout>
  );
}

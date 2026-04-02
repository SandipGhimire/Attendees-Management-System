import ContentLayout from "@/components/common/ContentLayout";
import DataTable from "@/components/common/DataTable";
import type { ColumnConfig } from "@/core/types/component/dataTable.type";
import endpoints from "@/core/app/endpoints";
import type { SystemLog } from "@/core/types/system.type";
import { useCallback, useMemo, useState } from "react";
import { useHasPermission } from "@/core/utils/permission.utils";
import { Eye, Clock, Activity, User as UserIcon } from "lucide-react";
import LogDetailModal from "./LogDetailModal";

export default function SystemLogList() {
  const canRead = useHasPermission("system_logs.read");

  const [count, setCount] = useState(0);
  const [selectedLog, setSelectedLog] = useState<SystemLog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: ColumnConfig<SystemLog>[] = useMemo(
    () => [
      {
        key: "action",
        header: "Action",
        sortable: true,
        render: (row) => (
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${
                row.action === "DELETE"
                  ? "bg-red-500/10 text-red-500"
                  : row.action === "CREATE"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : row.action === "UPDATE"
                      ? "bg-blue-500/10 text-blue-500"
                      : "bg-amber-500/10 text-amber-500"
              }`}
            >
              <Activity size={16} />
            </div>
            <span className="font-bold uppercase text-[11px] tracking-wider">{row.action || "N/A"}</span>
          </div>
        ),
      },
      {
        key: "user",
        header: "User",
        render: (row) => (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-background-tertiary flex items-center justify-center text-text-secondary border border-border-primary overflow-hidden">
              {row.user ? (
                <span className="text-[10px] font-bold uppercase">
                  {row.user.firstName[0]}
                  {row.user.lastName[0]}
                </span>
              ) : (
                <UserIcon size={14} />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-semibold text-text-primary leading-none">
                {row.user ? `${row.user.firstName} ${row.user.lastName}` : "System"}
              </span>
              <span className="text-[10px] text-text-secondary opacity-60 mt-1">
                {row.user ? row.user.email : "Automated Task"}
              </span>
            </div>
          </div>
        ),
      },
      {
        key: "message",
        header: "Message",
        searchable: true,
        searchType: "text",
        render: (row) => <span className="text-sm text-text-secondary font-medium">{row.message}</span>,
      },
      {
        key: "createdAt",
        header: "Time",
        sortable: true,
        render: (row) => (
          <div className="flex items-center gap-2 text-text-secondary">
            <Clock size={14} opacity={0.5} />
            <span className="text-[12px] whitespace-nowrap">{new Date(row.createdAt).toLocaleString()}</span>
          </div>
        ),
      },
    ],
    []
  );

  const tableActions = useMemo(
    () => [
      {
        label: "View Details",
        icon: Eye,
        onClick: (row: SystemLog) => {
          setSelectedLog(row);
          setIsModalOpen(true);
        },
      },
    ],
    []
  );

  const onFetch = useCallback((data: any) => {
    setCount(data.meta.total);
  }, []);

  if (!canRead) {
    return (
      <div className="p-10 text-center text-text-secondary font-medium">
        You do not have permission to access system activity logs.
      </div>
    );
  }

  return (
    <ContentLayout header={{ label: "System Logs", count }}>
      <div className="p-1">
        <DataTable
          mode="api"
          apiUrl={endpoints.system.logs}
          fetchCallback={onFetch}
          columns={columns}
          actions={tableActions}
          initialPageSize={10}
          heightOffset={15}
        />
      </div>

      <LogDetailModal log={selectedLog} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ContentLayout>
  );
}

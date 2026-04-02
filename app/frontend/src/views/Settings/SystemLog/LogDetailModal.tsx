import type { SystemLog } from "@/core/types/system.type";
import { X, Code2, Clock, Activity, User, Info } from "lucide-react";

interface LogDetailModalProps {
  log: SystemLog | null;
  isOpen: boolean;
  onClose: () => void;
}

const LogDetailModal = ({ log, isOpen, onClose }: LogDetailModalProps) => {
  if (!isOpen || !log) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      <div className="bg-[#0f1115] border border-white/10 rounded-[2rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-start bg-gradient-to-b from-white/5 to-transparent">
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-2xl ${
                log.action === "DELETE"
                  ? "bg-red-500/10 text-red-400"
                  : log.action === "CREATE"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : log.action === "UPDATE"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-amber-500/10 text-amber-400"
              }`}
            >
              <Activity size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Activity Details</h2>
              <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm font-medium">
                <Clock size={14} />
                <span>
                  {new Date(log.createdAt).toLocaleString(undefined, {
                    dateStyle: "full",
                    timeStyle: "medium",
                  })}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full transition-all text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1 custom-scrollbar space-y-8">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Info size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Action</span>
              </div>
              <p className="text-lg font-bold text-white leading-tight">{log.action || "N/A"}</p>
            </div>
            <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Activity size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Log Type</span>
              </div>
              <p className="text-lg font-bold text-white leading-tight">{log.type}</p>
            </div>
            <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <User size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">User</span>
              </div>
              <p className="text-lg font-bold text-white leading-tight truncate">
                {log.user ? `${log.user.firstName} ${log.user.lastName}` : "System"}
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Event Message</h3>
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl italic text-gray-300 leading-relaxed font-medium">
              "{log.message}"
            </div>
          </div>

          {/* Metadata/JSON */}
          <div className="space-y-4">
            <div className="flex items-center justify-between ml-1">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Payload Data</h3>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                <Code2 size={12} />
                <span>JSON FORMAT</span>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-[#050608] rounded-2xl p-6 overflow-x-auto border border-white/5 font-mono text-[13px] leading-relaxed text-gray-400 shadow-inner max-h-96">
                <pre className="custom-scrollbar">{JSON.stringify(log.metadata, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-white/[0.05] hover:bg-white/10 text-white rounded-2xl transition-all font-bold text-sm border border-white/10 hover:border-white/20 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogDetailModal;

import { useAuthStore } from "@/store/auth/auth.store";
import { useLoaderStore } from "@/store/app/loader.store";
import api from "@/core/app/api";
import endpoints from "@/core/app/endpoints";
import { toast } from "react-toastify";
import { User, Lock, Phone, Mail, UserCircle, Monitor, ShieldCheck, Trash2, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
  const { user, getUser, sessionId: currentSessionId } = useAuthStore();
  const { startLoader, stopLoader, isLoading } = useLoaderStore();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    middleName: user?.middleName || "",
    lastName: user?.lastName || "",
    phoneNumber: user?.phoneNumber || "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });

  const [sessions, setSessions] = useState<any[]>([]);

  const fetchSessions = async () => {
    try {
      const res = await api.get(endpoints.auth.sessions);
      setSessions(res.data);
    } catch (error) {
      console.error("Failed to fetch sessions", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startLoader("updateProfile");
    try {
      await api.patch(endpoints.user.updateSelf, formData);
      toast.success("Profile updated successfully");
      await getUser();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      stopLoader("updateProfile");
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.password !== passwordData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    startLoader("updatePassword");
    try {
      await api.patch(endpoints.user.updateSelf, {
        oldPassword: passwordData.oldPassword,
        password: passwordData.password,
      });
      toast.success("Password updated successfully");
      setPasswordData({ oldPassword: "", password: "", confirmPassword: "" });
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update password");
    } finally {
      stopLoader("updatePassword");
    }
  };

  const handleRevokeSession = async (sessionId: string) => {
    if (sessionId === currentSessionId) return;

    if (!confirm("Are you sure you want to revoke this session?")) return;

    startLoader(`revoke-${sessionId}`);
    try {
      await api.delete(endpoints.auth.revokeSession.replace(":sessionId", sessionId));
      toast.success("Session revoked successfully");
      await fetchSessions();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to revoke session");
    } finally {
      stopLoader(`revoke-${sessionId}`);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto pb-14">
      {/* Personal Details Section */}
      <div className="space-y-6 md:col-span-1 col-span-2">
        <form onSubmit={handleDetailsSubmit} className="space-y-4 bg-surface p-6 rounded-lg border">
          <div className="flex items-center gap-2 pb-2 mb-5 border-b">
            <UserCircle className="text-primary" size={24} />
            <h2 className="text-xl font-bold text-primary">Personal Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-field">
              <label className="flex items-center gap-1.5">
                <User size={14} /> First Name
              </label>
              <input
                type="text"
                className="input-full"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="form-field">
              <label className="flex items-center gap-1.5">
                <User size={14} /> Middle Name
              </label>
              <input
                type="text"
                className="input-full"
                value={formData.middleName}
                onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
              />
            </div>
          </div>

          <div className="form-field">
            <label className="flex items-center gap-1.5">
              <User size={14} /> Last Name
            </label>
            <input
              type="text"
              className="input-full"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>

          <div className="form-field">
            <label className="flex items-center gap-1.5">
              <Phone size={14} /> Phone Number
            </label>
            <input
              type="text"
              className="input-full"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </div>

          <div className="form-field opacity-60">
            <label className="flex items-center gap-1.5">
              <Mail size={14} /> Email (Read-only)
            </label>
            <input type="email" className="input-full bg-gray-50" value={user?.email} disabled />
          </div>

          <div className="form-field opacity-60">
            <label className="flex items-center gap-1.5">
              <User size={14} /> Username (Read-only)
            </label>
            <input type="text" className="input-full bg-gray-50" value={user?.username} disabled />
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full ${isLoading("updateProfile") ? "btn-loading" : ""}`}
            disabled={isLoading("updateProfile")}
          >
            Update Details
          </button>
        </form>
      </div>

      {/* Password Update Section */}
      <div className="space-y-6 md:col-span-1 col-span-2">
        <form onSubmit={handlePasswordSubmit} className="space-y-4 bg-surface p-6 rounded-lg border">
          <div className="flex items-center gap-2 pb-2 mb-5 border-b">
            <Lock className="text-primary" size={24} />
            <h2 className="text-xl font-bold text-primary">Security</h2>
          </div>
          <div className="form-field">
            <label className="flex items-center gap-1.5">
              <Lock size={14} /> Current Password
            </label>
            <input
              type="password"
              className="input-full"
              value={passwordData.oldPassword}
              onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
              placeholder="Required to change password"
              required={!!passwordData.password}
            />
          </div>

          <div className="form-field">
            <label className="flex items-center gap-1.5">
              <Lock size={14} /> New Password
            </label>
            <input
              type="password"
              className="input-full"
              value={passwordData.password}
              onChange={(e) => setPasswordData({ ...passwordData, password: e.target.value })}
              placeholder="Minimum 8 characters"
              minLength={8}
            />
          </div>

          <div className="form-field">
            <label className="flex items-center gap-1.5">
              <Lock size={14} /> Confirm New Password
            </label>
            <input
              type="password"
              className="input-full"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              placeholder="Confirm your new password"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className={`btn btn-secondary w-full ${isLoading("updatePassword") ? "btn-loading" : ""}`}
              disabled={isLoading("updatePassword") || !passwordData.password}
            >
              Change Password
            </button>
          </div>
          {!passwordData.password && (
            <p className="text-xs text-secondary italic text-center">Fill in new password to enable button</p>
          )}
        </form>

        {/* Tips Section */}
        <div className="bg-primary/5 border border-primary/10 p-4 rounded-lg">
          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
            <Lock size={16} /> Security Tip
          </h4>
          <p className="text-sm text-secondary leading-relaxed">
            Use a strong password that you don't use elsewhere. A mix of letters, numbers, and symbols is recommended
            for maximum security.
          </p>
        </div>
      </div>

      {/* Active Sessions Section */}
      <div className="w-full mx-auto bg-white border rounded-sm col-span-2">
        <div className="flex items-center gap-2 pb-2 mb-6 border-b p-4">
          <Monitor className="text-primary" size={24} />
          <h2 className="text-xl font-bold text-primary">Active Sessions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {sessions.map((session) => (
            <div
              key={session.sessionId}
              className={`p-4 rounded-lg border bg-surface flex flex-col justify-between transition-all ${
                session.sessionId === currentSessionId ? "border-primary/30 ring-1 ring-primary/10 shadow-sm" : ""
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div
                    className={`p-2 rounded-full ${
                      session.sessionId === currentSessionId
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <Monitor size={20} />
                  </div>
                  {session.sessionId === currentSessionId && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck size={10} /> Current Session
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-primary truncate" title={session.deviceName}>
                  {session.deviceName}
                </h3>
                <p className="text-xs text-secondary mt-1 flex items-center gap-1 opacity-70">
                  <span className="font-mono">{session.ipAddress}</span>
                </p>

                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary opacity-60">Last used:</span>
                    <span className="font-medium">{new Date(session.lastUsedAt).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-secondary opacity-60">Created:</span>
                    <span className="font-medium">{new Date(session.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t">
                {session.sessionId === currentSessionId ? (
                  <div className="text-[10px] text-center text-primary font-medium bg-primary/5 py-2 rounded flex items-center justify-center gap-1.5">
                    <ShieldAlert size={12} /> You cannot revoke your current session
                  </div>
                ) : (
                  <button
                    onClick={() => handleRevokeSession(session.sessionId)}
                    disabled={isLoading(`revoke-${session.sessionId}`)}
                    className={`w-full btn btn-sm btn-outline-danger flex items-center justify-center gap-2 ${
                      isLoading(`revoke-${session.sessionId}`) ? "btn-loading" : ""
                    }`}
                  >
                    <Trash2 size={14} /> Revoke Session
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {sessions.length === 0 && (
          <div className="text-center py-12 bg-surface rounded-lg border border-dashed">
            <p className="text-secondary opacity-60">No active sessions found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

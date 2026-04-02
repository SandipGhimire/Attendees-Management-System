export interface SystemLog {
  id: string;
  type: "SYSTEM" | "USER";
  action: "CREATE" | "UPDATE" | "DELETE" | "LOGIN" | "LOGOUT" | "OTHER";
  userId?: string;
  level: "INFO" | "WARN" | "ERROR" | "DEBUG" | "CRITICAL";
  message: string;
  metadata?: any;
  createdAt: string;
  user?: {
    uuid: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
  } | null;
}

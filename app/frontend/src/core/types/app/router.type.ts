export type RouteMeta = {
  require_auth?: boolean;
  permissions?: string[] | string;
};

export type RouterConfig = {
  path?: string;
  index?: boolean;
  import: () => Promise<any>;
  children?: RouterConfig[];
  meta?: RouteMeta;
};

export type divRefCurrent = HTMLDivElement | null;

export type divRef = {
  current: divRefCurrent;
};

export type section = {
  title: string;
  hideTitle?: boolean;
  component: React.ReactElement;
  ref: divRef;
};

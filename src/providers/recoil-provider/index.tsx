import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export const RecoilProvider = ({ children }: { children: ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);

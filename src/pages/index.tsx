import React, { ReactElement } from "react";

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => (
  <div className={`w-full max-w-xl ${className}`}>{children}</div>
);

function Index(_props: {}): ReactElement {
  return (
    <>
      <nav className="fixed bg-slate-900 text-white w-full flex items-center justify-center h-20">
        <MaxWidthContainer>Nav bar</MaxWidthContainer>
      </nav>
      <main className="flex justify-center bg-slate-200 pt-20 pb-5 min-h-screen">
        <MaxWidthContainer className="py-5">Hello, world!</MaxWidthContainer>
      </main>
    </>
  );
}

export default Index;

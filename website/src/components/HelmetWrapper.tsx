import { ReactNode } from "react";
import { Helmet } from "react-helmet";

export default function HelmetWrapper({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}

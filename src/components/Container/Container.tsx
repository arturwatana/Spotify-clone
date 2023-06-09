type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return <div className="h-full w-full  bg-primary">{children}</div>;
}

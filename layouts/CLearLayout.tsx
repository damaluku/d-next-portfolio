type Props = {
  children: React.ReactNode;
};

const CLearLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default CLearLayout;

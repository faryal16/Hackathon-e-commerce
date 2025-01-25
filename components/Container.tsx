import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("max-w-7xl mx-4 sm:mx-6 md:mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
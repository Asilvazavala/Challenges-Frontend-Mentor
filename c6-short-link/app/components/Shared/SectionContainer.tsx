import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className 
}) => {
  return (
    <section className={`max-w-[1400px] px-4 lg:px-20 ${className} w-full`}>
      {children}
    </section>
  );
};

export default SectionContainer;

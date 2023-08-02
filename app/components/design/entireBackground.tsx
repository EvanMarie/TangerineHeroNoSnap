interface EntireBackgroundProps {
  children: React.ReactNode;
}

export default function EntireBackground({ children }: EntireBackgroundProps) {
  return <div className="snapScroll">{children}</div>;
}

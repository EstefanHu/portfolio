const STYLES = {
  display: 'flex',
  width: '100vw',
  margin: '60px auto 0',
};

export default function BlgLayout({ children }: { children: React.ReactNode }) {
  return <div style={STYLES}>{children}</div>;
}

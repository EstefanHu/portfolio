const STYLES = {
  display: 'flex',
  width: '100vw',
  maxWidth: '1000px',
  margin: '60px auto 0',
};

export default function BlgLayout({ children }: { children: React.ReactNode }) {
  return <main style={STYLES}>{children}</main>;
}

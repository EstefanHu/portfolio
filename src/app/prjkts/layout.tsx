const STYLES = {
  padding: '20px 15px 80px',
};

export default function BlgLayout({ children }: { children: React.ReactNode }) {
  return <main style={STYLES}>{children}</main>;
}

const STYLES = {
  borderLeft: '2px solid #dd2d44',
  padding: '4px 0 4px 15px',
  margin: '0 0 30px 5px',
};

export default function MetaSection({ children }: { children: React.ReactNode }) {
  return <div style={STYLES}>{children}</div>;
}

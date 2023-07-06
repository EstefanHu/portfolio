'use client';
const STYLES = {
  border: 'none',
  backgroundColor: 'transparent',
  curor: 'pointer',
};

export default function GoToAppendix({ children }: { children: string }) {
  const goToAppendix = () => {};

  return (
    <button onClick={goToAppendix} style={STYLES}>
      {children}
      <span style={{ color: '#940a0a' }}>*</span>
    </button>
  );
}

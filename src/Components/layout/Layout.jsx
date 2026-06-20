import Navbar from '../Navbar/Navbar';

export default function Layout({ isDark, toggleTheme, children }) {
  return (
    <div className={isDark ? 'dark' : ''}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="max-w-7xl mx-auto px-6">
        {children}
      </main>
    </div>
  );
}

import Navbar from '../Navbar/Navbar';

export default function Layout({ isDark, toggleTheme, children }) {
  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>{children}</main>
      </div>
    </div>
  );
}

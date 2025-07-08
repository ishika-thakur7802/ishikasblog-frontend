import ThemeToggle from './ThemeToggle';
import '../theme.css';

function Header() {
    return (
        <header className="terminal-navbar">
            <div className="terminal-title"><span className="prompt">&gt; npm run blog</span></div>
        </header>
    );
}

export default Header;
import ThemeToggle from './ThemeToggle';
import '../Header.css';

function Header() {
    return (
        <div className="terminal-bar">
            <span>&gt; npm run blog</span>
            <ThemeToggle />
        </div>
    );
}

export default Header;
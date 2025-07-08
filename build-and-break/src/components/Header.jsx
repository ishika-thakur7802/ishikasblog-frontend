import ThemeToggle from './ThemeToggle';
import '../theme.css';

function Header() {
    return (
        <div className="terminal-bar sticky-header">
            <span className="prompt">&gt; npm run blog</span>
            <div className="right-toggle">
                <ThemeToggle/>
            </div>
        </div>
    );
}

export default Header;
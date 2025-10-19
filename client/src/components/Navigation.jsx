import {Link} from "react-router-dom";
import {useState} from "react";
import PropTypes from 'prop-types';

const Navigation =({account})=>{
    const [copied, setCopied] = useState(false);
    
    const copyAddress = () => {
        navigator.clipboard.writeText(account);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    
    return(
        <header>
        <div className="logo">TODO 3.O</div>
        <nav>
          <ul>
          <li>
              <Link className="nav_link" to="/">
                Wallet
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/view-all-tasks">
                View All Tasks
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/create-task">
                Create Task
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/view-task">
                View Task
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/update-task">
                Update Task
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/delete-task">
                Delete Task
              </Link>
            </li>
            {account && (
              <li className="wallet_info_nav">
                <div className="wallet_info">
                  <span className="wallet_icon">🔗</span>
                  <span className="wallet_address_header">
                    {account.slice(0, 6)}...{account.slice(-4)}
                  </span>
                  <button 
                    className="copy_btn" 
                    onClick={copyAddress}
                    title="Copy address"
                  >
                    {copied ? '✓' : '📋'}
                  </button>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
}

Navigation.propTypes = {
    account: PropTypes.string,
};

export default Navigation;